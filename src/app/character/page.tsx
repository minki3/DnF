import React from 'react'
import { getCharacterMoreInformation } from '@/service/api/getCharacterMoreInformation'
import CharacterInformation from '@/components/CharacterInformation'
import CharacterModal from '@/components/CharacterModal'
import { getCharacterEquipment } from '@/service/api/getCharacterEquipment'
import CharactersNotFound from '@/components/CharactersNotFound'
import { getCharacterBuff } from '@/service/api/getCharacterBuff'
import MotionComponent from '@/components/MotionComponent'

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
  const characterEquipment = await getCharacterEquipment(
    searchParams.server,
    searchParams.Id,
    'equipment',
  )
  const characterBuffEquipment = await getCharacterBuff(
    searchParams.server,
    searchParams.Id,
    'equipment',
  )

  if (characterInformationDetail.error) return <CharactersNotFound />

  return (
    <MotionComponent>
      <CharacterInformation
        characterInformationDeatil={characterInformationDetail}
        server={searchParams.server}
        characterBuffStatus={characterBuffEquipment.skill}
      />
      <CharacterModal
        characterStatus={characterInformationDetail.status}
        characterAvatar={characterAvatar.avatar}
        characterCreature={characterCreature.creature}
        characterEquipment={characterEquipment.equipment}
        characterBuffEquipment={characterBuffEquipment.skill}
      />
    </MotionComponent>
  )
}
