'use client'
import React from 'react'
import { ServerDataType } from '@/service/types/type'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { serverChange } from '@/lib/redux/features/characterServerState'

interface Props {
  serverData: ServerDataType
}

export default function ServerSelectBox({ serverData }: Props) {
  const server = useAppSelector((state) => state.characterServerState.value)
  const dispatch = useAppDispatch()

  const serverHandler = (server: string) => {
    dispatch(serverChange(server))
  }

  return (
    <ul>
      {serverData.rows.map((item) => {
        const { serverId, serverName } = item
        return (
          <li
            key={serverId}
            onClick={() => {
              serverHandler(serverId)
            }}
          >
            {serverName}
          </li>
        )
      })}
    </ul>
  )
}
