'use client'
import React, { useEffect, useState } from 'react'
import ServerSelectBox from '@/components/ServerSelectBox'
import { getServerApiCsr } from '@/service/api/getServerApi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SearchOrRank from '@/components/SearchOrRankNav'

export default function NavigationBar() {
  const [serverData, setServerData] = useState()
  const pathUrl = usePathname()
  const location = '/'
  const rank = '/rank'

  useEffect(() => {
    getServerApiCsr().then((res) => {
      setServerData(res)
    })
  }, [])

  if (pathUrl === location || pathUrl === rank) {
    return <SearchOrRank />
  }
  return (
    <nav className="fixed border-b-2 border-black  w-full p-4 flex bg-white">
      <Link
        href={'/'}
        className="flex flex-col item hover:cursor-pointer basis-1/3"
      >
        <span className="font-bold text-sm lg:text-2xl">DnF-Search</span>
        <span className="text-sm">(내 캐릭터 찾기)</span>
      </Link>

      <div className="basis-1/3 text-center flex items-center justify-center">
        <ServerSelectBox serverData={serverData} />
      </div>
      <div className="basis-1/3 flex items-center justify-end">
        <Link href={'/rank'}>
          <span className=" text-lg cursor-pointer underline-offset-2 hover:font-bold ">
            랭킹보기
          </span>
        </Link>
      </div>
    </nav>
  )
}
