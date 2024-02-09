import React from 'react'
import Image from 'next/image'
import neople from '@public/icon/powredByNeople.png'

export default function Footer() {
  return (
    <footer className="border-t mt-4 p-2 md:p-2 lg:p-6 flex items-center justify-end  w-full">
      <Image
        src={neople}
        alt="logo"
        width={0}
        height={0}
        className="w-[100px] h-[50px]"
      />
    </footer>
  )
}
