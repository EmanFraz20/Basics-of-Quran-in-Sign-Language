import { createSlice } from "@reduxjs/toolkit";


/** create reducer */
export const questionReducer = createSlice({
    name: 'questions',
    initialState : {
        queue: [],
        answers:[],
        
        trace : 0
    },
    reducers : {
        startExamAction : (state, action) => {
     
            return{
                ...state,
           
               queue:action.payload.questions,
               answers:action.payload.answers,
            
               trace:0
            
            };     
                    },
   
            resetAllAction:()=>{
                return{
                    queue:[],
                    answers:[],
                    trace:0
                };
            },
},
    
}

);
export const { startExamAction,pushResultAction,resetAllAction} = questionReducer.actions;

export default questionReducer.reducer;  