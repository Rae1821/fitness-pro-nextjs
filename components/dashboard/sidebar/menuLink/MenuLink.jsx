'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

const MenuLink = ({ item }) => {

    const pathname = usePathname();

  return (
    <Link href={item.path} className={`"p-4 flex items-center gap-4 my-1 rounded-sm" ${pathname === item.path}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink
