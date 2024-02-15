import React, { useEffect, useState } from 'react'
import { getCharacterFameRankCsr } from '@/service/api/getCharacterFameRank'
import { CharacterRankType } from '@/service/types/type'
import PagenationArea from '@/components/PagenationArea'
import CharacterRankBox from '@/components/CharacterRankBox'
import { category } from '@/service/utils/JobCategory'
import RankCategory from '@/components/RankCategory'
import { motion } from 'framer-motion'

export default function AttackerRankPage() {
  const [job, setJob] = useState({
    job: '',
    growJob: '',
    jobId: '',
    growJobId: '',
  })
  const [data, setData] = useState<CharacterRankType>()

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
      null,
      null,
    ).then((res) => {
      setData(res)
    })
  }, [job])
  useEffect(() => {
    setPage(1)
  }, [data])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])
  return (
    <motion.div
      className="flex gap-5 flex-col p-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <RankCategory job={job} setJob={setJob} category={category} />
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
    </motion.div>
  )
}
