'use client'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'

export default function BeforeSearchBox() {
  return (
    <div className="w-[500px] h-[300px] border rounded-lg mt-10 p-4 flex items-center flex-col">
      <span className=" text-[12px] cursor-default ">최근 검색</span>
    </div>
  )
}
