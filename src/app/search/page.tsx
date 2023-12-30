'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { getCharacterInformation } from '@/service/api/getCharacterInformation'

export default async function SearchPage() {
  const queryparams = useSearchParams()
  const serverQuery = queryparams.get('server')
  const nicknameQuery = queryparams.get('nickname')

  console.log(serverQuery)
  console.log(nicknameQuery)

  const characterData = await getCharacterInformation(
    serverQuery,
    nicknameQuery,
  ).catch((error) => {
    console.log(error)
  })
  console.log('1111', characterData)
  return <div></div>
}
