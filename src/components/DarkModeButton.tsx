'use client'

import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

interface DarkModeButtonType {}

export default function DarkModeButton({}: DarkModeButtonType) {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const onClick = (mode: string) => () => {
    setTheme(mode)
  }

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <>
      {currentTheme === 'dark' ? (
        <div
          className="bg-darkModeBg cursor-pointer rounded-[50%]  p-1 lg:p-2 border border-black dark:border-white"
          onClick={onClick('light')}
        >
          <BsFillMoonFill />
        </div>
      ) : (
        <div
          className="bg-darkModeBg cursor-pointer rounded-[50%]  p-1 lg:p-2 border border-black dark:border-white"
          onClick={onClick('dark')}
        >
          <BsFillSunFill />
        </div>
      )}
    </>
  )
}
