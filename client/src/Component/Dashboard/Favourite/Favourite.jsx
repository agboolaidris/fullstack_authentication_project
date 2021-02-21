import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SaveblogFetch } from "../../../Redux/Action/Blog";
function Favourite() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SaveblogFetch());
  }, [dispatch]);
  return <div className="favourite">Favourite</div>;
}

export default Favourite;
