import {USER_LOADED,USER_LOADING,USER_AUTH_ERR, REGISTER_SUCCESSFUL,REGISTER_SUCCESSFUL_ERR} from './type' 
import axios from 'axios'
import {getError} from './ErrorAction'
export const checkAuth = ()=>{
    return async(dispatch, getState)=>{
       try{ 
        dispatch({type:USER_LOADING})
        const token = getState().Auth.token
        if(token){
           axios.get('http://localhost:5000/user',Headers({'x-auth-token':token}))
           .then(res=>{
               dispatch({type:USER_LOADED, payload:res.data})
               console.log(res)
           })
           .catch(err=>{
               dispatch({type:USER_AUTH_ERR})
           })
        }
        else{
            dispatch({type:USER_AUTH_ERR})
        }
    }
    catch(err){
        console.log(err.message)
    }
    }
}

export const Register = (user)=>{
    return async(dispatch)=>{
     try{ axios.post('http://localhost:5000/user/register',user)
      .then(res=>{
          dispatch({type:REGISTER_SUCCESSFUL,payload:res.payload})
        
      })
      .catch(err=>{
          dispatch({type:REGISTER_SUCCESSFUL_ERR})
          dispatch(getError(err.response.data))
      })       
    }
    catch(err){
        console.log(err.message)
    } 
   }
}