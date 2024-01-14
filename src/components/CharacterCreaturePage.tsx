import { CreatureType } from '@/service/types/type'
import { rarityColor } from '@/service/utils/rarityColor'
import React from 'react'

interface Props {
  characterCreature: CreatureType
}

export default function CharacterCreaturePage({ characterCreature }: Props) {
  if (characterCreature === null)
    return (
      <div className=" flex justify-center items-center p-10">
        정보를 찾을 수없습니다.
      </div>
    )
  const { itemName, itemRarity, clone, artifact } = characterCreature

  return (
    <div className="flex justify-center cursor-default">
      <ul className=" basis-4/5 ">
        <li className="flex border p-6 items-center">
          <span className="basis-1/3">크리처</span>
          <div className="flex flex-col basis-1/3">
            <span className={`${rarityColor(itemRarity)}`}>{itemName}</span>
            <span>{clone.itemName}</span>
          </div>
          <ul className="flex flex-col basis-1/3 text-end">
            {artifact.map((item, idx) => {
              const { itemName, itemRarity } = item
              return (
                <li
                  key={idx}
                  className={`${rarityColor(itemRarity)} text-[12px]`}
                >
                  {itemName}
                </li>
              )
            })}
          </ul>
        </li>
      </ul>
    </div>
  )
}
