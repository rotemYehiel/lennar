import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersDisplaySelector } from "../store/selectors/userManagementSelectors";
import { CARDS, LIST } from "../constants/keys";
import { changeUsersDisplay } from "../store/actions/userManagementAction";

const DisplayDropdown = () => {
  const dispatch = useDispatch();
  const usersDisplay = useSelector(usersDisplaySelector);

  const handleChange = (event) => {
    dispatch(changeUsersDisplay(event.target.value));
  };

  return (
    <select
      value={usersDisplay}
      onChange={handleChange}
      style={{ width: "fit-content" }}
    >
      <option value={LIST}>List</option>
      <option value={CARDS}>Cards</option>
    </select>
  );
};

export default DisplayDropdown;
