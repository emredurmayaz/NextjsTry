import Head from "next/head";

export default function Home({ movies }) {
  console.log(movies.results);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Anasayfa</h3>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const request = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=9838c3dd4e5ae9d2eff91813e92c1f3c&language=en-US&page=1"
  );
  const movies = await request.json();

  return {
    props: {
      movies,
    },
  };
}
