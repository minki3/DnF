'use client'
import React from 'react'

interface Props {
  props: any
}

export default function Test({ props }: Props) {
  console.log(props)
  console.log(props.rows[9].fame)
  return <div></div>
}
