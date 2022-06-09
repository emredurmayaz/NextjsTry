import Link from "next/link";

function MainNaviagtion() {
  return (
    <header>
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
