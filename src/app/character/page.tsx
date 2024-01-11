import React from 'react'
import { getCharacterMoreInformation } from '@/service/api/getCharacterMoreInformation'
import CharacterInformation from '@/components/CharacterInformation'
import CharacterModal from '@/components/CharacterModal'
import { getCharacterEquipment } from '@/service/api/getCharacterEquipment'

interface Props {
  searchParams: { server: string; Id: string }
}

export default async function CharacterPage({ searchParams }: Props) {
  const characterInformationDetail = await getCharacterMoreInformation(
    searchParams.server,
    searchParams.Id,
    'status',
  )
  const characterAvatar = await getCharacterEquipment(
    searchParams.server,
    searchParams.Id,
    'avatar',
  )
  const characterCreature = await getCharacterEquipment(
    searchParams.server,
    searchParams.Id,
    'creature',
  )

  return (
    <>
      <CharacterInformation
        characterInformationDeatil={characterInformationDetail}
        server={searchParams.server}
      />
      <CharacterModal
        characterStatus={characterInformationDetail.status}
        characterAvatar={characterAvatar.avatar}
        characterCreature={characterCreature.creature}
      />
    </>
  )
}
