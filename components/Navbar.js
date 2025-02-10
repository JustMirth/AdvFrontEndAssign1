import Link from 'next/link';

const Navbar = () => (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/page1">Page 1</Link></li>
        <li><Link href="/page2">Page 2</Link></li>
      </ul>
    </nav>
);
  
export default Navbar;