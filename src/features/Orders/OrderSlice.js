import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authHeader } from "src/utils/authHeader";

import customFetch from "src/utils/axiosGet";

export const getAllOrders = createAsyncThunk(
  "status/getAllOrders",
  async (status,thunkAPI) => {
    const dateRange = `startDate=${status.startDate}&endDate=${status.endDate}`;
    const search = `name=${status.searchInput}`;
    try {
      const res = await customFetch.get(
        `/get_all_order?status=${status.status}&${
          status.searchInput ? search : status.startDate && dateRange
        }`,
        authHeader()
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  Allorders: [],
  status: null,
  searchInput: "",
  startDate: "",
  endDate: "",
  currentManageOrderPage:null,
  currentReturnOrderPage:null,
  currentCancelOrderPage:null
};

const AllOrdersSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setClearStartDate: (state, action) => {
      state.startDate = "";
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setClearEndDate: (state, action) => {
      state.endDate = "";
    },
    setCurrentManageOrderPage :(state,action)=>{
      state.currentManageOrderPage=action.payload
    },
    setCurrentReturnOrderPage:(state,action)=>{
      state.currentReturnOrderPage=action.payload
    },
    setCurrentCancelOrderPage:(state,action)=>{
      state.currentCancelOrderPage=action.payload
    }
  },
  extraReducers: {
    [getAllOrders.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAllOrders.fulfilled]: (state, action) => {
      state.status = "success";

      state.Allorders = action.payload;
    },
    [getAllOrders.rejected]: (state, action) => {
      state.status = "error";
      state.Allorders = [];
    },
  },
});
export const {
  setSearchInput,
  setStartDate,
  setEndDate,
  setClearStartDate,
  setClearEndDate,
  setCurrentManageOrderPage,
  setCurrentReturnOrderPage,
  setCurrentCancelOrderPage
} = AllOrdersSlice.actions;
export default AllOrdersSlice.reducer;
