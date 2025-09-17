import React, { useState , useEffect } from 'react';

function Timer(){
    const [seconds, setSeconds] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            setSeconds( prevSeconds => prevSeconds + .5 )
        }, 1000)
    }, [])

    return (
        <div>
            <h2>Timer</h2>
            <p>Seconds: {seconds}</p>
        </div>
    )
}   

export default Timer;