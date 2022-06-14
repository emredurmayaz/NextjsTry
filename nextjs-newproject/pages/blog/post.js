import Head from "next/head";
import Link from "next/link";

function Post() {
  return (
    <div>
      <Head>
        <title>Blog Post</title>
      </Head>
      <h3>Post Page</h3>
      <Link href="/">Geri Dön</Link>
    </div>
  );
}

export default Post;
