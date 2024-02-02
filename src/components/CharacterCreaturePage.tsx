import { CreatureType } from '@/service/types/type'
import { rarityColor } from '@/service/utils/rarityColor'
import React from 'react'
import Image from 'next/image'

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

  const { itemName, itemRarity, clone, artifact, itemId } = characterCreature

  return (
    <div className="flex justify-center cursor-default">
      <ul className=" basis-4/5 ">
        <li className="flex border p-6 items-center">
          <span className="basis-1/3">크리처</span>
          <div className="flex flex-col basis-1/3">
            <div className="flex items-center">
              <Image
                src={`https://img-api.neople.co.kr/df/items/${itemId}`}
                alt="itemImage"
                width={50}
                height={50}
              />
              <div className="flex flex-col p-2">
                <span className={`${rarityColor(itemRarity)}`}>{itemName}</span>
                <span className="text-[13px]">{clone.itemName}</span>
              </div>
            </div>
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
