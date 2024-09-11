import {useEffect,useState} from"react"
import {useDispatch} from "react-redux"
import * as Action from '../Redux/question-reducer'
import { getServerData } from "../helpdata/Helper"


const FetchQuestion=()=>{
const dispatch=useDispatch();
  
const [getData,setGetData]=useState({ isLoading:false,apiData:[],serverError:null});
  useEffect(()=>{
        setGetData(prev=>({...prev,isLoading:true}));

            (async()=>{
        try{
             let [{questions,answers}] = await getServerData('http://localhost:5000/api/question/questions',(data)=>data);                 //  console.log(q)
            if(questions.length>0)
             {
                setGetData(prev=>({...prev,isLoading:false,apiData:[]}));
                setGetData(prev=>({...prev,apiData:{questions,answers}}));
                dispatch(Action.startExamAction({questions,answers}))
              }
            else{
                  throw new Error("No Question Avaliable");
                }
          }
               catch(error){
                    setGetData(prev=>({...prev,isLoading:false}));
                 setGetData(prev=>({...prev,serverError:error}));
                }
            })();
        
        },[dispatch]);
       return [getData,setGetData];
}

export default FetchQuestion;
