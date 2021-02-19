import React, { useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { checkAuth } from "./Redux/Action/Auth";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Protected from "./Route/Protected/index";
import UnProtected from "./Route/Unprotected/index";
import Navbar from "./Component/Layout/Navbar/Navbar";
import ScrollToTop from "./Route/ScrollToTop";

function App() {
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(checkAuth());
  }, [Dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        {isAuthenticated && <Navbar />}
        <ToastContainer />
        <ScrollToTop />

        <UnProtected />
        <Protected />
      </BrowserRouter>
    </div>
  );
}

export default App;
