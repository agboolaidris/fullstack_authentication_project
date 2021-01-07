import {createStore, compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './Reducer/RootReducer'