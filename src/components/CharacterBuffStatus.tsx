import { CharacterBuffEquipmentType } from '@/service/types/type'
import React from 'react'
import { rarityColor } from '@/service/utils/rarityColor'

interface Props {
  characterBuffEquipment: CharacterBuffEquipmentType
}

export default function CharacterBuffStatus({ characterBuffEquipment }: Props) {
  console.log(characterBuffEquipment)
  return (
    <div className="flex justify-center cursor-default">
      <ul className=" basis-4/5 ">
        {characterBuffEquipment.buff.equipment.map((item, idx) => {
          return (
            <li key={idx} className="p-6 border flex items-center">
              <span className=" basis-1/3">{item.slotName}</span>
              <span className={`${rarityColor(item.itemRarity)}  basis-1/3`}>
                {item.itemName}
              </span>
              <span className=" basis-1/3 text-end">+{item.refine}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
