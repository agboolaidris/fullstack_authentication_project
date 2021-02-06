import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userFetch } from "../../../Action/BlogAction";
function Index() {
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(userFetch);
  }, [Dispatch]);

  return <div className="user">Hello</div>;
}

export default Index;
