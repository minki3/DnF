import InformationNotFound from '@/components/InformationNotFound'
import { CharacterStatusType } from '@/service/types/type'
import React from 'react'

interface Props {
  characterStatus: CharacterStatusType[]
}

export default function CharacterStatusPage({ characterStatus }: Props) {
  if (characterStatus.length === 0) return <InformationNotFound />
  console.log(characterStatus.filter((item, idx) => idx < 34))
  return (
    <div className="flex justify-center text-[10px] lg:text-lg">
      <ul className=" basis-1/3">
        {characterStatus &&
          characterStatus.map((item, idx) => {
            const { name } = item
            return (
              <li className="border p-2 lg:p-4" key={idx}>
                {name}
              </li>
            )
          })}
      </ul>
      <ul className="basis-1/2">
        {characterStatus &&
          characterStatus.map((item, idx) => {
            const { value } = item
            return (
              <div className="border p-2 lg:p-4" key={idx}>
                {value}
              </div>
            )
          })}
      </ul>
    </div>
  )
}
