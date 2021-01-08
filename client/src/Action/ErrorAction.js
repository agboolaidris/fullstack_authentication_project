import {GET_ERROR, CLEAR_ERROR} from './type'
export const getError = (msg)=>{
    return (dispatch)=>{
        dispatch({type:GET_ERROR, payload:msg})
    }
}