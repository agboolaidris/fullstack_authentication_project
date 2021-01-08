import React,{useEffect} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './Component/Auth/Login/Login';
import Register from './Component/Auth/Register/Register';
import Navbar from './Component/Layout/Navbar/Navbar';
import {checkAuth} from './Action/AuthAction'
import {connect} from 'react-redux'
function App({checkAuth}) {
    useEffect(() => {
        checkAuth()
    }, [])
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
      <Route path='/login'  component={Login} />
      <Route path='/register'  component={Register} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}


export default connect(null, {checkAuth})(App);
