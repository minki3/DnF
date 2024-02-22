import InformationNotFound from '@/components/InformationNotFound'
import { CharacterStatusType } from '@/service/types/type'
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  characterStatus: CharacterStatusType[]
}

export default function CharacterStatusPage({ characterStatus }: Props) {
  if (characterStatus.length === 0) return <InformationNotFound />

  const filterData = characterStatus.filter((_, idx: number) => {
    return idx >= 33
  })

  return (
    <motion.div
      className="flex justify-center text-[10px] lg:text-lg transition-all "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <ul className="basis-4/5">
        {characterStatus &&
          filterData.map((item, idx) => {
            return (
              <li className="text-[8px] md:text-[13px] lg:text-base p-2 lg:p-6 border flex items-center justify-between hover:cursor-default">
                <span className="">{item.name}</span>
                <span className="font-bold">{item.value}</span>
              </li>
            )
          })}
      </ul>
    </motion.div>
  )
}
