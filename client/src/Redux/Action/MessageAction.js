import { GET_MESSAGE, CLEAR_MESSAGE } from "./type";
export const getMessage = (payload, id) => {
  return (dispatch) => {
    dispatch({ type: GET_MESSAGE, payload, id });
  };
};

export const clearMessage = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_MESSAGE });
  };
};
