import { GET_MESSAGE, CLEAR_MESSAGE } from "../Action/type";
const initialState = {
  msg: "",
  status: "",
  id: "",
};

const Msg = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return {
        ...state,
        msg: action.payload ? action.payload.data.msg : "BAD NETWORK",
        status: action.payload ? action.payload.status : "",
        id: action.id,
      };

    case CLEAR_MESSAGE:
      return {
        ...state,
        msg: "",
        status: "",
        id: "",
      };

    default:
      return state;
  }
};

export default Msg;
