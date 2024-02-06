import React, { SetStateAction, Dispatch } from 'react'

interface Props {
  job: { job: string; growJob: string; jobId: string; growJobId: string }
  setJob: Dispatch<
    SetStateAction<{
      job: string
      growJob: string
      jobId: string
      growJobId: string
    }>
  >
  category: (
    | { job: string; jobId: string; growJob: { job: string; jobId: string }[] }
    | { job: string; jobId: string; growJob?: undefined }
  )[]
}

export default function RankCategory({ job, setJob, category }: Props) {
  return (
    <div className="sm:hidden flex relative cursor-pointer text-sm lg:text-[13px] break-words">
      <span
        onClick={() => {
          setJob({
            job: '',
            growJob: '',
            jobId: '',
            growJobId: '',
          })
        }}
        className={`${job.job === '' && 'font-bold'} pr-2 lg:pr-4`}
      >
        전 체
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
                className={`${
                  job.job === item.job && 'font-bold'
                } pr-2 lg:pr-4`}
              >
                {item.job}
              </span>
            </div>
            {item.growJob && job.job === item.job && (
              <div className=" absolute  left-0 top-8">
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
            )}
          </div>
        )
      })}
    </div>
  )
}
