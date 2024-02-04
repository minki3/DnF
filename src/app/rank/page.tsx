'use client'
import React, { useState } from 'react'
import AttackerRankPage from '@/components/AttackerRankPage'
import BufferRankPage from '@/components/BufferRankPage'

export default function RankPage() {
  const category = ['딜러 랭킹', '버퍼 랭킹']

  const [open, setOpen] = useState<string>('딜러 랭킹')
  return (
    <div>
      <div className="flex justify-center gap-6 text-lg cursor-pointer border-b mb-4">
        {category.map((item, idx) => {
          return (
            <span
              key={idx}
              onClick={() => {
                setOpen(item)
              }}
              className={`${
                open === item && ' font-bold border-b-2 border-black pb-4'
              }`}
            >
              {item}
            </span>
          )
        })}
      </div>
      {open === '딜러 랭킹' && <AttackerRankPage />}
      {open === '버퍼 랭킹' && <BufferRankPage />}
    </div>
  )
}
