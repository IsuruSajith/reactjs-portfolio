import React from 'react'
import {Link} from 'react-router-dom'
import Bootstraptest from '../components/Bootstraptest'


export default function About() {
  return (
    <div>This is about page

        <br />
        <Link to='/Home'>Home</Link>

        <hr />
        <Bootstraptest/>
    </div>

  )
}
