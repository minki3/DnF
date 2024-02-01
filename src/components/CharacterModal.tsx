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

const Categories = [
  { category: '스 텟', state: 'status' },
  { category: '장 비', state: 'equipment' },
  { category: '아바타', state: 'avatar' },
  { category: '크리처', state: 'creature' },
]

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
        {Categories.map((item) => {
          return (
            <div
              onClick={() => setOpen(item.state)}
              className={`${
                open === item.state && 'font-bold border-b-2 border-black pb-4'
              }`}
            >
              {item.category}
            </div>
          )
        })}
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
