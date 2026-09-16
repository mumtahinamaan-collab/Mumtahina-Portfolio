import React, { useState,useEffect } from 'react'
const Clock=({color})=>{
    const [time, setTime] = useState(new Date())
    useEffect(() => {setInterval(() => {setTime(new Date())}, 1000)},[] )
    return(
        <div style={{display:"flex",alignItems:"center", gap:"15px"}}>
            <h3>Time:</h3>
            <h4>{time.toLocaleTimeString()}</h4>
            <h3>Date:</h3>
            <h4 >{time.toLocaleDateString()}</h4>
        </div>
    )
}

export default Clock;