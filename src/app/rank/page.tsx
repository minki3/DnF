'use client'
import React, { Suspense, useState } from 'react'
import JobRankPage from '@/components/JobRankPage'
import BufferRankPage from '@/components/BufferRankPage'
import { motion } from 'framer-motion'
import { Jobcategory } from '@/service/utils/JobCategory'
import { BuffJobCategory } from '@/service/utils/BuffJobCategory'
export default function RankPage() {
  const category = ['딜러 랭킹', '버퍼 랭킹']

  const [open, setOpen] = useState<string>('딜러 랭킹')
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex justify-center gap-6  text-sm lg:text-lg cursor-pointer border-b mb-4">
        {category.map((item, idx) => {
          return (
            <span
              key={idx}
              onClick={() => {
                setOpen(item)
              }}
              className={`${
                open === item &&
                ' font-bold border-b-2 border-black dark:border-white  lg:pb-4 pb-2'
              }`}
            >
              {item}
            </span>
          )
        })}
      </div>
      {open === '딜러 랭킹' && (
        <JobRankPage isBuff={false} category={Jobcategory} />
      )}
      {open === '버퍼 랭킹' && (
        <JobRankPage isBuff category={BuffJobCategory} />
      )}
    </motion.div>
  )
}
