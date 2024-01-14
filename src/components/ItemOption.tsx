import { CustomOptionType, FixedOptionType } from '@/service/types/type'
import React from 'react'

interface Props {
  fixedOption?: FixedOptionType
  customOption?: CustomOptionType
}

export default function ItemOption({ fixedOption, customOption }: Props) {
  return <div className="border p-4">{fixedOption?.explainDetail}</div>
}
