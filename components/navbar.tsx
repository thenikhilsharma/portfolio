"use client"

import React, { useState } from 'react';
import NavElement from './NavElement';

const Navigation: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
  };

  const navItems = [
    { href: "/", text: "About" },
    { href: "/resume", text: "Resume" },
    { href: "/portfolio", text: "Portfolio" },
    { href: "/blog", text: "Blog" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <nav className="navbar">
      <ul className='nav_links'>
        {navItems.map((item, index) => (
          <NavElement
          key={index}
          isActive={activeIndex === index}
            href={item.href}
            text={item.text}
            handleClick={() => handleNavClick(index)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
