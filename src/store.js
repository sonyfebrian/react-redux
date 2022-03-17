import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./components/user/usersSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
