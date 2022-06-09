import Link from "next/link";

import Logo from './logo';
import classes from './main-navigation.module.css';

function MainNaviagtion() {
  return (
    <header className={classes.header}>
      <Link>
        <a>
          <Logo href="/" />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNaviagtion;
