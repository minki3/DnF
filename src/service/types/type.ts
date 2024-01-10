export interface ServerDataType {
  rows: Array<ServerType>
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

export interface ServerType {
  serverId: string
  serverName: string
}

export interface CharacterInformationStatusType
  extends CharacterInformationDetailType {
  buff: Array<BuffType>
  status: Array<CharacterStatusType>
}

export interface CharacterInformationDetailType {
  characterId: string
  characterName: string
  level: number
  jobId: string
  jobGrowId: string
  jobName: string
  jobGrowName: string
  adventureName: string
  guildId: string
  guildName: string
}

export interface BuffType {
  name: string
  level?: number
  status: Array<BuffStatusType>
}

export interface BuffStatusType {
  name: string
  value: number
}
export interface CharacterStatusType {
  name: string
  value: number
}

export interface CharacterAvatarType extends CharacterInformationDetailType {
  avatar: Array<AvatarType>
}

export interface AvatarType {
  slotId: string
  slotName: string
  itemId: string
  itemName: string
  itemRarity: string
  optionAbility: string
  clone: CloneAvatarType
  emblems: Array<Emblems>
}

export interface CloneAvatarType {
  itemId: string
  itemName: string
}

export interface Emblems {
  slotNo: number
  slotColor: string
  itemName: string
  itemRarity: string
}
