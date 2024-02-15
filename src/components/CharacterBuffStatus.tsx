import { CharacterBuffEquipmentType } from '@/service/types/type'
import React from 'react'
import Image from 'next/image'
import { rarityColor } from '@/service/utils/rarityColor'
import InformationNotFound from '@/components/InformationNotFound'
import { motion } from 'framer-motion'

interface Props {
  characterBuffEquipment?: CharacterBuffEquipmentType | null
}

export default function CharacterBuffStatus({ characterBuffEquipment }: Props) {
  if (characterBuffEquipment && characterBuffEquipment.buff === null)
    return <InformationNotFound />
  if (characterBuffEquipment && characterBuffEquipment.buff.equipment === null)
    return <InformationNotFound />

  return (
    <motion.div
      className="flex justify-center cursor-default"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <ul className=" basis-4/5 ">
        {characterBuffEquipment?.buff.equipment &&
          characterBuffEquipment.buff.equipment.map((item, idx) => {
            return (
              <li
                key={idx}
                className="text-[8px] md:text-[13px] lg:text-base p-2 lg:p-6 border flex items-center"
              >
                <span className=" basis-1/3">{item.slotName}</span>
                <div className="basis-1/3 flex items-center">
                  <Image
                    src={`https://img-api.neople.co.kr/df/items/${item.itemId}`}
                    alt="itemImage"
                    width={50}
                    height={50}
                    className="sm:hidden"
                  />
                  <span className={`${rarityColor(item.itemRarity)} pl-2`}>
                    {item.itemName}
                  </span>
                </div>
                <span className=" basis-1/3 text-end">+{item.refine}</span>
              </li>
            )
          })}
      </ul>
    </motion.div>
  )
}
