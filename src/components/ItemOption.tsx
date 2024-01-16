import { CustomOptionType, FixedOptionType } from '@/service/types/type'
import React from 'react'

interface Props {
  fixedOption?: FixedOptionType
  customOption?: CustomOptionType
}

export default function ItemOption({ fixedOption, customOption }: Props) {
  const options = fixedOption?.explainDetail.split('\n').filter((item) => {
    return item !== ''
  })

  const customOptions = customOption?.options.map((item) => {
    return item.explainDetail.split('\n')
  })
  console.log(customOption)
  return (
    <div className="border px-4 pt-4">
      {fixedOption && (
        <ul className="">
          {options &&
            options?.map((option, idx) => {
              return (
                <li className="text-[11px] pb-4" key={idx}>
                  {option.includes('-') ? (
                    <span className="pl-2">{option}</span>
                  ) : (
                    <span className="">• {option}</span>
                  )}
                </li>
              )
            })}
        </ul>
      )}
      {customOption && (
        <ul>
          {customOptions &&
            customOptions.map((items, idx) => {
              return (
                <li key={idx} className="flex flex-col">
                  <span>-</span>
                  {items.map((item, idx) => {
                    return (
                      <div className="text-[11px] pb-4" key={idx}>
                        {item.includes('-') ? (
                          <span className="pl-2">{item}</span>
                        ) : (
                          <span>{item}</span>
                        )}
                      </div>
                    )
                  })}
                </li>
              )
            })}
        </ul>
      )}
    </div>
  )
}
