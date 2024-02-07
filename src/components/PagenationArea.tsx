import React from 'react'

interface Props {
  total: number
  limit: number
  page?: number
  nextPage: (number: number) => void
  prevPage: (number: number) => void
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export default function PagenationArea({
  total,
  limit,
  page,
  nextPage,
  prevPage,
  setPage,
}: Props) {
  const numPage = Math.ceil(total / limit)
  return (
    <div className="text-[10px] lg:text-base">
      <button
        onClick={() => {
          prevPage(1)
        }}
        disabled={page === 1}
        className={`${page === 1 && ''}`}
      >
        &lt;
      </button>
      {Array(numPage)
        .fill(1)
        .map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                setPage(idx + 1)
              }}
              className={`${page === idx + 1 && 'font-bold'} p-2 lg:p-4`}
            >
              {idx + 1}
            </button>
          )
        })}
      <button
        onClick={() => {
          nextPage(1)
        }}
        disabled={page === numPage}
        className={`${page === numPage && ''}`}
      >
        &gt;
      </button>
    </div>
  )
}
