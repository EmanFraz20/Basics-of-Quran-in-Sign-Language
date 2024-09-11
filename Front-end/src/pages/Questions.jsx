import React,{ useEffect,useState} from 'react'


import { useDispatch } from 'react-redux'

import { pushResultAction } from '../Redux/result-reducer'
export default function Questions({question})
{


  const dispatch=useDispatch();

 
 
  const [checked, setChecked] = useState(undefined);


   
  useEffect(()=>{
    setChecked(undefined);
  
   },[question])
  
    const handleSelect=(optionindex)=>{
      setChecked(optionindex);
   
   dispatch(pushResultAction(optionindex));
    };

   if(!question)return <h3 className='text-light'>Question not available</h3>;
  

    return(
        <div className=' questions '>
     
     
       
        
          <h2 className=''>{question.question}</h2>
         <ul >
            

          
               { question.options.map((option,i)=>(
                <li key={i}>
                     <input 
                     type="radio"
                     value={i}
                    
                    name={`question-${question.id}`}
                     id={`q${i}-option`}
                     checked={checked===i}
                     onChange={()=>handleSelect(i)}
                     
                        />
                        <label className='text-primary ' htmlFor={`q${i}-option`}>{option}</label>   
                     <div className='check'></div>
                               </li>
                               
              ))}

</ul>
        </div>
  
    );
}