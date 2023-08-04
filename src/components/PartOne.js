import React from 'react'
import './partone.css'

export default function PartOne() {

const text = "this is dynamic text in component part one"

  return (
    <div className='part-one'>
      <div className='box'>
        {text}
      </div>
  </div>
  )
}
