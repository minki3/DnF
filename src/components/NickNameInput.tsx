'use client'
import React from 'react'
import { useAppDispatch } from '@/lib/redux/hooks'
import { idChange } from '@/lib/redux/features/characterServerState'

export default function NickNameInput() {
  const dispatch = useAppDispatch()

  const NickNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(idChange(e.target.value))
  }

  return (
    <input
      onChange={(e) => {
        NickNameHandler(e)
      }}
    />
  )
}
