'use client'
import React from 'react'
import { useAppDispatch } from '@/lib/redux/hooks'
import { idChange } from '@/lib/redux/features/characterServerState'

interface Props {
  large?: 'large'
}

export default function NickNameInput({ large }: Props) {
  const dispatch = useAppDispatch()

  const NickNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(idChange(e.target.value))
  }

  return (
    <input
      onChange={(e) => {
        NickNameHandler(e)
      }}
      className={`${
        large && 'w-[150px] lg:w-[300px]'
      } border rounded-lg lg:p-2 w-[100px] lg:w-[200px]`}
    />
  )
}
