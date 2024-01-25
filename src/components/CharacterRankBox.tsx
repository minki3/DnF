import { CharacterInformationType } from '@/service/types/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  characterData: CharacterInformationType
  idx: number
  page: number
}

export default function CharacterRankBox({ characterData, idx, page }: Props) {
  const {
    serverId,
    characterId,
    characterName,
    level,
    jobId,
    jobGrowId,
    jobName,
    jobGrowName,
    fame,
  } = characterData

  return (
    <Link
      href={{
        pathname: '/character',
        query: { server: serverId, Id: characterId },
      }}
      className='className="p-4 flex items-center border w-full m-6'
    >
      <div className="flex items-center pl-4 basis-1/4">
        {page === 1 ? (
          <span>{idx + 1}위</span>
        ) : page === 2 ? (
          <span>{idx + 1 + 10}위</span>
        ) : (
          <span>{idx + 1 + (page - 1) * 10}위</span>
        )}

        <Image
          src={`https://img-api.neople.co.kr/df/servers/${serverId}/characters/${characterId}`}
          alt="character"
          width={250}
          height={250}
        />
      </div>
      <div className="flex flex-col basis-1/4">
        <span>{characterName}</span>
        <span>{jobGrowName}</span>
      </div>
      <div className="basis-1/4">
        <span>Lv : {level}</span>
      </div>
      <div className="basis-1/4 text-center">
        <span>{fame}</span>
      </div>
    </Link>
  )
}
