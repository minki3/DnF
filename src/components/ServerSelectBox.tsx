'use client'
import React from 'react'
import { ServerDataType } from '@/service/types/type'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { serverChange } from '@/lib/redux/features/characterServerState'
import NickNameInput from '@/components/NickNameInput'
import Link from 'next/link'
import readingGlasses from '@public/icon/readingGlasses.png'
import Image from 'next/image'

interface Props {
  serverData: ServerDataType
}

export default function ServerSelectBox({ serverData }: Props) {
  const dispatch = useAppDispatch()

  const userData = useAppSelector((state) => state.characterServerState.value)

  const serverHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedServer = event.target.value
    dispatch(serverChange(selectedServer))
  }
  console.log(userData)

  return (
    <div className="flex items-center">
      <select
        className="  border-black rounded-lg mr-4 p-2"
        onChange={serverHandler}
      >
        <option value="all">서버선택</option>
        {serverData.rows.map((item) => {
          const { serverId, serverName } = item
          return (
            <option
              key={serverId}
              value={serverId}
              className="text-sm hover:cursor-pointer"
            >
              {serverName}
            </option>
          )
        })}
      </select>
      <NickNameInput />
      <Link
        href={{
          pathname: '/search',
          query: { server: userData.server, nickname: userData.id },
        }}
      >
        <div className="w-[40px] h-[40px] border border-black rounded-lg flex justify-center items-center">
          <Image
            className=" hover:cursor-pointer"
            src={readingGlasses}
            alt="readingGlasses"
            width={30}
            height={30}
          />
        </div>
      </Link>
    </div>
  )
}
