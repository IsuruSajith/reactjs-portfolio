import React from 'react'
import {useState} from "react";

export default function FuncTest() {
    const [count,setCount]=useState(0)
    function buttonClick(){
        alert("hey isuru")
        setCount(count+1);
    }


  return (
    <div>
        <button onClick={buttonClick}>Click Me</button>
        <h2>counter</h2>
        <h3>count is: {count}</h3>
    </div>
  )
}
