import { combineReducers } from "redux";
import company from "./company";
import auth from "./auth";
import alert from "./alert";

export default combineReducers({
  company,
  auth,
  alert
});
