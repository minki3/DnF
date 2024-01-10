import React from 'react'
import { getCharacterMoreInformation } from '@/service/api/getCharacterMoreInformation'
import CharacterInformation from '@/components/CharacterInformation'
import CharacterModal from '@/components/CharacterModal'

interface Props {
  searchParams: { server: string; Id: string }
}

export default async function CharacterPage({ searchParams }: Props) {
  const characterInformationDetail = await getCharacterMoreInformation(
    searchParams.server,
    searchParams.Id,
    'status',
  )

  return (
    <>
      <CharacterInformation
        characterInformationDeatil={characterInformationDetail}
        server={searchParams.server}
      />
      <CharacterModal characterStatus={characterInformationDetail.status} />
    </>
  )
}
