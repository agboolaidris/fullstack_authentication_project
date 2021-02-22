import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer/index";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = [applyMiddleware(thunk)];

const Store = createStore(Reducer, compose(...composeEnhancers));

export default Store;
