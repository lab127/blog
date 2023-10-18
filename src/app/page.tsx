import fs from "fs";
import Link from "next/link";
import { posts } from "@/lib/vars";
import matter from "gray-matter";
import { PostMeta } from "@/lib/types";

function getPostMeta(folder: string): PostMeta[] {
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  //  start use gray-matter
  const posts = markdownPosts.map((fileMd) => {
    const fileContents = fs.readFileSync(`${folder}/${fileMd}`, "utf8");
    const postMatter = matter(fileContents);

    return {
      title: postMatter.data.title,
      date: postMatter.data.date,
      excerpt: postMatter.data.excerpt,
      slug: fileMd.replace(".md", ""),
    };
  });

  return posts;
}

function createSlug(slug: string) {
  const slugArr = slug.split("-");
  const regexDate = /\d{4}-\d{2}-\d{2}-/i;
  const slugStr = slug.replace(regexDate, "");
  const slugDate = slugArr.slice(0, 3).join("/");
  return `${slugDate}/${slugStr}`;
}

export default function Home() {
  const postsMeta = getPostMeta(posts);
  return (
    <ul>
      {postsMeta.map((postMeta) => (
        <li key={postMeta.slug}>
          <Link href={createSlug(postMeta.slug)}>{postMeta.title}</Link>
          <p>slug asli: {postMeta.slug}</p>
          <p>{postMeta.excerpt}</p>
        </li>
      ))}
    </ul>
  );
}
