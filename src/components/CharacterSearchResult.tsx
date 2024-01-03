import React from 'react'
import { CharactersDataType } from '@/service/types/type'
import CharactersNotFound from '@/components/CharactersNotFound'
import CharacterInformationBox from '@/components/CharacterInformationBox'

interface Props {
  charactersData: CharactersDataType
}

export default function CharacterSearchResult({ charactersData }: Props) {
  console.log('!', charactersData)

  if (charactersData.rows.length === 0) return <CharactersNotFound />
  return (
    <ul className="grid grid-cols-4 gap-4 p-4">
      {charactersData.rows.map((data, idx) => {
        return (
          <React.Fragment key={idx}>
            <CharacterInformationBox characterData={data} />
          </React.Fragment>
        )
      })}
    </ul>
  )
}
