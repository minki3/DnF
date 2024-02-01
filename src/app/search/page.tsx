import React from 'react'
import { getCharacterInformation } from '@/service/api/getCharacterInformation'
import { getServerApi } from '@/service/api/getServerApi'
import CharacterSearchResult from '@/components/CharacterSearchResult'
import CharactersNotFound from '@/components/CharactersNotFound'

interface Props {
  searchParams: { server: string; nickname: string }
}

export default async function SearchPage({ searchParams }: Props) {
  const getServerData = await getServerApi()
  const characterData = await getCharacterInformation(
    searchParams.server,
    searchParams.nickname,
  )

  if (characterData.error || characterData.rows.length === 0)
    return <CharactersNotFound />

  return (
    <>
      <CharacterSearchResult
        charactersData={characterData}
        serverData={getServerData}
      />
    </>
  )
}
