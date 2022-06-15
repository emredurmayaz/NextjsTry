import Head from "next/head";
import Popular from "../components/popular";

export default function Home({ movies }) {
  console.log(movies.results);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3>Popüler Filmler</h3>

      <Popular movies={movies} />
    </>
  );
}

export async function getServerSideProps() {
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
