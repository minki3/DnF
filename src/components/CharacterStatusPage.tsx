import { CharacterStatusType } from '@/service/types/type'
import React from 'react'

interface Props {
  characterStatus: CharacterStatusType[]
}

export default function CharacterStatusPage({ characterStatus }: Props) {
  console.log(characterStatus)
  return (
    <div className="flex justify-center">
      <ul className=" basis-1/3">
        {characterStatus &&
          characterStatus.map((item, idx) => {
            const { name } = item
            return (
              <li className="border p-4" key={idx}>
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
              <div className="border p-4" key={idx}>
                {value}
              </div>
            )
          })}
      </ul>
    </div>
  )
}
