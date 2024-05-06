import { configureStore } from "@reduxjs/toolkit";
import jobListReducer from "../features/jobs/jobListSlice";
export const store = configureStore({
  reducer: jobListReducer,
});
// import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
//   reducer: todoReducer,
// });
