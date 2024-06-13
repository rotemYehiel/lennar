import {
  GET_USERDETAILS,
  GET_USERDETAILS_FAILURE,
  GET_USERDETAILS_SUCCESS,
  SET_FEEDBACK,
} from "../../constants/actionType";

export const getUserDeatails = () => {
  return async (dispatch) => {
    dispatch({ type: GET_USERDETAILS });

    try {
      const userDetails = {
        username: "Rotem Patrakeev",
        professional: "Frontend developer",
      };

      dispatch({ type: GET_USERDETAILS_SUCCESS, payload: userDetails });
    } catch (error) {
      dispatch({ type: GET_USERDETAILS_FAILURE, payload: error.message });
    }
  };
};

export const setFeedback = (feedback) => {
  return async (dispatch) => {
    dispatch({ type: SET_FEEDBACK, payload: feedback });
  };
};
