import React from "react";
import { connect } from "react-redux";
function Loading({ isLoading }) {
  return (
    <div className={isLoading ? "isloading" : "not-loading"}>
      <span></span>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.Auth.isLoading,
  };
};

export default connect(mapStateToProps)(Loading);
