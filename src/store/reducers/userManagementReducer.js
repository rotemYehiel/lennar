import {
  CHANGE_USERS_DISPLAY,
  GET_USERS,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
  REMOVE_USER,
} from "../../constants/actionType";
import { LIST } from "../../constants/keys";

const initialState = {
  users: null,
  loading: false,
  error: null,
  usersDisplay: LIST,
};

const userManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CHANGE_USERS_DISPLAY:
      return {
        ...state,
        usersDisplay: action.payload,
      };
    case REMOVE_USER:
      const newUsers = state.users.filter(
        (_, index) => index !== action.payload
      );
      return {
        ...state,
        users: newUsers,
      };

    default:
      return state;
  }
};

export default userManagementReducer;
