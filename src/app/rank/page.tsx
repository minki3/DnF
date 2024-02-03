'use client'
import React, { useEffect, useState } from 'react'
import { getCharacterFameRankCsr } from '@/service/api/getCharacterFameRank'
import { CharacterRankType } from '@/service/types/type'
import PagenationArea from '@/components/PagenationArea'
import CharacterRankBox from '@/components/CharacterRankBox'
import { category } from '@/service/utils/JobCategory'

export default function RankPage() {
  const [job, setJob] = useState({
    job: '',
    growJob: '',
    jobId: '',
    growJobId: '',
  })
  const [data, setData] = useState<CharacterRankType>()
  const [fame, setFame] = useState<any>({ maxFame: '', minFame: '' })
  const [limit, setLimit] = useState<number>(10) //페이지 당 보여질 갯수
  const [page, setPage] = useState<number>(1) //현재 페이지
  const offset = (page - 1) * limit

  const nextPage = (number: number) => {
    setPage(page + number)
  }
  const prevPage = (number: number) => {
    setPage(page - number)
  }

  useEffect(() => {
    getCharacterFameRankCsr(
      'all',
      false,
      job.jobId,
      job.growJobId,
      fame.maxFame,
      fame.minFame,
    ).then((res) => {
      setData(res)
    })
  }, [job, fame])

  useEffect(() => {
    setPage(1)
  }, [data])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  return (
    <div className="flex gap-5 flex-col p-2">
      <div className="flex relative cursor-pointer">
        <span
          onClick={() => {
            setJob({
              job: '',
              growJob: '',
              jobId: '',
              growJobId: '',
            })
          }}
          className={`${job.job === '' && 'font-bold'} pr-4`}
        >
          전체
        </span>
        {category.map((item, idx) => {
          return (
            <div key={idx} className="">
              <div>
                <span
                  onClick={() => {
                    setJob({
                      ...job,
                      job: item.job,
                      jobId: item.jobId,
                      growJobId: '',
                      growJob: '',
                    })
                  }}
                  className={`${job.job === item.job && 'font-bold'} p-4`}
                >
                  {item.job}
                </span>
              </div>
              <div className=" absolute w-[1000px] left-0 top-8">
                {item.growJob &&
                  job.job === item.job &&
                  item.growJob.map((item, idx) => {
                    return (
                      <span
                        key={idx}
                        onClick={() => {
                          setJob({
                            ...job,
                            growJob: item.job,
                            growJobId: item.jobId,
                          })
                        }}
                        className={`${
                          job.growJob === item.job && 'font-bold'
                        } p-2`}
                      >
                        {item.job}
                      </span>
                    )
                  })}
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex items-center flex-col">
        {data &&
          data.rows &&
          data.rows.slice(offset, offset + limit).map((item, secondIdx) => {
            return (
              <CharacterRankBox
                characterData={item}
                key={secondIdx}
                idx={secondIdx}
                page={page}
              />
            )
          })}
      </div>
      <div className="flex items-center justify-center">
        {data && data.rows && (
          <PagenationArea
            total={data.rows.length}
            limit={limit}
            page={page}
            nextPage={nextPage}
            prevPage={prevPage}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  )
}
