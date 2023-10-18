import { posts } from "@/lib/vars";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

type Props = {
  params: { slug: string[] };
};

function getContent(slug: string[]) {
  const file = `${posts}/${slug.join("-")}.md`;
  const content = fs.readFileSync(file, "utf8");
  const postMatter = matter(content);
  return postMatter;
}

export default function page({ params }: Props) {
  const { slug } = params;
  const post = getContent(slug);
  return (
    <>
      <h1>{post.data.title}</h1>
      <Markdown>{post.content}</Markdown>
    </>
  );
}
