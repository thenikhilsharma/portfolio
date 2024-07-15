"use client"

import React from 'react'
import Link from 'next/link'
import { BrowserRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className='navbar'>
      <ul className="nav_links">
        <li><Link href="/"> About </Link></li>
        <li>
        <Link href="/resume">
          Resume
        </Link>
        </li>
          <li><Link href="/portfolio"> Portfolio </Link></li>
          <li><Link href="/blog"> Blog </Link></li>
          <li><Link href="/contact"> Contact </Link></li>
      </ul>
    </nav>
  )
}

export default navbar