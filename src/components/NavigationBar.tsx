import React from 'react'
import ServerSelectBox from '@/components/ServerSelectBox'
import { getServerApi } from '@/service/api/getServerApi'

export default async function NavigationBar() {
  const getServerData = await getServerApi()
  return (
    <nav className="fixed border-b-2 border-black  w-full p-8 flex bg-white">
      <div className="flex flex-col item hover:cursor-pointer  basis-1/3">
        <span className="font-bold text-2xl">DnF-Search</span>
        <span className="">(내 캐릭터 찾기)</span>
      </div>
      <div className="basis-1/3 text-center">
        <ServerSelectBox serverData={getServerData} />
      </div>
      <div className="basis-1/3" />
    </nav>
  )
}
