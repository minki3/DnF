import MotionComponent from '@/components/MotionComponent'
import React from 'react'

interface Props {
  type: 'rank' | 'search'
}

export default function SkeletonItem({ type }: Props) {
  return (
    <>
      {type === 'search' && (
        <div className="border px-4 pb-6 pt-4 w-[full] flex items-center justify-center flex-col rounded-lg">
          <div className="w-[100px] h-[150px] lg:w-[300px] lg:h-[300px] bg-gray-500 opacity-10 rounded-lg mb-7" />
          <div className="w-[100px] h-[20px] bg-gray-500 opacity-10 rounded-lg mb-2" />
          <div className="w-[100px] h-[20px] bg-gray-500 opacity-10 rounded-lg mb-2" />
          <div className="w-[100px] h-[20px] bg-gray-500 opacity-10 rounded-lg mb-2" />
          <div className="w-[100px] h-[20px] bg-gray-500 opacity-10 rounded-lg" />
        </div>
      )}
      {type === 'rank' && (
        <div className="flex items-center border w-full p-2 m-2 lg:m-6 sm:h-[100px] md:h-[170px]">
          <div className=" basis-1/4 flex items-center">
            <div className="lg:w-[30px] lg:h-[20px] w-[20px] h-[10px] bg-gray-500 opacity-10 rounded-lg mr-2" />
            <div className="lg:w-[250px] lg:h-[250px] w-[50px] h-[50px] md:w-[100px] md:h-[100px] bg-gray-500 opacity-10 rounded-lg" />
          </div>
          <div className=" basis-1/4 ">
            <div className="lg:w-[200px] lg:h-[20px] w-[50px] h-[10px] bg-gray-500 opacity-10 rounded-lg mb-2" />
            <div className="lg:w-[200px] lg:h-[20px] w-[50px] h-[10px] bg-gray-500 opacity-10 rounded-lg" />
          </div>
          <div className="basis-1/4">
            <div className="lg:w-[100px] lg:h-[20px] w-[50px] h-[10px] bg-gray-500 opacity-10 rounded-lg" />
          </div>
          <div className="basis-1/4 text-center flex justify-center">
            <div className="lg:w-[100px] lg:h-[20px] w-[50px] h-[10px] bg-gray-500 opacity-10 rounded-lg" />
          </div>
        </div>
      )}
    </>
  )
}
