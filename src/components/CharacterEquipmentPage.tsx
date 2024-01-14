import ItemOption from '@/components/ItemOption'
import { EquipmentType } from '@/service/types/type'
import { rarityColor } from '@/service/utils/rarityColor'
import React, { useState } from 'react'

interface Props {
  characterEquipment: EquipmentType[]
}

export default function CharacterEquipmentPage({ characterEquipment }: Props) {
  const [hover, setHover] = useState<string | null>('')
  console.log(hover)

  const handleHover = (item: string) => {
    setHover(item)
  }

  return (
    <div className="flex justify-center cursor-default">
      <ul className=" basis-4/5 ">
        {characterEquipment.map((item, idx) => {
          const {
            itemName,
            enchant,
            itemRarity,
            skin,
            reinforce,
            amplificationName,
            slotName,
            fixedOption,
            customOption,
          } = item
          return (
            <li key={idx} className="p-6 border flex items-center">
              <span className=" basis-1/4">{slotName}</span>
              <div
                className="flex flex-col basis-1/4 "
                onMouseEnter={() => {
                  handleHover(itemName)
                }}
                onMouseLeave={() => {
                  handleHover('')
                }}
              >
                <span className={`${rarityColor(itemRarity)}`}>
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
                {hover === itemName && itemName && (
                  <ItemOption
                    fixedOption={fixedOption}
                    customOption={customOption}
                  />
                )}
              </div>

              <div className="basis-1/4 text-end">
                {fixedOption && <span>Lv {fixedOption.level}</span>}
              </div>
              <div className=" basis-1/4 flex flex-col text-[12px] text-end">
                {enchant &&
                  enchant.status &&
                  enchant.status.map((item, idx) => {
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
