import Link from 'next/link'
import React from 'react'
import NavbarLinks from './NavbarLinks'
import { ModeToggle } from './ModeToggle';
import { Button } from './ui/button';
import MobileMenu from './MobileMenu';


const Navbar = () => {
  return (
    <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
      <div className='md:col-span-3'>
        <Link href='/'>
          <h1 className='text-2xl font-semibold'>Adi<span className='text-primary'>UI</span>Shop</h1>
        </Link>
      </div>
      <NavbarLinks />
      <div className='flex items-center gap-x-2 ms-auto md:col-span-3'>
        <div className='hidden md:flex'><ModeToggle /></div>

        <Link href='/login'>
          <Button>Login</Button>
        </Link>
        <Link href='/register'>
          <Button variant="secondary">Register</Button>
        </Link>
        <div className='md:hidden'>
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
