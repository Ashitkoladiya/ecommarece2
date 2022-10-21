import *as ActionTypes from '../ActionTypes'

export  const SignUpAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SignupAction, payload: data })
}
export const LoginAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.LoginAction, payload: data })
}

export const forgetPassword =(data)=>(dispatch)=>{
    dispatch({type:ActionTypes.ForgetPassword ,payload:data})
}
