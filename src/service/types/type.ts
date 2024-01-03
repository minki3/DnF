export interface ServerDataType {
  rows: { serverId: string; serverName: string }[]
}

export interface CharactersDataType {
  rows: Array<CharacterInformationType>
}
export interface CharacterInformationType {
  serverId: string
  characterId: string
  characterName: string
  level: number
  jobId: string
  jobGrowId: string
  jobName: string
  jobGrowName: string
  fame: number
}
