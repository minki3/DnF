import MotionComponent from '@/components/MotionComponent'
import SkeletonItem from '@/components/skeleton/SkeletonItem'
import React from 'react'

interface Props {
  type: 'rank' | 'search'
}

export default function SkeletonComponent({ type }: Props) {
  return (
    <MotionComponent
      className={`${
        type === 'search'
          ? 'grid lg:grid-cols-4 gap-4 p-4 grid-cols-2 md:grid-cols-3'
          : 'flex items-center flex-col'
      } `}
    >
      {Array.from({ length: 8 }).map((_, idx) => {
        return <SkeletonItem type={type} key={idx} />
      })}
    </MotionComponent>
  )
}
