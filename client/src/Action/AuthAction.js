import {USER_LOADED,
    LOGOUT,
    USER_LOADING,
    USER_AUTH_ERR,
     REGISTER_SUCCESSFUL,
     REGISTER_ERROR,
     LOGIN_ERROR,
     LOGIN_SUCCESSFUL} from './type' 
import axios from 'axios'
import {getError} from './ErrorAction'
export const checkAuth = ()=>{
    return async(dispatch)=>{
       try{ 
        dispatch({type:USER_LOADING})

         axios.get('http://localhost:5000/user/authenticated')
           .then(res=>{
               console.log(res)
               dispatch({type:USER_LOADED, payload:res.data})
            })
           .catch(err=>{
               console.log(err.response)
               dispatch({type:USER_AUTH_ERR})
           })
        
        
    }
    catch(err){
        console.log(err.message)
    }
    }
}

export const Register = (user)=>{
    return async(dispatch)=>{
     try{
       axios.post('http://localhost:5000/user/register',user)
      .then(res=>{
        axios.post('http://localhost:5000/user/login',user)
        .then(res=>{
          dispatch({type:REGISTER_SUCCESSFUL,payload:res.data})
        })
        .catch(err=>{
            dispatch(getError(err.response,'REGISTERATION FAIL'))
            dispatch({type:REGISTER_ERROR})
        })
      })
      .catch(err=>{
          dispatch({type:REGISTER_ERROR})
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
          console.log(err.response)
          dispatch({type:LOGIN_ERROR})
          dispatch(getError(err.response,'LOGIN FAIL'))
      })       
    }
    catch(err){
        console.log(err.message)
    } 
   }
}

export const oauthRegister  = (user)=>{
    const data = {
        username:user.name,
        email:user.email,
        password:user.id,
        password2:user.id
    }
    return async dispatch=>{
     try{
     dispatch({type:USER_LOADING})
     axios.post('http://localhost:5000/user/register', data)
     .then(res=>{
         console.log(res)
        axios.post('http://localhost:5000/user/login',data)
        .then(res=>{
          dispatch({type:REGISTER_SUCCESSFUL,payload:res.data})
        })
        .catch(err=>{
            dispatch(getError(err.response,'REGISTERATION FAIL'))
            dispatch({type:REGISTER_ERROR})
        })
     })
     .catch(err=>{
         console.log(err.response)
     })
    }
   catch(err){
       console.log(err)
   }
 }
}

export const Logout = ()=>{
    return (dispatch)=>{
      dispatch({type:LOGOUT})
    }
}