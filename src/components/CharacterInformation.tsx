import { CharacterInformationDetailType } from '@/service/types/type'
import React from 'react'
import CharacterInformationHeader from '@/components/CharacterInformationHeader'

interface Props {
  characterInformationDeatil: CharacterInformationDetailType
  server: string
}

export default function CharacterInformation({
  characterInformationDeatil,
  server,
}: Props) {
  return (
    <div>
      <CharacterInformationHeader
        characterInformationDetail={characterInformationDeatil}
        server={server}
      />
    </div>
  )
}
