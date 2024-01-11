import React from 'react'
import { AvatarType } from '@/service/types/type'
import { rarityColor } from '@/service/utils/rarityColor'

interface Props {
  characterAvatar: AvatarType[]
}

export default function CharacterAvatarPage({ characterAvatar }: Props) {
  // const rarityColor = (rarity: string) => {
  //   switch (rarity) {
  //     case '언커먼':
  //       return 'text-neutral-400'
  //     case '커먼':
  //       return 'text-teal-300'
  //     case '레어':
  //       return 'text-purple-400'
  //     case '유니크':
  //       return 'text-pink-400'
  //     case '레전더리':
  //       return 'text-yellow-500'
  //     default:
  //       return ''
  //   }
  // }
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
              <div className={` basis-1/4 flex flex-col`}>
                <span className={`${rarityColor(itemRarity)}`}>{itemName}</span>
                <span className=" text-black">{clone.itemName}</span>
              </div>
              <div className="flex flex-col basis-1/4">
                {emblems.map((item, idx) => {
                  const { itemName, itemRarity } = item
                  return (
                    <span
                      key={idx}
                      className={`${rarityColor(
                        itemRarity,
                      )} text-[12px] text-center`}
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
