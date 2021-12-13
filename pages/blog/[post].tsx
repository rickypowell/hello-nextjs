import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { join } from "path";
import matter from "gray-matter";

type MdxMatter = {
  data: any;
  content: string;
  slug: string;
};

type PostProps = {
  post?: MdxMatter;
  content?: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const filenameToMatter = (filename: string): MdxMatter => {
  const slug = filename.replace(`.mdx`, "");
  const fullPath = join(join(process.cwd(), "posts"), `${slug}.mdx`);
  const { data, content } = matter.read(fullPath);
  return {
    slug,
    data,
    content,
  };
};

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<PostProps>> {
  if (!context.params?.post) {
    return {
      props: {},
    };
  }
  const filename = `${context.params.post.toString()}.mdx`;
  const post = filenameToMatter(filename);
  const content = await serialize(post.content);
  return {
    props: {
      post,
      content,
    },
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function Post(props: PostProps) {
  return (
    <div>
      <h2>{props.post?.data.title}</h2>
      <i>{props.post?.data.author}</i>
      <div>
        {props.content && <MDXRemote { ...props.content } />}
      </div>
    </div>
  );
}