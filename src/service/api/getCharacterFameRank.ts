export const getCharacterFameRank = async (server: string, isBuff: boolean) => {
  const API_KEY = process.env.NEXT_PUBLIC_REACT_APP_APIKEY

  const maxFame = 60542

  try {
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
export const getCharacterFameRankCsr = async (
  server: string,
  isBuff: boolean,
  jobId: string,
  growJobId: string,
  maxFame: number,
  minFame: number,
) => {
  try {
    const response = await fetch(
      `/fame?isBuff=${isBuff}&maxFame=${maxFame}&minFame=${minFame}&jobId=${jobId}&jobGrowId=${growJobId}&limit=${100}`,
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
