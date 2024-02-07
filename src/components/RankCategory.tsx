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
  category: {
    job: string
    jobId: string
    growJob: { job: string; jobId: string }[]
  }[]
}

export default function RankCategory({ job, setJob, category }: Props) {
  return (
    <>
      {/*데스크탑일 경우 */}
      <div className="sm:hidden md:hidden flex relative cursor-pointer md:text-[8px] lg:text-[13px] break-words">
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
                  } pr-2 lg:pr-[14px]`}
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
      {/*모바일일 경우 */}
      <div className="lg:hidden">
        <select
          value={job.job}
          onChange={(e) => {
            const selectedJob = e.target.value
            const selectedItem = category.find(
              (item) => item.job === selectedJob,
            )
            if (selectedItem) {
              setJob({
                job: selectedJob,
                jobId: selectedItem.jobId,
                growJob: '',
                growJobId: '',
              })
            }
          }}
        >
          {category.map((item, idx) => (
            <option key={idx} value={item.job}>
              {item.job}
            </option>
          ))}
        </select>

        {job.job && (
          <select
            value={job.growJob}
            onChange={(e) => {
              const selectedGrowJob = e.target.value
              const selectedItem =
                category &&
                category
                  .find((item) => item.job === job.job)
                  ?.growJob.find((item: any) => item.job === selectedGrowJob)
              if (selectedItem) {
                setJob({
                  ...job,
                  growJob: selectedGrowJob,
                  growJobId: selectedItem.jobId,
                })
              }
            }}
          >
            {category &&
              category
                .find((item) => item.job === job.job)
                ?.growJob.map((item, idx) => (
                  <option key={idx} value={item.job}>
                    {item.job}
                  </option>
                ))}
          </select>
        )}
      </div>
    </>
  )
}
