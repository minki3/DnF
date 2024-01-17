export const getServerApi = async () => {
  const API_KEY = process.env.NEXT_PUBLIC_REACT_APP_APIKEY
  try {
    const response = await fetch(
      `https://api.neople.co.kr/df/servers?apikey=${API_KEY}`,
      { method: 'GET' },
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getServerApiCsr = async () => {
  const API_KEY = process.env.NEXT_PUBLIC_REACT_APP_APIKEY
  try {
    const response = await fetch(`/df/servers?apikey=${API_KEY}`, {
      method: 'GET',
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
