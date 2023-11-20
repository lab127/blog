import Content from "@/components/blog/Content";
import { createSlug } from "@/lib/functions";
import { posts } from "@/lib/vars";
import fs from "fs";
import matter from "gray-matter";
import { Metadata } from "next";

function getContent(slug: string[]) {
  const file = `${posts}/${slug.join("-")}.md`;
  const content = fs.readFileSync(file, "utf8");
  const postMatter = matter(content);
  return postMatter;
}

export async function generateStaticParams() {
  const files = fs.readdirSync(posts);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  return markdownPosts.map((post) => ({
    slug: createSlug(post.replace(".md", "")),
  }));
}

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const post = getContent(slug);

  return {
    title: post.data.title,
    description: post.data.excerpt,
    robots: { index: true, follow: true, nocache: true },
  };
}

export default function Detail({ params }: Props) {
  const { slug } = params;
  const post = getContent(slug);
  return (
    <>
      <h1 className="py-4">{post.data.title}</h1>
      <div className="leading-relaxed">
        <Content content={post.content} />
      </div>
    </>
  );
}
