import {
  CharacterInformationStatusType,
  JobBuffType,
} from '@/service/types/type'
import React from 'react'
import CharacterInformationHeader from '@/components/CharacterInformationHeader'

interface Props {
  characterInformationDeatil: CharacterInformationStatusType
  server: string
  characterBuffStatus: JobBuffType
}

export default function CharacterInformation({
  characterInformationDeatil,
  server,
  characterBuffStatus,
}: Props) {
  return (
    <div>
      <CharacterInformationHeader
        characterInformationDetail={characterInformationDeatil}
        server={server}
        characterBuffStatus={characterBuffStatus}
      />
    </div>
  )
}
