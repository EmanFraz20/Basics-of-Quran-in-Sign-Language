import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios';



export async function getServerData(url,callback){
    const res=await axios.get(url);
    return callback? callback(res.data):res.data;
}

export async function postServerData(url,result,callback){
    try{
        const response=await axios.post(url,result);
        return callback?callback(response.data):response.data;}
        catch(error){
            console.log(error);
        }
}

