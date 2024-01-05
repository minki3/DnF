import React from 'react'
import { getCharacterMoreInformation } from '@/service/api/getCharacterMoreInformation'
import CharacterInformation from '@/components/CharacterInformation'

interface Props {
  searchParams: { server: string; Id: string }
}

export default async function CharacterPage({ searchParams }: Props) {
  const characterInformationDetail = await getCharacterMoreInformation(
    searchParams.server,
    searchParams.Id,
    '',
  )
  console.log(characterInformationDetail)
  return (
    <>
      <CharacterInformation
        characterInformationDeatil={characterInformationDetail}
        server={searchParams.server}
      />
    </>
  )
}
