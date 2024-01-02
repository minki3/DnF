export const getCharacterInformation = async (
  server: string | null,
  nickname: string | null,
) => {
  const API_KEY = process.env.NEXT_PUBLIC_REACT_APP_APIKEY
  console.log('1', API_KEY)
  try {
    console.log('2', API_KEY)
    const response = await fetch(
      `https://api.neople.co.kr/df/servers/${server}/characters?characterName=${nickname}&apikey=${API_KEY}`,
      { method: 'GET' },
    )

    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}
