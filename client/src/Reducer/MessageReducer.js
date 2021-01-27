import { GET_MESSAGE, CLEAR_MESSAGE } from "../Action/type";
const initialState = {
  msg: "",
  status: "",
  id: "",
};

const MessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return {
        ...state,
        msg: action.payload ? action.payload.data.msg : "BAD NETWORK",
        status: action.payload ? action.payload.status : "",
        id: action.id,
      };
      break;
    case CLEAR_MESSAGE:
      return {
        ...state,
        msg: "",
        status: "",
        id: "",
      };
      break;

    default:
      return state;
      break;
  }
};

export default MessageReducer;
