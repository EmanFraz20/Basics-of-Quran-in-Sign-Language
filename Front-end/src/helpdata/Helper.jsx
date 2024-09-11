import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios';

export function CheckUserExist({children}){
    const auth=useSelector(state=>state.result.userId)
   return auth? children :<Navigate to={'/quiz'} replace={true}> </Navigate>
}

export async function getServerData(url,callback){
    const data=await (await axios.get(url))?.data;
    return callback? callback(data):data;
}

export async function postServerData(url,result,callback){
    try{
        const response=await axios.post(url,result);
        return callback?callback(response.data):response.data;}
        catch(error){
            console.log(error);
        }
}

