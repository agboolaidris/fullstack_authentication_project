import { GET_ERROR, CLEAR_ERROR } from "./type";
export const getMessage = (payload, id) => {
  return (dispatch) => {
    dispatch({ type: GET_ERROR, payload, id });
  };
};

export const clearMessage = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_ERROR });
  };
};
