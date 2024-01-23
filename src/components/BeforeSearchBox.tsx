'use client'
import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks'
import { deleteSearch } from '@/lib/redux/features/beforeSearchState'
import Link from 'next/link'

export default function BeforeSearchBox() {
  const saveServer = useAppSelector((state) => state.saveSearch)
  const dispatch = useAppDispatch()
  console.log(saveServer)

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
        return <></>
    }
  }

  // useEffect(() => {
  //   console.log('1')

  //   // saveServer.value 배열의 내용을 복사하여 새로운 배열을 만듦
  //   const newData = saveServer.value.map((item) => ({
  //     server: item.server,
  //     id: item.id,
  //   }))

  //   localStorage.setItem('saveServer', JSON.stringify({ ...newData, newData }))
  // }, [saveServer.value])

  const newData = saveServer.value.map((item) => ({
    server: item.server,
    id: item.id,
  }))

  localStorage.setItem('saveServer', JSON.stringify(newData))

  return (
    <div className="w-[500px] h-[300px] border rounded-lg mt-10 p-4 flex items-center flex-col">
      <span className=" text-[12px] cursor-default mb-3">최근 검색</span>
      <ul className="w-full">
        {saveServer.value.length !== 0 &&
          saveServer.value.map((item, idx) => {
            return (
              <li key={idx} className="flex mb-3 cursor-pointer">
                <span className=" basis-1/3">
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
                  className=" basis-1/3 text-center"
                >
                  <span className=" basis-1/3 text-center">{item.id}</span>
                </Link>
                <span className=" basis-1/3 text-end">
                  <span
                    onClick={() => {
                      dispatch(deleteSearch(item))
                    }}
                  >
                    x
                  </span>
                </span>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
