import React from 'react'
import { AvatarType } from '@/service/types/type'
import { rarityColor } from '@/service/utils/rarityColor'
import Image from 'next/image'
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
            itemId,
          } = item
          return (
            <li key={idx} className="border flex p-6 items-center">
              <div className="basis-1/4">{slotName}</div>
              <div className={` basis-1/4 flex flex-col`}>
                <div className="flex items-center">
                  <Image
                    src={`https://img-api.neople.co.kr/df/items/${itemId}`}
                    alt="itemImage"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col pl-2">
                    <span className={`${rarityColor(itemRarity)}`}>
                      {itemName}
                    </span>
                    <span className=" text-black text-[12px]">
                      {clone.itemName}
                    </span>
                  </div>
                </div>
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
