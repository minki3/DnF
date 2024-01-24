import ServerSelectBox from '@/components/ServerSelectBox'
import { getServerApi } from '@/service/api/getServerApi'
import MainPageLogo from '@/components/MainPageLogo'
import BeforeSearchBox from '@/components/BeforeSearchBox'
import { getCharacterFameRank } from '@/service/api/getCharacterFameRank'
import Test from '@/components/Test'

export default async function Home() {
  const serverData = await getServerApi()
  const a = await getCharacterFameRank('all', false)

  return (
    <div className="flex justify-center items-center flex-col ">
      <MainPageLogo />
      <ServerSelectBox serverData={serverData} large="large" />
      <BeforeSearchBox />
      <Test props={a} />
    </div>
  )
}
