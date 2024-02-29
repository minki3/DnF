import ItemOption from '@/components/ItemOption'
import { EquipmentType } from '@/service/types/type'
import React, { useState } from 'react'
import Image from 'next/image'
import InformationNotFound from '@/components/InformationNotFound'
import { motion } from 'framer-motion'
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
    <motion.div
      className="flex justify-center cursor-default"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
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
            upgradeInfo,
          } = item
          const upgradeItme = upgradeInfo?.itemName.split(':')[0].split(' ')[0]
          return (
            <li
              key={idx}
              className="text-[8px] md:text-[13px] lg:text-base p-2 lg:p-6 border flex items-center"
            >
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
                    className="sm:hidden pr-2"
                  />
                  {upgradeInfo && upgradeInfo.itemId && (
                    <Image
                      src={`https://img-api.neople.co.kr/df/items/${upgradeInfo.itemId}`}
                      alt="itemImage"
                      width={30}
                      height={30}
                      className="sm:hidden"
                    />
                  )}
                  <div className="flex flex-col pl-2">
                    <span
                      className={`${rarityColor(itemRarity)} flex flex-col`}
                    >
                      <div>
                        {reinforce !== 0 && (
                          <span
                            className={`${
                              amplificationName &&
                              amplificationName.includes('차원')
                                ? ' text-pink-400'
                                : 'text-black dark:text-white'
                            } `}
                          >
                            +{reinforce}
                          </span>
                        )}
                        &nbsp;{itemName}
                      </div>
                      {upgradeInfo && upgradeInfo.itemName && (
                        <span className="text-[7px] lg:text-[12px] lg:pl-2 text-red-500">
                          {upgradeInfo.itemName}
                        </span>
                      )}
                    </span>
                    {skin && (
                      <span className="text-[7px] lg:text-[12px] pl-2">
                        {skin.itemName}
                      </span>
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
                } basis-1/4 lg:text-end md:text-end text-center`}
              >
                {fixedOption && <span>Lv {fixedOption.level}</span>}
                {customOption && <span>Lv {customOption.level}</span>}
              </div>
              <div className=" basis-1/4 flex flex-col text-[8px] lg:text-[12px] text-end">
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
    </motion.div>
  )
}
