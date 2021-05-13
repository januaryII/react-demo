import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {HookInfo} from './hook-info';
import {TableDemo} from '../../../component/common/table';
export const Hook=()=>{
    const [text,setText] = useState('');
    const [info,setInfo] = useState({
        name: '1',
        star: 1
    });
    const [displayStatus,setDisplayStatus] = useState('none');
    const getList = ()=>{
        setText('back')
    }
    const changeInfo =()=>{
        console.log(111)
        let status = '';
        if(displayStatus === 'block'){
            status = 'none';
        }
        else{
            status = 'block';
        }
        setDisplayStatus(status);
    }
    const changeStarFun = ()=>{
        setInfo({
            name: 'test',
            star: 10
        })
    }
    useEffect(()=>{
        console.log(11)
        getList();
    })
    return (
        <div>
            <Link to="/home/user" style={{margin: '20px 0'}}>{text}</Link>
            <div style={{padding: '30px 0',background: "#57779c"}}>个人中心 </div>
            <div onClick={changeInfo}>switch- info </div>
            <HookInfo  info={info} changeStar={changeStarFun} style={displayStatus}/>
            {/* <TableDemo /> */}
        </div>
    )
}