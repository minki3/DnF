import { CharacterInformationType } from '@/service/types/type'
import Image from 'next/image'
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
    <div className="p-6 flex items-center border w-full">
      <div className="flex items-center pl-4">
        {/* <span>{page === 1 ? idx + 1 : idx + 1 + page * 10}위</span> */}
        {page === 1 ? (
          <span>{idx + 1}</span>
        ) : page === 2 ? (
          <span>{idx + 1 + 10}</span>
        ) : (
          <span>{idx + 1 + (page - 1) * 10}</span>
        )}

        <Image
          src={`https://img-api.neople.co.kr/df/servers/${serverId}/characters/${characterId}`}
          alt="character"
          width={250}
          height={200}
        />
      </div>
      <div className="flex flex-col">
        <span>{characterName}</span>
        <span>{jobGrowName}</span>
      </div>
      <div>{/* <span>Lv : {level}</span> */}</div>
      <div>
        <span>{fame}</span>
      </div>
    </div>
  )
}
