import React from 'react'
import { CharactersDataType, ServerDataType } from '@/service/types/type'
import CharactersNotFound from '@/components/CharactersNotFound'
import CharacterInformationBox from '@/components/CharacterInformationBox'
import { getServerApi } from '@/service/api/getServerApi'

interface Props {
  charactersData: CharactersDataType
  serverData: ServerDataType
}

export default async function CharacterSearchResult({
  charactersData,
  serverData,
}: Props) {
  if (charactersData.rows.length === 0) return <CharactersNotFound />

  const filterServer = (serverId: string) => {
    return serverData.rows.filter(
      (data: { serverId: string; serverName: string }) => {
        return data.serverId === serverId
      },
    )
  }
  return (
    <ul className="grid grid-cols-4 gap-4 p-4">
      {charactersData.rows.map((data, idx) => {
        const filterData = filterServer(data.serverId)
        return (
          <React.Fragment key={idx}>
            <CharacterInformationBox characterData={data} server={filterData} />
          </React.Fragment>
        )
      })}
    </ul>
  )
}
