import {createStore, compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './Reducer/RootReducer'
import {} from 'redux-devtools-extension' 

const enhancerCompose = [applyMiddleware(thunk),]

const Store = createStore(RootReducer,{},compose(...enhancerCompose))