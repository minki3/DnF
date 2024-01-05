import React from 'react'
import { CharacterInformationDetailType } from '@/service/types/type'
import Image from 'next/image'

interface Props {
  characterInformationDetail: CharacterInformationDetailType
  server: string
}

export default function CharacterInformationHeader({
  characterInformationDetail,
  server,
}: Props) {
  const {
    characterId,
    characterName,
    level,
    jobId,
    jobGrowId,
    jobName,
    jobGrowName,
    adventureName,
    guildId,
    guildName,
  } = characterInformationDetail
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center gap-6">
        <Image
          src={`https://img-api.neople.co.kr/df/servers/${server}/characters/${characterId}`}
          alt="characterImage"
          width={350}
          height={350}
          className="border"
        />
        <div className="flex  justify-center flex-col items-start tracking-[1px] leading-[3rem]">
          <span>
            <span className=" font-thin">모험단 : </span> {adventureName}
          </span>
          <span>
            <span className=" font-thin">닉네임 : </span>
            {characterName}
          </span>
          <span>
            <span className=" font-thin">직 업 : </span>
            {jobGrowName}({jobName})
          </span>
          <span>
            <span className=" font-thin">길드명 : </span>
            {guildName}
          </span>
        </div>
      </div>
    </div>
  )
}
