"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Nav(){
    const pathName = usePathname()
    return   (
        <nav className="flex gap-4 p-4 bg-gray-800 text-white">
        <Link href={'/'}>Home</Link>
        <Link href={'/hello'} className={pathName==='/hello'?'font-bold':''}>Go to Hello</Link>
        <Link href={'/renderings'} className={pathName==='/renderings'?'font-bold':''}>Renderings</Link>
        <Link href={'/counter'} className={pathName==='/counter'?'font-bold':''}>Counter</Link>
            <Link href={'/contacts'} className={pathName==='/contacts'?'font-bold':''}>Contacts</Link>

        </nav>
    );
}