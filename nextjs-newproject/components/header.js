import Link from 'next/link'

function Header(){
    return <header>
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        Anasayfa
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        Hakkında
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default Header;