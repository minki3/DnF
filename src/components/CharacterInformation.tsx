import { CharacterInformationStatusType } from '@/service/types/type'
import React from 'react'
import CharacterInformationHeader from '@/components/CharacterInformationHeader'

interface Props {
  characterInformationDeatil: CharacterInformationStatusType
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
