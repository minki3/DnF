export const getCharacterFameRank = async (server: string, isBuff: boolean) => {
  const API_KEY = process.env.NEXT_PUBLIC_REACT_APP_APIKEY

  const maxFame = 60542

  try {
    console.log(maxFame)
    const response = await fetch(
      `https://api.neople.co.kr/df/servers/${server}/characters-fame?&isBuff=${isBuff}&maxFame=${maxFame}&apikey=${API_KEY}`,
      {
        method: 'GET',
      },
    )

    const data = response.json()
    return data
  } catch (e) {
    console.log(e)
  }
}
