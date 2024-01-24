'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SearchOrRank() {
  const pathname = usePathname()
  const main = '/'
  const rank = '/rank'
  return (
    <nav className="fixed top-0 p-4  w-full flex items-center justify-center">
      <Link href={main}>
        <span
          className={`${
            pathname === main && 'font-bold border-b-2 border-black'
          } p-6 cursor-pointer `}
        >
          캐릭터검색
        </span>
      </Link>
      <Link href={rank}>
        <span
          className={`${
            pathname === rank && 'font-bold border-b-2 border-black'
          } p-6 cursor-pointer`}
        >
          랭킹보기
        </span>
      </Link>
    </nav>
  )
}
