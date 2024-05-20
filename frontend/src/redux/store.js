import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import mediaReducer from "./slices/mediaSlice";

const store = configureStore({
  reducer: {
    media: mediaReducer,
    auth: authReducer,
  },
});

export default store;
