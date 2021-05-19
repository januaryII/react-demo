
import React, { useState, useEffect } from 'react';
export const HookInfo = props => {
    const [info,setInfo] = useState(null);
    console.log(props, 'p')
    useEffect(() => {
        // console.log(props, 'p')
    })
    return (
        <div  style={{display: props.style}}>
        <div onClick={()=>props.changeStar()}>changeStar</div>
        <div>name: {props.info.name}</div>
        <div>star: {props.info.star}</div>
    </div>
    )
}

