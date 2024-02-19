import React, { Suspense } from 'react'
import { getCharacterInformation } from '@/service/api/getCharacterInformation'
import { getServerApi } from '@/service/api/getServerApi'
import CharactersNotFound from '@/components/CharactersNotFound'
import SkeletonComponent from '@/components/skeleton/SkeletonComponent'

interface Props {
  searchParams: { server: string; nickname: string }
}

export default async function SearchPage({ searchParams }: Props) {
  const CharacterSearchResult = React.lazy(
    () => import('@/components/CharacterSearchResult'),
  )
  const getServerData = await getServerApi()
  const characterData = await getCharacterInformation(
    searchParams.server,
    searchParams.nickname,
  )
  if (characterData.error) return <CharactersNotFound />

  const filterData = characterData.rows
    .filter((item: any) => item.fame !== null)
    .sort((a: any, b: any) => b.fame - a.fame)

  if (characterData.error || filterData.length === 0)
    return <CharactersNotFound />

  return (
    <Suspense fallback={<SkeletonComponent type="search" />}>
      <CharacterSearchResult
        charactersData={filterData}
        serverData={getServerData}
      />
    </Suspense>
  )
}
