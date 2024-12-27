"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Sidebar from './Sidebar';
import { navLinks } from './constants/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const handleSidebarOpen = () => {
        setIsSidebarActive(true);
    }
    const handleSidebarClose = () => {
        setIsSidebarActive(false);
    }
    const pathname = usePathname()
  return (
    <>
    <header className='fixed top-0 left-0 z-20 h-[88px] py-6 px-6 w-full md:h-[96px] lg:h-[136px] md:py-0 md:pl-10 lg:pl-[64px] lg:pt-10 md:pr-0'>
        <nav className='flex justify-between items-center'>
            <div className='flex lg:flex-1   lg:pr-0 items-center z-20'>
                <Image src="/images/shared/logo.svg" alt="Logo" width={40} height={40} className='md:w-[48px] md:h-[48px] md:mr-10 lg:mr-[64px] transition-all duration-200' priority={true}/>
                <div className='md:hidden lg:block w-full h-[1px] bg-white/25'></div>
            </div>
            <button onClick={handleSidebarOpen}>
                <Image src="/images/shared/icon-hamburger.svg" alt="Logo" width={24} height={21} className='md:hidden'/>
            </button>
                <ul className='w-full transition-all duration-300 hidden relative md:flex lg:relative z-20 text-center gap-12 bg-color-4 lg:bg-color-1/30 lg:backdrop-blur-2xl justify-end px-10 max-w-[736px] lg:px-[64px]'>
                {navLinks.map((item, index) => (
                     <li className={`font-barlowcon uppercase text-color-3 tracking-[2px] h-[96px] flex items-center z-22 relative  ${item.link === pathname ? 'before:absolute before:block before:z-50 before:bg-color-3 before:bottom-0 before:left-0 before:h-1 before:w-full' : ''}`} key={index}><Link href={item.link} className={`h-full flex items-center hover:-translate-y-[4px] transition-all duration-300 ${item.link !== pathname ? 'before:opacity-0 before:absolute hover:before:opacity-100 before:bg-color-3/60 before:h-1 before:w-full before:-bottom-1 before:left-0 before:transition-all before:duration-300' : ''}`}><span className={`font-bold mr-1 tracking-[2.7px] ${index === 0 ? 'hidden' : ''} lg:inline`}>{item.num} </span>{item.text}</Link></li>
                ))}
                </ul>
            
        </nav>
    </header>
    <Sidebar handleClose={handleSidebarClose} className={isSidebarActive ? 'right-0' : ''}/>
    </>
  )
}

export default Navbar