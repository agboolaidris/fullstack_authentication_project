import {USER_LOADED,USER_LOADING} from './type' 
import axios from 'axios'
export const checkAuth = ()=>{
    return async(dispatch, getState)=>{
       try{ 
        dispatch({type:USER_LOADING})
        const token = getState().Auth.token
        if(token){
           axios.get('',Headers({'x-auth-token':token}))
        }
    }
    catch(err){
        console.log(err.message)
    }
    }
}