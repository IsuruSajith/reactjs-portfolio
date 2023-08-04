import React from 'react'
import PartOne from '../components/PartOne'
import PartTwo from '../components/PartTwo'

export default function HOme() {
  return (
    <div>
        
        <h1>this is my first page in home</h1>
        <PartOne name="isuru" occupation="software engineer"/>
        <PartOne name="sajith" occupation="senior software engineer"/>
        <PartOne name="rathnayaka" occupation="lead software engineer"/>
        <PartTwo/>

        </div>
  )
}
