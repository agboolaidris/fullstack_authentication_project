import {USER_LOADED,USER_LOADING,USER_AUTH_ERR, REGISTER_SUCCESSFUL,REGISTER_SUCCESSFUL_ERR,LOGIN_SUCCESSFUL_ERR,LOGIN_SUCCESSFUL} from './type' 
import axios from 'axios'
import {getError} from './ErrorAction'
export const checkAuth = ()=>{
    return async(dispatch, getState)=>{
       try{ 
        dispatch({type:USER_LOADING})
        const token = getState().Auth.token
        if(token){
           axios.get('http://localhost:5000/user',{headers:{'x-auth-token':token}})
           .then(res=>{
               dispatch({type:USER_LOADED, payload:res.data})
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

          dispatch({type:REGISTER_SUCCESSFUL,payload:res.data})
        
      })
      .catch(err=>{
          dispatch({type:REGISTER_SUCCESSFUL_ERR})
          dispatch(getError(err.response,'REGISTERATION FAIL'))
      })       
    }
    catch(err){
        console.log(err.message)
    } 
   }
}
export const Login = (user)=>{
    return async(dispatch)=>{
     try{ axios.post('http://localhost:5000/user/login',user)
      .then(res=>{

          dispatch({type:LOGIN_SUCCESSFUL,payload:res.data})
        
      })
      .catch(err=>{
          dispatch({type:LOGIN_SUCCESSFUL_ERR})
          dispatch(getError(err.response,'LOGIN FAIL'))
      })       
    }
    catch(err){
        console.log(err.message)
    } 
   }
}