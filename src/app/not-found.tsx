import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      <span className=" text-lg mb-6">페이지를 찾을 수 없습니다.</span>
      <Link href="/">
        <span className=" font-thin underline-offset-[1px] hover:font-bold">
          {`>`} 메인페이지로 돌아가기
        </span>
      </Link>
    </div>
  )
}
