import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

export const fetchJobs = createAsyncThunk("fetchJobs", async (offset = 0) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const body = JSON.stringify({
    limit: 10,
    offset,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  const response = await fetch(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    requestOptions,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
});

export const jobListSlice = createSlice({
  name: "jobList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchJobs.fulfilled, (state, actions) => {
      state.loading = false;
      state.jobs.push(...actions.payload.jdList);
    });
    builder.addCase(fetchJobs.rejected, (state, actions) => {
      state.loading = false;
      state.error = actions.error;
    });
  },
});

export default jobListSlice.reducer;
