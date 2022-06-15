import Link from "next/link";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Anasayfa</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Hakkında</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>
        {`
          .header {
            background-color: white;
            border-bottom: 1px solid #ccc;

            ul {
              display: flex;

              li {
                a {
                  height: 60px;
                  display: flex;
                  align-items: center;
                  padding: 0 20px;
                  color: #333;
                  text-decoration: none;
                }
              }
            }
          }
        `}
      </style>
    </header>
  );
}

export default Header;
