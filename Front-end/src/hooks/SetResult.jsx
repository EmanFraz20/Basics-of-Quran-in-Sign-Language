import * as Action from '../Redux/result-reducer'
import {postServerData} from '../helpdata/Helper'

export const PushAnswer=(selectedAnswer)=>async(dispatch,getState)=>{
    try{
        await dispatch(Action.pushResultAction(selectedAnswer))
    }catch(error){
        console.log(error)
    }

}

export const usePublishResult=(resultData)=>{
    const {username,result}=resultData;
    console.log("resultdata",resultData);
      (async()=>{  
    try{
        if(result.length===0 || !username)
           throw new Error("could not get result");
        await postServerData('http://localhost:5000/api/question/result',resultData,data=>data);
      
         }
         catch(error){
            console.log(error)}
 } )();
};
