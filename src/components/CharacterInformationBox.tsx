import React from 'react'
import Image from 'next/image'
import { CharacterInformationType, ServerType } from '@/service/types/type'

interface Props {
  characterData: CharacterInformationType
  server: ServerType[]
}

export default async function CharacterInformationBox({
  characterData,
  server,
}: Props) {
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
    <li className=" border px-4 pb-6 pt-4 w-[full] flex items-center justify-center flex-col rounded-lg hover:cursor-pointer">
      <Image
        src={`https://img-api.neople.co.kr/df/servers/${serverId}/characters/${characterId}`}
        alt="character"
        width={300}
        height={300}
      />

      <span className=" font-bold">{characterName}</span>
      <span className=" font-thin text-sm">{server[0].serverName}</span>
      <span className=" text-sm font-thin">
        LV : <span className=" font-bold">{level}</span>
      </span>
      <span className=" font-thin">
        명성치 : <span className="font-bold">{fame}</span>
      </span>
    </li>
  )
}
