import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authHeader } from "src/utils/authHeader";
import customFetch from "src/utils/axiosGet";
export const getReturnRequest = createAsyncThunk(
  "pending/getReturnRequest",
  async (status,thunkAPI) => {
    try {
      const res = await customFetch.get(
        `/returnRequest?status=${status}`,
        authHeader()
      );
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.Error)

    }
  }
);

const returnRequestSlice = createSlice({
  name: "returnRequest",
  initialState: {
    returnRequest: [],
    status: null,
  },
  extraReducers: {
    [getReturnRequest.pending]: (state) => {
      state.status = "loading";
    },
    [getReturnRequest.fulfilled]: (state, action) => {
      state.status = "success";
      state.returnRequest = action.payload;
    },
    [getReturnRequest.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default returnRequestSlice.reducer;
