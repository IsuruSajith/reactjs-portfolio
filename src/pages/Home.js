import React from 'react'
import PartOne from '../components/PartOne'


export default function HOme() {
  return (
    <div>
        
        <h1>this is my first page in home</h1>
        <PartOne name="isuru" occupation="software engineer">
            this is children props
        </PartOne>
        <PartOne name="sajith" occupation="senior software engineer">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolore ipsam mollitia nobis.
            Eveniet expedita, quo. </p>

        </PartOne>
        <PartOne name="rathnayaka" occupation="lead software engineer">
            <button>click me</button>
        </PartOne>


        </div>
  )
}
