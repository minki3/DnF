import React from 'react'
import { getServerApi } from '@/service/api/getServerApi'
import ServerSelectBox from '@/components/ServerSelectBox'
import NickNameInput from '@/components/NickNameInput'

export default async function CharacterSearch() {
  const getServerData = await getServerApi()

  return (
    <div>
      <ServerSelectBox serverData={getServerData} />
      <NickNameInput />
    </div>
  )
}
