"use client";
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { navbarLinks } from '@/app/constants/MenuLinks'
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const MobileMenu = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className='w-4 h-4'></Menu>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className='mt-5 flex px-2 space-y-1 flex-col'>
          {navbarLinks.map((link) => (
            <Link key={link.id} href={link.url} className={cn(
              pathname === link.url ? 'bg-muted' : 'hover:bg-muted hover:bg-opacity-75',
              'group flex items-center px-2 py-2 rounded-md font-medium ')}>
              {link.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
