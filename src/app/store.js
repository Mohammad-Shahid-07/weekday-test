import { configureStore } from "@reduxjs/toolkit";
import jobListReducer from "../features/jobs/jobListSlice";
export const store = configureStore({
  reducer: jobListReducer,
});
