import {USER_LOADING,USER_LOADED,USER_AUTH_ERR} from '../Action/type'
const initialState = {
    token:localStorage.getItem('token'),
    isLoading:false,
    isAuthenticated:false,
    user:{}
}

const AuthReducer = (state=initialState,action)=>{
    switch (action.type) {
        case USER_LOADING:
            return{
                ...state,
                isLoading:true
            }
            break;
         case USER_LOADED:
              localStorage.setItem('token',action.payload.token)
             return{
                 ...state,
                 isLoading:false,
                 token:action.payload.token,
                 isAuthenticated:true,
                 user:action.payload.user
                 
             }
             break;
          case USER_AUTH_ERR:
              localStorage.removeItem('token')
              return{
                  ...state,
                  isLoading:false,
                  isAuthenticated:false,
                  token:'',
                  user:{}

              }      
        default:
            return state
            break;
    }
}

export default AuthReducer
