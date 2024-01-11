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

export interface CharacterCreatureType extends CharacterInformationDetailType {
  creature: CreatureType
}

export interface CharacterEquipmentType
  extends CharacterInformationDetailType {}

export interface AvatarType {
  slotId: string
  slotName: string
  itemId: string
  itemName: string
  itemRarity: string
  optionAbility: string
  clone: CloneAvatarType
  emblems: Array<EmblemsType>
}

export interface CloneAvatarType {
  itemId: string
  itemName: string
}

export interface EmblemsType {
  slotNo: number
  slotColor: string
  itemName: string
  itemRarity: string
}

export interface CreatureType {
  itemId: string
  itemName: string
  itemRarity: string
  clone: CloneAvatarType
  artifact: Array<ArtifactType>
}

export interface ArtifactType {
  slotColor: string
  itemId: string
  itemName: string
  itemAvailableLevel: number
  itemRarity: string
}

export interface EquipmentType {
  slotId: string
  slotName: string
  itemId: string
  itemName: string
  itemTypeId: string
  itemType: string
  itemTypeDetailId: string
  itemTypeDeatil: string
  itemAvailableLevel: number
  itemRarity: string
  setItemId: null
  setItemName: null
  reinforce: number
  itemGradeName: string
  enchant: { status: Array<CharacterStatusType> }
  amplificationName: string
  refine: number
  fixedOption: FixedOptionType
  skin: WeaponSkinType
}

export interface FixedOptionType {
  damage: number
  buff: number
  level: number
  expRate: number
  explain: string
  explainDetail: string
}

export interface WeaponSkinType {
  itemId: string
  itemName: string
  itemRarity: string
}
