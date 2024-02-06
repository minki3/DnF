'use client'
import React, { useState } from 'react'
import {
  AvatarType,
  CharacterStatusType,
  CreatureType,
  EquipmentType,
  CharacterBuffEquipmentType,
} from '@/service/types/type'
import CharacterStatusPage from '@/components/CharacterStatusPage'
import CharacterEquipmentPage from '@/components/CharacterEquipmentPage'
import CharacterAvatarPage from '@/components/CharacterAvatarPage'
import CharacterCreaturePage from '@/components/CharacterCreaturePage'
import CharacterBuffStatus from '@/components/CharacterBuffStatus'

interface Props {
  characterStatus: CharacterStatusType[]
  characterAvatar: AvatarType[]
  characterCreature: CreatureType
  characterEquipment: EquipmentType[]
  characterBuffEquipment?: CharacterBuffEquipmentType | null
}

const Categories = [
  { category: '스 텟', state: 'status' },
  { category: '장 비', state: 'equipment' },
  { category: '자버프', state: 'buff' },
  { category: '아바타', state: 'avatar' },
  { category: '크리처', state: 'creature' },
]

export default function CharacterModal({
  characterStatus,
  characterAvatar,
  characterCreature,
  characterEquipment,
  characterBuffEquipment,
}: Props) {
  const [open, setOpen] = useState('status')

  return (
    <>
      <div className="flex gap-[20px] text-sm lg:text-lg cursor-pointer justify-center mt-7 ">
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
        {open === 'buff' && (
          <CharacterBuffStatus
            characterBuffEquipment={characterBuffEquipment}
          />
        )}
      </div>
    </>
  )
}
