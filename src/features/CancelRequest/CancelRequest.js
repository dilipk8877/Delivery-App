import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authHeader } from "src/utils/authHeader";
import customFetch from "src/utils/axiosGet";

export const getCancelOrderRequest = createAsyncThunk(
  "cancelOrder/getCancelOrderRequest",
  async (status,thunkAPI) => {
    try {
      const res = await customFetch.get(
        `/cancelRequestData?requestStatus=${status}`
      ,authHeader());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

  const initialState ={
    cancelOrder: [],
    status: null,
    isLoader:false
  }

const cancelOrderSlice = createSlice({
  name: "cancelOrder",
  initialState,
  extraReducers: {
    [getCancelOrderRequest.pending]: (state) => {
      state.status = "loading";
      state.isLoader=true
    },
    [getCancelOrderRequest.fulfilled]: (state, action) => {
      state.status = "success";
      state.cancelOrder = action.payload;
      state.isLoader=false
    },
    [getCancelOrderRequest.rejected]: (state) => {
      state.status = "error";
      state.isLoader=false
    },
  },
});

export default cancelOrderSlice.reducer;
