import React from 'react'
import { getCharacterInformation } from '@/service/api/getCharacterInformation'
import { getServerApi } from '@/service/api/getServerApi'
import ServerSelectBox from '@/components/ServerSelectBox'
import CharacterSearchResult from '@/components/CharacterSearchResult'

interface Props {
  searchParams: { server: string; nickname: string }
}

export default async function SearchPage({ searchParams }: Props) {
  const getServerData = await getServerApi()
  const characterData = await getCharacterInformation(
    searchParams.server,
    searchParams.nickname,
  )
  console.log(searchParams)
  console.log('1', characterData)

  return (
    <div>
      <ServerSelectBox serverData={getServerData} />
      <CharacterSearchResult
        charactersData={characterData}
        serverData={getServerData}
      />
    </div>
  )
}
