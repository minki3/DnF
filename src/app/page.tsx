import ServerSelectBox from '@/components/ServerSelectBox'
import { getServerApi } from '@/service/api/getServerApi'
import MainPageLogo from '@/components/MainPageLogo'
import BeforeSearchBox from '@/components/BeforeSearchBox'

export default async function Home() {
  const serverData = await getServerApi()
  return (
    <div className="flex justify-center items-center flex-col ">
      <MainPageLogo />
      <ServerSelectBox serverData={serverData} large="large" />
      <BeforeSearchBox />
    </div>
  )
}
