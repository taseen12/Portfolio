"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Navlink = ({link}) => {
    const pathname = usePathname();
  return (
    <div>
        <Link className={`rounded p-1 ${pathname === link.url && "bg-black text-white"}`} href={link.url}>{link.title}</Link>
    </div>
  )
}

export default Navlink