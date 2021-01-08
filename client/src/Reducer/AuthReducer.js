import {USER_LOADING,USER_LOADED} from '../Action/type'
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
        default:
            return state
            break;
    }
}

export default AuthReducer
