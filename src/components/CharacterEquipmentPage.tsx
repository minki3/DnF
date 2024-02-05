import ItemOption from '@/components/ItemOption'
import { EquipmentType } from '@/service/types/type'
// import { rarityColor } from '@/service/utils/rarityColor'
import React, { useState } from 'react'
import Image from 'next/image'
import InformationNotFound from '@/components/InformationNotFound'
interface Props {
  characterEquipment: EquipmentType[]
}

export default function CharacterEquipmentPage({ characterEquipment }: Props) {
  if (characterEquipment === null) return <InformationNotFound />

  const [hover, setHover] = useState<string | null>('')

  const handleHover = (item: string) => {
    setHover(item)
  }

  const rarityColor = (rarity: string) => {
    switch (rarity) {
      case '언커먼':
        return 'text-neutral-400'
      case '커먼':
        return 'text-teal-400'
      case '레어':
        return 'text-purple-400'
      case '유니크':
        return 'text-pink-400'
      case '레전더리':
        return 'text-orange-400'
      case '에픽':
        return 'text-yellow-400'
      default:
        return ''
    }
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
            itemId,
          } = item
          console.log(itemName, customOption)
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
                <div className="flex items-center">
                  <Image
                    src={`https://img-api.neople.co.kr/df/items/${itemId}`}
                    alt="itemImage"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col pl-2">
                    <span className={`${rarityColor(itemRarity)}`}>
                      {reinforce !== 0 && (
                        <span
                          className={`${
                            amplificationName &&
                            amplificationName.includes('차원')
                              ? ' text-pink-400'
                              : 'text-black'
                          }`}
                        >
                          +{reinforce}
                        </span>
                      )}
                      &nbsp;{itemName}
                    </span>
                    {skin && (
                      <span className="text-[12px]">{skin.itemName}</span>
                    )}
                  </div>
                </div>
                {hover === itemName && itemName && (
                  <ItemOption
                    fixedOption={fixedOption}
                    customOption={customOption}
                  />
                )}
              </div>

              <div
                className={`${
                  itemName.includes('仙 :') &&
                  (fixedOption?.level === 40 || customOption?.level === 40) &&
                  'text-pink-400'
                } basis-1/4 text-end`}
              >
                {fixedOption && <span>Lv {fixedOption.level}</span>}
                {customOption && <span>Lv {customOption.level}</span>}
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
