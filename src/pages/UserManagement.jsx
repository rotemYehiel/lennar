import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/actions/userManagementAction";
import { usersSelector } from "../store/selectors/userManagementSelectors";
import DisplayDropdown from "../components/DisplayDropdown";
import Users from "../components/Users";
import { UserManagementConatiner } from "./UserManagement.style";

const UserManagement = () => {
  const dispatch = useDispatch();

  const users = useSelector(usersSelector);

  useEffect(() => {
    if (!users) {
      dispatch(getUsers());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  if (!users) return null;
  return (
    <UserManagementConatiner>
      <DisplayDropdown />
      {users && <Users users={users} />}
    </UserManagementConatiner>
  );
};

export default UserManagement;
