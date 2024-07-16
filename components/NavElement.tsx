'use client'

import Link from "next/link";

interface NavElementProps {
  isActive: boolean;
  href: string;
  text: string;
  handleClick: () => void;
}

const NavElement: React.FC<NavElementProps> = ({ isActive, href, text, handleClick }) => {
  return (
    <li onClick={handleClick} className={isActive ? 'Active' : 'nActive'}>
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default NavElement;