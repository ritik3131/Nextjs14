import Link from "next/link";

function Blog() {
  return (
    <div>
      <h1>Blog page</h1>
      <Link href="/blog/post-1">Post-1</Link>
      <Link href="/blog/post-2">Post-2</Link>
    </div>
  );
}

export default Blog;
