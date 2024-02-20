'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function BeforeSearchBox() {
  const serverName = (server?: string) => {
    switch (server) {
      case 'all':
        return '전체'
      case 'cain':
        return '카인'
      case 'diregie':
        return '디레지에'
      case 'siroco':
        return '시로코'
      case 'prey':
        return '프레이'
      case 'casillas':
        return '카시야스'
      case 'hilder':
        return '힐더'
      case 'anton':
        return '안톤'
      case 'bakal':
        return '바칼'
      default:
        return ''
    }
  }

  const [searchHistory, setSearchHistory] = useState<
    { server: string; id: string }[]
  >([])

  useEffect(() => {
    const savedData = localStorage.getItem('save')
    if (savedData) {
      setSearchHistory(JSON.parse(savedData))
    }
  }, [])

  const handleDelete = (idx: number) => {
    const updatedSearchHistory = searchHistory.filter(
      (_, sidx: number) => sidx !== idx,
    )
    setSearchHistory(updatedSearchHistory)
    localStorage.setItem('save', JSON.stringify(updatedSearchHistory))
  }

  return (
    <div className="w-[250px] h-[300px] lg:w-[500px] lg:h-[300px] border rounded-lg mt-10 p-4 flex items-center flex-col text-[10px] lg:text-base ">
      <span className=" text-[10px] lg:text-[12px] cursor-default mb-3">
        최근 검색
      </span>
      <ul className="w-full overflow-scroll">
        {searchHistory.map(
          (item: { server: string; id: string }, idx: number) => (
            <li key={idx} className="flex mb-3 cursor-pointer">
              <span className="basis-1/3">
                <span className="border p-1 rounded-md font-thin">
                  {serverName(item.server)}
                </span>
              </span>
              <Link
                href={{
                  pathname: '/search',
                  query: {
                    server: item.server,
                    nickname: item.id,
                  },
                }}
                className="basis-1/3 text-center"
              >
                <span className="basis-1/3 text-center">{item.id}</span>
              </Link>
              <span
                className="basis-1/3 text-end"
                onClick={() => handleDelete(idx)}
              >
                x
              </span>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}
