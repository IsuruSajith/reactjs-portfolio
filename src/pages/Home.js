import React from 'react'
import PartOne from '../components/PartOne'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import './home.css'


export default function Home() {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {

        setCount(count - 1);
    }

    return (
        <div>

            <h1>this is my first page in home</h1>
            <PartOne name='Isuru'>

            </PartOne>

            <Link to='/About'>About</Link>
            <br/>
            <Link to='/Contact'>Contact us</Link>

            <hr/>
            <h3>My counter</h3>
            <h5>My count is: {count}</h5>
            <button className='button' onClick={decrease}>-</button>
            <button className='button' onClick={increase}>+</button>



        </div>)
}
