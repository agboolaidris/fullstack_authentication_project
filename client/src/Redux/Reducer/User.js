import { FETCH_USER, POST_USER } from "../Action/type";
import { toast } from "react-toastify";
const Reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
      break;
    case POST_USER:
      toast.success("Profile updated");
      return action.payload;

    default:
      return state;
      break;
  }
};

export default Reducer;
