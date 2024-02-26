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
import CharacterDeatailStatusPage from '@/components/CharacterDetailStatusPage'

interface Props {
  characterStatus: CharacterStatusType[]
  characterAvatar: AvatarType[]
  characterCreature: CreatureType
  characterEquipment: EquipmentType[]
  characterBuffEquipment?: CharacterBuffEquipmentType | null
}

const Categories = [
  { category: '스 텟', state: 'status' },
  { category: '세부스텟', state: 'detailStatus' },
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
      <div className="flex gap-[20px] text-[12px] md:text-sm lg:text-lg cursor-pointer justify-center mt-7 ">
        {Categories.map((item, idx) => {
          return (
            <div
              onClick={() => setOpen(item.state)}
              key={idx}
              className={`${
                open === item.state &&
                'font-bold border-b-2 border-black pb-2 lg:pb-4 dark:border-white'
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
        {open === 'detailStatus' && (
          <CharacterDeatailStatusPage characterStatus={characterStatus} />
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
