'use client'
import React, { useState } from 'react'
import { ServerDataType } from '@/service/types/type'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { serverChange } from '@/lib/redux/features/characterServerState'
import NickNameInput from '@/components/NickNameInput'
import Link from 'next/link'

interface Props {
  serverData: ServerDataType
}

export default function ServerSelectBox({ serverData }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()

  const userData = useAppSelector((state) => state.characterServerState.value)

  const serverHandler = (server: string) => {
    dispatch(serverChange(server))
  }
  console.log(userData)

  return (
    <>
      <ul className="py-2">
        {serverData.rows.map((item) => {
          const { serverId, serverName } = item
          return (
            <li
              key={serverId}
              onClick={() => {
                serverHandler(serverId)
              }}
              className="text-sm hover:cursor-pointer"
            >
              {serverName}
            </li>
          )
        })}
      </ul>
      <NickNameInput />
      <Link
        href={{
          pathname: '/search',
          query: { server: userData.server, nickname: userData.id },
        }}
      >
        검색
      </Link>
    </>
  )
}
