import React,{useState,useEffect} from 'react';
import {TableDemo} from '../../../component/common/table';
export const Hook=()=>{
    const [num,setNum] = useState(0);
    const getList = ()=>{
        setNum(5)
    }
    useEffect(()=>{
        console.log(11)
    })
    return (
        <div>
            <TableDemo />
        </div>
    )
}