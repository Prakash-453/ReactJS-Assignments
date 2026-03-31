import React, { useState } from "react";
import Display from "./display";

function Counter(){
    
    const [value,setValue]=useState(0)
    const [random,setRandom]=useState(0)

    const handleIncrement = ()=>{
        setValue(value+1)
    }

    const handleRandom=()=>{
        setRandom(Math.random())
    }

    return (
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleRandom}>Click Here</button>
        {/* <h1>{value}</h1> */}

        <h1>{random}</h1>

        <Display value={value} />
      </div>
    );
}

export default Counter