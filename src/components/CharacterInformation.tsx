import {
  CharacterInformationStatusType,
  CharacterBuffEquipmentType,
} from '@/service/types/type'
import React from 'react'
import CharacterInformationHeader from '@/components/CharacterInformationHeader'

interface Props {
  characterInformationDeatil: CharacterInformationStatusType
  server: string
  characterBuffStatus?: CharacterBuffEquipmentType | null
}

export default function CharacterInformation({
  characterInformationDeatil,
  server,
  characterBuffStatus,
}: Props) {
  return (
    <CharacterInformationHeader
      characterInformationDetail={characterInformationDeatil}
      server={server}
      characterBuffStatus={characterBuffStatus}
    />
  )
}
