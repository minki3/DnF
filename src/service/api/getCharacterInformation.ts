export const getCharacterInformation = async (
  server: string | null,
  nickname: string | null,
) => {
  const API_KEY = process.env.REACT_APP_APIKEY

  const response = await fetch(
    `https://api.neople.co.kr/df/servers/${server}/characters?characterName=${nickname}&apikey=${process.env.REACT_APP_APIKEY}`,
    { method: 'GET' },
  )

  const data = await response.json()
  console.log(API_KEY)

  return data
}
