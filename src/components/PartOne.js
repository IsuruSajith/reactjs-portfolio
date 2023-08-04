import React from 'react'
import './partone.css'

export default function PartOne(props) {

const text = "this is dynamic text in component part one"


  return (
    <div className='part-one'>
      <div className='box'>
        {text}
        <br/>
        {"my name is : "+props.name}

      </div>
  </div>
  )
}
