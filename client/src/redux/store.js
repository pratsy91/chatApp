import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

import loaderReducer from "./loaderSlice";

const store = configureStore({
  reducer: {
    loaderReducer,
    userReducer,
  },
});

export default store;
