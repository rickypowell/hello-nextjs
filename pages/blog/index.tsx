import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        <li>
          <Link href="/blog/first-file-entry">
            <a>First blog entry</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}