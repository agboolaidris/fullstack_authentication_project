import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { clearMessage } from "../Redux/Action/Message";
import { useHistory } from "react-router-dom";
function Message({ clearMessage, msg, err, suc }) {
  const [Msg, setMsg] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (msg.id === err) {
      setMsg(msg.msg);
    } else if (msg.id === suc) {
      setMsg(msg.msg);
    } else if (msg.id === "RESETPASSWORD SUCCESSFUL") {
      setTimeout(() => {
        history.push("/login");
      }, 3000);
    } else {
      setMsg("");
    }
  }, [msg]);

  return (
    <span
      className={msg.status === 200 ? "suc" : msg.msg ? "err " : "msg-none"}
    >
      {Msg}
      <span onClick={() => clearMessage()}>
        <FontAwesomeIcon icon={faTimes} />
      </span>
    </span>
  );
}

const mapStateToProps = (state) => {
  return {
    msg: state.Msg,
    isAuthenticated: state.Auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { clearMessage })(Message);
