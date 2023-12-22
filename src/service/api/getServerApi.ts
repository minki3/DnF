export const getServerApi = async () => {
  const API_KEY = process.env.REACT_APP_APIKEY

  const response = await fetch(
    `https://api.neople.co.kr/df/servers?apikey=${API_KEY}`,
    { method: 'GET' },
  )
  const data = await response.json()
  return data
}
