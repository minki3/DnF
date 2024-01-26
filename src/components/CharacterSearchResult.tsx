import React from 'react'
import { CharactersDataType, ServerDataType } from '@/service/types/type'
import CharacterInformationBox from '@/components/CharacterInformationBox'

interface Props {
  charactersData: CharactersDataType
  serverData: ServerDataType
}

export default async function CharacterSearchResult({
  charactersData,
  serverData,
}: Props) {
  const filterServer = (serverId: string) => {
    return serverData.rows.filter(
      (data: { serverId: string; serverName: string }) => {
        return data.serverId === serverId
      },
    )
  }

  return (
    <ul className="grid grid-cols-4 gap-4 p-4">
      {charactersData &&
        charactersData.rows.map((data, idx) => {
          const filterData = filterServer(data.serverId)
          return (
            <React.Fragment key={idx}>
              <CharacterInformationBox
                characterData={data}
                server={filterData}
              />
            </React.Fragment>
          )
        })}
    </ul>
  )
}
