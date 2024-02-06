import React from 'react'
import {
  CharacterInformationDetailType,
  ServerDataType,
} from '@/service/types/type'
import CharacterInformationBox from '@/components/CharacterInformationBox'

interface Props {
  charactersData: CharacterInformationDetailType[]
  serverData: ServerDataType
}

export default async function CharacterSearchResult({
  charactersData,
  serverData,
}: Props) {
  console.log(charactersData)
  const filterServer = (serverId: string) => {
    return serverData.rows.filter(
      (data: { serverId: string; serverName: string }) => {
        return data.serverId === serverId
      },
    )
  }

  return (
    <ul className="grid lg:grid-cols-4 gap-4 p-4 grid-cols-2 md:grid-cols-3">
      {charactersData &&
        charactersData.map((data, idx) => {
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
