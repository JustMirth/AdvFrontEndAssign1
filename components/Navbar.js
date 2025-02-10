import Link from 'next/link';

const Navbar = () => (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/page1">Conditional Rendering</Link></li>
        <li><Link href="/page2">Event Handlers</Link></li>
      </ul>
    </nav>
);
  
export default Navbar;