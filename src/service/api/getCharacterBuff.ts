export const getCharacterBuff = async (
  server: string,
  characterId: string,
  api: 'equipment' | 'avatar' | 'creature',
) => {
  const API_KEY = process.env.NEXT_PUBLIC_REACT_APP_APIKEY
  try {
    const response = await fetch(
      `https://api.neople.co.kr/df/servers/${server}/characters/${characterId}/skill/buff/equip/${api}?apikey=${API_KEY}`,
      { method: 'GET' },
    )
    const data = response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
