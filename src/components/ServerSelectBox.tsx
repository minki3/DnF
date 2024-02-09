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

  const serverHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedServer = event.target.value
    dispatch(serverChange(selectedServer))
  }
  console.log(userData)
  return (
    <div className="flex items-center">
      <select
        className=" rounded-lg lg:p-[10px] mr-2 text-[10px] lg:text-lg"
        onChange={serverHandler}
      >
        <option value="all" className="">
          서버선택
        </option>
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
        <div className="w-[25px] h-[25px] lg:w-[40px] lg:h-[40px]  flex justify-center items-center hover:border  hover:rounded-lg">
          <Image
            className=" hover:cursor-pointer w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]"
            src={readingGlasses}
            alt="readingGlasses"
            width={0}
            height={0}
          />
        </div>
      </Link>
    </div>
  )
}
