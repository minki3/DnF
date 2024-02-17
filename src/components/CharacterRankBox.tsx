import { CharacterInformationType } from '@/service/types/type'
import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'

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
      className=" flex items-center border w-full p-2 m-2 lg:m-6 text-[10px] lg:text-base"
    >
      <div className="flex items-center pl-4 basis-1/4 ">
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
          width={300}
          height={300}
          className="w-[65%] lg:w-[70%]"
          priority
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
