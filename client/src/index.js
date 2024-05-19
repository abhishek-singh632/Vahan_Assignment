import { combineReducers } from "redux";
import personReducer from "./personReducer";

export default combineReducers({
  persons: personReducer,
  // Add other reducers if needed
});
