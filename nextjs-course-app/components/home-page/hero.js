import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/ataturkphoto.png"
          alt="Image showing Ataturk"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Emre</h1>
      <p>I blog about web development - especially front end like React </p>
    </section>
  );
}

export default Hero;
