import ServerSelectBox from '@/components/ServerSelectBox'
import { getServerApi } from '@/service/api/getServerApi'
import MainPageLogo from '@/components/MainPageLogo'
import BeforeSearchBox from '@/components/BeforeSearchBox'
import SsrMotionComponent from '@/components/MotionComponent'

export default async function Home() {
  const serverData = await getServerApi()

  return (
    <div className="flex justify-center items-center flex-col">
      <SsrMotionComponent>
        <MainPageLogo />
        <ServerSelectBox serverData={serverData} large="large" />
        <BeforeSearchBox />
      </SsrMotionComponent>
    </div>
  )
}
