"use client"
import Link from "next/link";
import { useState } from 'react';
import Image from 'next/image';
import Navlink from "./Navlink";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      {/* linksssssssssss */}
      <div className='hidden md:flex gap-4 w-1/3'>
      {links.map((link) => (
                <Navlink link={link} key = {link.title}/>
        
              
              ))}
      </div>
      {/* logooooooooooo */}

        <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
            <Link href="/" className='text-sm bg-black rounded-md font-semibold
            p-1 flex items-center justify-center'>
            <span className='text-white px-2'>Elan</span>
            <span className='w-12 h-8 rounded bg-white text-black flex justify-center align-middle items-center'>Md.</span>
            <span className='text-white px-2'>Taseen</span>
            </Link>
        </div>
{/* sociallllll */}
        <div className="hidden md:flex gap-4 w-1/3">
        <Link href="/">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
        <div className='md:hidden'>
            <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={(()=>setOpen(!open))}>
                <div className='w-10 h-1 bg-white rounded'>

                </div>
                <div className='w-10 h-1 bg-white rounded'>

                </div>
                <div className='w-10 h-1 bg-white rounded'>
                </div>
            </button>
            {open && (
            <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
              {links.map((link) => (
                <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
              ))}
            </div>
            )}
        </div>
   
    </div>
    
  )
}

export default Navbar
