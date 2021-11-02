import React from "react"
import "./Counter.scss"

const Counter = (props) => {
    const { sec, min, hours } = props.time
    const formatTime = (data) => data >= 10 ? data : `0${data}`
    return (
        <>
            <ul className="counter-list">
                <li>{formatTime(hours)}</li>&nbsp;:&nbsp;
                <li>{formatTime(min)}</li>&nbsp;:&nbsp;
                <li>{formatTime(sec)}</li>
            </ul>
        </>
    )
}

export default Counter