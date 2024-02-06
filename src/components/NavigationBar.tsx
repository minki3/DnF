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
      <div className="flex flex-col justify-start hover:cursor-pointer basis-1/3">
        <Link className="flex flex-col" href={'/'}>
          <span className="font-bold text-[10px] lg:text-2xl">DnF-Search</span>
          <span className="text-[10px] lg:text-[13px]">내 캐릭터 찾기</span>
        </Link>
      </div>

      <div className="basis-1/3 text-center flex items-center justify-center">
        <ServerSelectBox serverData={serverData} />
      </div>

      <div className="basis-1/3 flex items-center justify-end">
        <Link href={'/rank'}>
          <span className=" text-[10px] lg:text-lg cursor-pointer underline-offset-2 hover:font-bold hover:cursor-pointer">
            랭킹보기
          </span>
        </Link>
      </div>
    </nav>
  )
}
