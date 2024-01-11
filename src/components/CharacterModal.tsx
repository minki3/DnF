'use client'
import React, { useState } from 'react'
import {
  AvatarType,
  CharacterStatusType,
  CreatureType,
  EquipmentType,
} from '@/service/types/type'
import CharacterStatusPage from '@/components/CharacterStatusPage'
import CharacterEquipmentPage from '@/components/CharacterEquipmentPage'
import CharacterAvatarPage from '@/components/CharacterAvatarPage'
import CharacterCreaturePage from '@/components/CharacterCreaturePage'

interface Props {
  characterStatus: CharacterStatusType[]
  characterAvatar: AvatarType[]
  characterCreature: CreatureType
  characterEquipment: EquipmentType[]
}

export default function CharacterModal({
  characterStatus,
  characterAvatar,
  characterCreature,
  characterEquipment,
}: Props) {
  const [open, setOpen] = useState('status')

  return (
    <>
      <div className="flex gap-[20px] text-lg cursor-pointer justify-center mt-7 ">
        <div
          onClick={() => setOpen('status')}
          className={`${
            open === 'status' && 'font-bold border-b-2 border-black pb-4'
          }`}
        >
          스 텟
        </div>
        <div
          onClick={() => setOpen('equipment')}
          className={`${
            open === 'equipment' && 'font-bold border-b-2 border-black pb-4'
          }`}
        >
          장 비
        </div>
        <div
          onClick={() => setOpen('avatar')}
          className={`${
            open === 'avatar' && 'font-bold border-b-2 border-black pb-4'
          }`}
        >
          아바타
        </div>
        <div
          onClick={() => setOpen('creature')}
          className={`${
            open === 'creature' && 'font-bold border-b-2 border-black pb-4'
          }`}
        >
          크리쳐
        </div>
      </div>
      <div className="border-b" />
      <div className="p-4">
        {open === 'status' && (
          <CharacterStatusPage characterStatus={characterStatus} />
        )}
        {open === 'equipment' && (
          <CharacterEquipmentPage characterEquipment={characterEquipment} />
        )}
        {open === 'avatar' && (
          <CharacterAvatarPage characterAvatar={characterAvatar} />
        )}
        {open === 'creature' && (
          <CharacterCreaturePage characterCreature={characterCreature} />
        )}
      </div>
    </>
  )
}
