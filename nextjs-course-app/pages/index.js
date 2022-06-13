import { Fragment } from "react";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const fetauredPosts = getFeaturedPosts();

  return {
    props: {
      posts: fetauredPosts
    },
  }
}

export default HomePage;
