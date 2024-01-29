'use client'
import React from 'react'
import { ServerDataType } from '@/service/types/type'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { reset, serverChange } from '@/lib/redux/features/characterServerState'
import { saveSearch } from '@/lib/redux/features/beforeSearchState'
import NickNameInput from '@/components/NickNameInput'
import Link from 'next/link'
import readingGlasses from '@public/icon/readingGlasses.png'
import Image from 'next/image'

interface Props {
  serverData?: ServerDataType
  large?: 'large'
}

export default function ServerSelectBox({ serverData, large }: Props) {
  const dispatch = useAppDispatch()

  const userData = useAppSelector((state) => state.serverIdSave)
  console.log(userData)

  const serverHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedServer = event.target.value
    dispatch(serverChange(selectedServer))
  }

  return (
    <div className="flex items-center">
      <select className=" rounded-lg  p-[10px] mr-2" onChange={serverHandler}>
        <option value="all">서버선택</option>
        {serverData &&
          serverData.rows.map((item) => {
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
      <NickNameInput large={large} />
      <Link
        href={{
          pathname: '/search',
          query: { server: userData.value.server, nickname: userData.value.id },
        }}
        onClick={() => {
          dispatch(
            saveSearch({
              server: userData.value.server,
              id: userData.value.id,
            }),
          )
          dispatch(reset())
        }}
      >
        <div className="w-[40px] h-[40px]  flex justify-center items-center hover:border  hover:rounded-lg">
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
