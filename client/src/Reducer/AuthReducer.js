const initialState = {
    token:localStorage.getItem('token'),
    isLoading:false,
    isAuthenticated:false,
    user:{}
}

const AuthReducer = (state=initialState,action)=>{
    switch (action.type) {
        default:
            return state
            break;
    }
}

export default AuthReducer
