import { CreatureType } from '@/service/types/type'
import { rarityColor } from '@/service/utils/rarityColor'
import React from 'react'
import Image from 'next/image'
import InformationNotFound from '@/components/InformationNotFound'
import { motion } from 'framer-motion'

interface Props {
  characterCreature: CreatureType
}

export default function CharacterCreaturePage({ characterCreature }: Props) {
  if (characterCreature === null) return <InformationNotFound />

  const { itemName, itemRarity, clone, artifact, itemId } = characterCreature

  return (
    <motion.div
      className="flex justify-center cursor-default"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <ul className=" basis-4/5 ">
        <li className="flex border text-[6px] md:text-[13px] lg:text-base p-2 lg:p-6 items-center">
          <span className="basis-1/3">크리처</span>
          <div className="flex flex-col basis-1/3">
            <div className="flex items-center">
              <Image
                src={`https://img-api.neople.co.kr/df/items/${itemId}`}
                alt="itemImage"
                width={50}
                height={50}
                className="sm:hidden"
              />
              <div className="flex flex-col p-2">
                <span className={`${rarityColor(itemRarity)}`}>{itemName}</span>
                <span className="lg:text-[13px]">{clone.itemName}</span>
              </div>
            </div>
          </div>
          <ul className="flex flex-col basis-1/3 text-end">
            {artifact.map((item, idx) => {
              const { itemName, itemRarity } = item
              return (
                <li
                  key={idx}
                  className={`${rarityColor(itemRarity)} lg:text-[12px]`}
                >
                  {itemName}
                </li>
              )
            })}
          </ul>
        </li>
      </ul>
    </motion.div>
  )
}
