import React from 'react'
import {
  CharacterInformationStatusType,
  JobBuffType,
  CharacterBuffEquipmentType,
} from '@/service/types/type'
import Image from 'next/image'

interface Props {
  characterInformationDetail: CharacterInformationStatusType
  server: string
  characterBuffStatus?: CharacterBuffEquipmentType | null
}

export default function CharacterInformationHeader({
  characterInformationDetail,
  server,
  characterBuffStatus,
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
      <div className="flex items-center gap-6 sm:flex-col">
        <Image
          src={`https://img-api.neople.co.kr/df/servers/${server}/characters/${characterId}`}
          alt="characterImage"
          width={350}
          height={350}
        />
        <div className="flex  justify-center flex-col items-start gap-4 text-sm lg:text-[16px]">
          <span>
            <span className=" font-thin">모험단 : </span> {adventureName}
          </span>
          <span>
            <span className=" font-thin">닉네임 : </span>
            {characterName}
          </span>
          <span>
            <span className=" font-thin">레 벨 : </span>
            {level}
          </span>
          <span>
            <span className=" font-thin">직 업 : </span>
            {jobGrowName}({jobName})
          </span>
          <span>
            {guildName && <span className=" font-thin">길드명 : </span>}
            {guildName}
          </span>

          {characterBuffStatus?.buff && (
            <span className="flex flex-col gap-2">
              <span className=" font-thin">버프 정보 :</span>
              <span>{characterBuffStatus.buff.skillInfo.name}</span>
              <span>+{characterBuffStatus.buff.skillInfo.option.level}</span>
              <span>
                {characterBuffStatus.buff.skillInfo.option.values[1]}%
              </span>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
