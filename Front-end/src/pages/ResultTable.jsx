/*import React from 'react'
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
}*/

import React, { useEffect, useState } from 'react';
import { getServerData } from '../helpdata/Helper';
import '../index.css'

export default function ResultTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getServerData('http://localhost:5000/api/question/result', (res) => {
            setData(res);
        });
    }, []);

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        <th className="py-3 px-4 text-left border-b border-gray-200">Name</th>
                        <th className="py-3 px-4 text-left border-b border-gray-200">Attempts</th>
                        <th className="py-3 px-4 text-left border-b border-gray-200">Earn Points</th>
                        <th className="py-3 px-4 text-left border-b border-gray-200">Result</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan="4" className="py-4 px-4 text-center text-gray-500">No data found</td>
                        </tr>
                    ) : (
                        data.map((v, i) => (
                            <tr key={i} className={`border-b ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                <td className="py-3 px-4">{v?.username || ''}</td>
                                <td className="py-3 px-4">{v?.attempts || 0}</td>
                                <td className="py-3 px-4">{v?.points || 0}</td>
                                <td className="py-3 px-4">{v?.achived || ''}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
