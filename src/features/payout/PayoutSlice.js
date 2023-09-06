import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authHeader } from "src/utils/authHeader";
import customFetch from "src/utils/axiosGet";

export const getPayout = createAsyncThunk(
  "payout/getPayout",
  async (status, thunkAPI) => {
    try {
      const res = await customFetch(
        `/get/requestPayout?status=${status}`,
        authHeader()
      );
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const payoutToAgent = createAsyncThunk(
  "payout/payoutToAgent",
  async (id, thunkAPI) => {
    try {
        const res = await customFetch.post(`/paymentByadmin/${id}`,authHeader())
        toast.success(res.data.message)
        return res.data
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  payoutList: [],
  status: null,
  loader: false,
};

const payoutSlice = createSlice({
  name: "payoutList",
  initialState,
  reducers: {},
  extraReducers: {
    [getPayout.pending]: (state, action) => {
      state.status = "loader";
      state.loader = true;
    },
    [getPayout.fulfilled]: (state, action) => {
      state.status = "success";
      state.payoutList = action.payload;
      state.loader = false;
    },
    [getPayout.rejected]: (state, action) => {
      state.status = "error";
      state.loader = false;
    },
  },
});

export default payoutSlice.reducer;
