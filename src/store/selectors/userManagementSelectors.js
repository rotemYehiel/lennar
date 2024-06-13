export const userManagementSelector = (state) => state.userManagement;

export const usersSelector = (state) => userManagementSelector(state).users;
export const usersDisplaySelector = (state) =>
  userManagementSelector(state).usersDisplay;
