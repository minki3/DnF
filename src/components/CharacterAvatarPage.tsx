import React from 'react'
import { AvatarType } from '@/service/types/type'
import { rarityColor } from '@/service/utils/rarityColor'

interface Props {
  characterAvatar: AvatarType[]
}

export default function CharacterAvatarPage({ characterAvatar }: Props) {
  return (
    <div className="flex justify-center cursor-default">
      <ul className=" basis-4/5 ">
        {characterAvatar.map((item, idx) => {
          const {
            itemName,
            itemRarity,
            emblems,
            slotName,
            optionAbility,
            clone,
          } = item
          return (
            <li key={idx} className="border flex p-6 items-center">
              <div className="basis-1/4">{slotName}</div>
              <div
                className={`${rarityColor(itemRarity)} basis-1/4 flex flex-col`}
              >
                {itemName}
                <span className=" text-black">{clone.itemName}</span>
              </div>
              <div className="flex flex-col basis-1/4">
                {emblems.map((item, idx) => {
                  const { itemName, itemRarity } = item
                  return (
                    <span
                      key={idx}
                      className={`${rarityColor(itemRarity)}  text-[12px]`}
                    >
                      {itemName}
                    </span>
                  )
                })}
              </div>
              <span className="basis-1/4 text-end">{optionAbility}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
