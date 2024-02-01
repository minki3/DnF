'use client'
import React, { useEffect, useState } from 'react'
import { getCharacterFameRankCsr } from '@/service/api/getCharacterFameRank'
import { CharacterRankType } from '@/service/types/type'
import PagenationArea from '@/components/PagenationArea'
import CharacterRankBox from '@/components/CharacterRankBox'

const category = [
  {
    job: '귀검사(남)',
    jobId: '41f1cdc2ff58bb5fdc287be0db2a8df3',
    growJob: [
      { job: '웨펀마스터', jobId: '37495b941da3b1661bc900e68ef3b2c6' },
      { job: '소울브링어', jobId: '618326026de1a1f1cfba5dbd0b8396e7' },
      { job: '버서커', jobId: '6d459bc74ba73ee4fe5cdc4655400193' },
      { job: '아수라', jobId: 'c9b492038ee3ca8d27d7004cf58d59f3' },
      { job: '검귀', jobId: '92da05ec93fb43406e193ffb9a2a629b' },
    ],
  },
  {
    job: '귀검사(여)',
    jobId: '1645c45aabb008c98406b3a16447040d',
    growJob: [
      { job: '소드마스터', jobId: '37495b941da3b1661bc900e68ef3b2c6' },
      { job: '다크템플러', jobId: '618326026de1a1f1cfba5dbd0b8396e7' },
      { job: '데몬슬레이어', jobId: '6d459bc74ba73ee4fe5cdc4655400193' },
      { job: '베가본드', jobId: 'c9b492038ee3ca8d27d7004cf58d59f3' },
      { job: '블레이드', jobId: '92da05ec93fb43406e193ffb9a2a629b' },
    ],
  },
  {
    job: '거너(남)',
    jobId: 'afdf3b989339de478e85b614d274d1ef',
    growJob: [
      { job: '레인저', jobId: '37495b941da3b1661bc900e68ef3b2c6' },
      { job: '런처', jobId: '618326026de1a1f1cfba5dbd0b8396e7' },
      { job: '메카닉', jobId: '6d459bc74ba73ee4fe5cdc4655400193' },
      { job: '스핏파이어', jobId: 'c9b492038ee3ca8d27d7004cf58d59f3' },
      { job: '어썰트', jobId: '92da05ec93fb43406e193ffb9a2a629b' },
    ],
  },
  {
    job: '거너(여)',
    jobId: '944b9aab492c15a8474f96947ceeb9e4',
    growJob: [
      { job: '레인저', jobId: '37495b941da3b1661bc900e68ef3b2c6' },
      { job: '런처', jobId: '618326026de1a1f1cfba5dbd0b8396e7' },
      { job: '메카닉', jobId: '6d459bc74ba73ee4fe5cdc4655400193' },
      { job: '스핏파이어', jobId: 'c9b492038ee3ca8d27d7004cf58d59f3' },
    ],
  },
  {
    job: '격투가(여)',
    jobId: 'a7a059ebe9e6054c0644b40ef316d6e9',
    growJob: [
      { job: '넨마스터', jobId: '37495b941da3b1661bc900e68ef3b2c6' },
      { job: '스트라이커', jobId: '618326026de1a1f1cfba5dbd0b8396e7' },
      { job: '스트리트파이터', jobId: '6d459bc74ba73ee4fe5cdc4655400193' },
      { job: '그래플러', jobId: 'c9b492038ee3ca8d27d7004cf58d59f3' },
    ],
  },
  {
    job: '격투가(남)',
    jobId: 'ca0f0e0e9e1d55b5f9955b03d9dd213c',
    growJob: [
      { job: '넨마스터', jobId: '37495b941da3b1661bc900e68ef3b2c6' },
      { job: '스트라이커', jobId: '618326026de1a1f1cfba5dbd0b8396e7' },
      { job: '스트리트파이터', jobId: '6d459bc74ba73ee4fe5cdc4655400193' },
      { job: '그래플러', jobId: 'c9b492038ee3ca8d27d7004cf58d59f3' },
    ],
  },
  {
    job: '마법사(여)',
    jobId: '3909d0b188e9c95311399f776e331da5',
    growJob: [
      { job: '엘리멘탈마스터', jobId: '37495b941da3b1661bc900e68ef3b2c6' },
      { job: '소환사', jobId: '618326026de1a1f1cfba5dbd0b8396e7' },
      { job: '배틀메이지', jobId: '6d459bc74ba73ee4fe5cdc4655400193' },
      { job: '마도학자', jobId: 'c9b492038ee3ca8d27d7004cf58d59f3' },
      { job: '인첸트리스', jobId: '92da05ec93fb43406e193ffb9a2a629b' },
    ],
  },
  {
    job: '마법사(남)',
    jobId: 'a5ccbaf5538981c6ef99b236c0a60b73',
    growJob: [
      { job: '엘리멘탈바머', jobId: '37495b941da3b1661bc900e68ef3b2c6' },
      { job: '빙결사', jobId: '618326026de1a1f1cfba5dbd0b8396e7' },
      { job: '블러드메이지', jobId: '6d459bc74ba73ee4fe5cdc4655400193' },
      { job: '스위프트마스터', jobId: 'c9b492038ee3ca8d27d7004cf58d59f3' },
      { job: '디멘션워커', jobId: '92da05ec93fb43406e193ffb9a2a629b' },
    ],
  },
  {
    job: '프리스트(남)',
    jobId: 'f6a4ad30555b99b499c07835f87ce522',
    growJob: [
      { job: '크루세이더', jobId: '37495b941da3b1661bc900e68ef3b2c6' },
      { job: '인파이터', jobId: '618326026de1a1f1cfba5dbd0b8396e7' },
      { job: '퇴마사', jobId: '6d459bc74ba73ee4fe5cdc4655400193' },
      { job: '어벤저', jobId: 'c9b492038ee3ca8d27d7004cf58d59f3' },
    ],
  },
  {
    job: '프리스트(여)',
    jobId: '0c1b401bb09241570d364420b3ba3fd7',
    growJob: [
      { job: '이단심판관', jobId: '618326026de1a1f1cfba5dbd0b8396e7' },
      { job: '무녀', jobId: '6d459bc74ba73ee4fe5cdc4655400193' },
      { job: '미스트리스', jobId: 'c9b492038ee3ca8d27d7004cf58d59f3' },
    ],
  },
  {
    job: '도적',
    jobId: 'ddc49e9ad1ff72a00b53c6cff5b1e920',
    growJob: [
      { job: '사령술사', jobId: '618326026de1a1f1cfba5dbd0b8396e7' },
      { job: '쿠노이치', jobId: '6d459bc74ba73ee4fe5cdc4655400193' },
      { job: '섀도우댄서', jobId: 'c9b492038ee3ca8d27d7004cf58d59f3' },
      { job: '로그', jobId: '37495b941da3b1661bc900e68ef3b2c6' },
    ],
  },
  {
    job: '나이트',
    jobId: '0ee8fa5dc525c1a1f23fc6911e921e4a',
    growJob: [
      { job: '카오스', jobId: '618326026de1a1f1cfba5dbd0b8396e7' },
      { job: '팔라딘', jobId: '6d459bc74ba73ee4fe5cdc4655400193' },
      { job: '드래곤나이트', jobId: 'c9b492038ee3ca8d27d7004cf58d59f3' },
      { job: '엘븐나이트', jobId: '37495b941da3b1661bc900e68ef3b2c6' },
    ],
  },
  {
    job: '마창사',
    jobId: '3deb7be5f01953ac8b1ecaa1e25e0420',
    growJob: [
      { job: '듀얼리스트', jobId: '618326026de1a1f1cfba5dbd0b8396e7' },
      { job: '드래고니안랜서', jobId: '6d459bc74ba73ee4fe5cdc4655400193' },
      { job: '다크랜서', jobId: 'c9b492038ee3ca8d27d7004cf58d59f3' },
      { job: '뱅가드', jobId: '37495b941da3b1661bc900e68ef3b2c6' },
    ],
  },
  {
    job: '총검사',
    jobId: '986c2b3d72ee0e4a0b7fcfbe786d4e02',
    growJob: [
      { job: '요원', jobId: '618326026de1a1f1cfba5dbd0b8396e7' },
      { job: '트러블슈터', jobId: '6d459bc74ba73ee4fe5cdc4655400193' },
      { job: '스폐셜리스트', jobId: 'c9b492038ee3ca8d27d7004cf58d59f3' },
      { job: '히트맨', jobId: '37495b941da3b1661bc900e68ef3b2c6' },
    ],
  },
  {
    job: '아처',
    jobId: 'b9cb48777665de22c006fabaf9a560b3',
    growJob: [{ job: '트래블러', jobId: '618326026de1a1f1cfba5dbd0b8396e7' }],
  },
  {
    job: '다크나이트',
    jobId: '17e417b31686389eebff6d754c3401ea',
  },
  {
    job: '크리에이터',
    jobId: 'b522a95d819a5559b775deb9a490e49a',
  },
]
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
  console.log(data)
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
