import {
  CHANGE_USERS_DISPLAY,
  GET_USERS,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
  REMOVE_USER,
} from "../../constants/actionType";
import { USERS } from "../../constants/users";

export const getUsers = () => {
  return async (dispatch) => {
    dispatch({ type: GET_USERS });

    try {
      dispatch({ type: GET_USERS_SUCCESS, payload: USERS });
    } catch (error) {
      dispatch({ type: GET_USERS_FAILURE, payload: error.message });
    }
  };
};

export const changeUsersDisplay = (display) => {
  return async (dispatch) => {
    dispatch({ type: CHANGE_USERS_DISPLAY, payload: display });
  };
};

export const removeUser = (idx) => {
  return async (dispatch) => {
    dispatch({ type: REMOVE_USER, payload: idx });
  };
};
