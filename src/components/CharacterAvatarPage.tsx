import React from 'react'
import { AvatarType } from '@/service/types/type'

interface Props {
  characterAvatar: AvatarType[]
}

export default function CharacterAvatarPage({ characterAvatar }: Props) {
  console.log('1', characterAvatar[4].emblems)

  const avatarTypeColor = (rarity: string) => {
    switch (rarity) {
      case '레어':
        return 'text-purple-400'
      case '커먼':
        return 'text-amber-500'
      case '유니크':
        return 'text-pink-400'
      case '레전더리':
        return 'text-yellow-500'
    }
  }

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
                className={`${avatarTypeColor(
                  itemRarity,
                )} basis-1/4 flex flex-col`}
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
                      className={`${avatarTypeColor(itemRarity)} text-[12px]`}
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
