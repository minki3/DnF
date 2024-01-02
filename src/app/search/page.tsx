import React from 'react'
import { getCharacterInformation } from '@/service/api/getCharacterInformation'

interface Props {
  searchParams: { server: string; nickname: string }
}

export default async function SearchPage({ searchParams }: Props) {
  console.log(searchParams)

  const characterData = await getCharacterInformation(
    searchParams.server,
    searchParams.nickname,
  )
  console.log('1', characterData)
  return <div></div>
}
