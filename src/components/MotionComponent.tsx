'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function MotionComponent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  )
}
