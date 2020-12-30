import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './Component/Auth/Login/Login';
import Register from './Component/Auth/Register/Register';
import Navbar from './Component/Layout/Navbar/Navbar';
function App() {
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

export default App;
