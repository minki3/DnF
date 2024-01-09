'use client'
import React, { useState } from 'react'

export default function CharacterModal() {
  const [open, setOpen] = useState('status')

  return (
    <>
      <div className="flex gap-[20px] text-lg cursor-pointer justify-center mt-7 ">
        <div
          onClick={() => setOpen('status')}
          className={`${
            open === 'status' && 'font-bold border-b-2 border-black pb-4'
          }`}
        >
          스텟
        </div>
        <div
          onClick={() => setOpen('equipment')}
          className={`${
            open === 'equipment' && 'font-bold border-b-2 border-black pb-4'
          }`}
        >
          장비
        </div>
        <div
          onClick={() => setOpen('avatar')}
          className={`${
            open === 'avatar' && 'font-bold border-b-2 border-black pb-4'
          }`}
        >
          아바타
        </div>
        <div
          onClick={() => setOpen('creature')}
          className={`${
            open === 'creature' && 'font-bold border-b-2 border-black pb-4'
          }`}
        >
          크리쳐
        </div>
      </div>
      <div className="border-b"></div>
    </>
  )
}
