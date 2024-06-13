import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import headerReducer from "./reducers/headerReducer";
import appReducer from "./reducers/appReducer";
import footerReducer from "./reducers/footerReducer";
import userManagementReducer from "./reducers/userManagementReducer";

export const store = createStore(
  combineReducers({
    header: headerReducer,
    app: appReducer,
    footer: footerReducer,
    userManagement: userManagementReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
