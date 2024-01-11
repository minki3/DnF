import { EquipmentType } from '@/service/types/type'
import { rarityColor } from '@/service/utils/rarityColor'
import React from 'react'

interface Props {
  characterEquipment: EquipmentType[]
}

export default function CharacterEquipmentPage({ characterEquipment }: Props) {
  console.log(characterEquipment)

  return (
    <div className="flex justify-center cursor-default">
      <ul className=" basis-4/5 ">
        {characterEquipment.map((item, idx) => {
          console.log(item)
          const {
            itemName,
            enchant,
            itemRarity,
            skin,
            reinforce,
            amplificationName,
            slotName,
          } = item
          return (
            <li key={idx} className="p-6 border flex items-center">
              <span className=" basis-1/3">{slotName}</span>
              <div className="flex flex-col basis-1/3">
                <span
                  className={`${rarityColor(itemRarity)}`}
                  onMouseEnter={() => {
                    console.log('over')
                  }}
                  // onMouseLeave={() => {
                  //   console.log('leave')
                  // }}
                >
                  {reinforce !== 0 && (
                    <span
                      className={`${
                        amplificationName &&
                        amplificationName.includes('차원') &&
                        ' text-pink-400'
                      }`}
                    >
                      +{reinforce}
                    </span>
                  )}
                  &nbsp;{itemName}
                </span>
                <span className="text-[12px]">{skin && skin.itemName}</span>
              </div>
              <div className=" basis-1/3 flex flex-col text-[12px] text-end">
                {enchant.status.map((item, idx) => {
                  const { name, value } = item
                  return (
                    <span key={idx}>
                      {name} : {value}
                    </span>
                  )
                })}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
