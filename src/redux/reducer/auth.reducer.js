import * as ActionType from '../ActionTypes'

const newvalue = {
    isLoading : false,
    user : null,
    error:''
}
export const authReducer =(state=newvalue ,action) =>{
    // console.log(action.payload);
    switch (action.type){
        
        case  ActionType.SignupAction: 
            return {
                ...state,
               isLoading:false,
               user:action.payload,
               error:''
            }
        case ActionType.LoginAction:
            return{
                ...state,
                isLoading:false,
                user:null,
                error:''
            }
        
        default : 
            return state
            
    }
    
}