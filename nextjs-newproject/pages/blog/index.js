import Head from "next/head";
import Link from "next/link";


function Home() {
  return (
    <div>
        <Head>
        <title>Blog</title>
      </Head>
      <h3>Blog Page</h3>
      <Link href="/">Geri Dön</Link>
    </div>
  );
}
export default Home;
