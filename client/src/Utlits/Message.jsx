import React from "react";
import { ToastContainer } from "react-toastify";

const Message = () => {
  return (
    <ToastContainer
      toastClassName="toast"
      className="notification"
      position="top-center"
      autoClose={5000}
      pauseOnHover={true}
      hideProgressBar={true}
    />
  );
};

export default Message;
