import React from 'react'
import { ServerDataType } from '@/service/types/type'

interface Props {
  serverData: ServerDataType
}

export default function ServerSelectBox({ serverData }: Props) {
  return (
    <ul>
      {serverData.rows.map((item) => {
        const { serverId, serverName } = item
        return <li key={serverId}>{serverName}</li>
      })}
    </ul>
  )
}
