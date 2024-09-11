import React from 'react'
import { useEffect} from 'react';
import { useState } from 'react';

import {getServerData} from '../helpdata/Helper'
export default function ResultTable() {
    const [data,setData]=useState([])
    useEffect(()=>{
        getServerData('http://localhost:5000/api/question/result',(res)=>{
            setData(res)
        })
    },[])

  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                {data.length === 0 ? <div>No data found</div>:
                data.map((v,i)=>(
            <tr className='table-body' key={i}>
                            <td>{v?.username || ''}</td>
                            <td>{v?.attempts||0}</td>
                            <td>{v?.points||0}</td>
                         <td >{v?.achived||""}</td>
                        </tr>
                ))}
            </tbody>
            </table>
            </div>
  )
}