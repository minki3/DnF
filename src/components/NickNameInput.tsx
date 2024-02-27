'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { idChange, reset } from '@/lib/redux/features/characterServerState'

import { useRouter } from 'next/navigation'

interface Props {
  large?: 'large'
}

export default function NickNameInput({ large }: Props) {
  const userData = useAppSelector((state) => state.serverIdSave)
  const router = useRouter()

  const dispatch = useAppDispatch()

  const NickNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(idChange(e.target.value))
  }

  const SendQuery = () => {
    router.push(
      `/search?server=${userData.value.server}&nickname=${userData.value.id}`,
    )
  }

  const saveLocalStorage = () => {
    const savedData = localStorage.getItem('save')
    if (savedData) {
      localStorage.setItem(
        'save',
        JSON.stringify([
          ...JSON.parse(savedData),
          { server: userData.value.server, id: userData.value.id },
        ]),
      )
    } else {
      localStorage.setItem(
        'save',
        JSON.stringify([
          { server: userData.value.server, id: userData.value.id },
        ]),
      )
    }
  }

  return (
    <input
      value={userData.value.id}
      onChange={(e) => {
        NickNameHandler(e)
      }}
      onKeyDown={(e) => {
        if (e.nativeEvent.isComposing || e.nativeEvent.keyCode === 229) return
        if (e.key === 'Enter') {
          saveLocalStorage()
          dispatch(reset())
          SendQuery()
        }
      }}
      className={`${
        large && 'w-[150px] lg:w-[300px]'
      } border rounded-lg lg:p-2 w-[100px] lg:w-[200px]`}
    />
  )
}
