"use client";

import { cn } from '@/lib/utils';
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import { navbarLinks } from '@/app/constants/MenuLinks';

const NavbarLinks = () => {
  const pathname = usePathname();

  return (
    <div className='hidden md:flex justify-center items-center col-span-6 gap-x-2'>
      {navbarLinks.map((link) => (
        <Link key={link.id} href={link.url} className={cn(
          pathname === link.url ? 'bg-muted' : 'hover:bg-muted hover:bg-opacity-75',
          'group flex items-center px-2 py-2 rounded-md font-medium ')}>
          {link.name}
        </Link>
      ))}
    </div>
  )
}

export default NavbarLinks
