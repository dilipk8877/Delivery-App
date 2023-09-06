import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authHeader } from "src/utils/authHeader";
import customFetch from "src/utils/axiosGet";

export const getDispDashboardDetails = createAsyncThunk(
  "dahboard/getDispDashboardDetails",
  async (_,thunkAPI) => {
    try {
      const res = await customFetch.get("/get/teamWithAgents", authHeader());
      return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.Error);
    }
  }
);

export const getLatLngOfOrder = createAsyncThunk(
  "latLng/getLatLngOfOrder",
  async (id,thunkAPI) => {

    try {
      const res = await customFetch.get(
        `/get/OrderByDriverId/${id}`,
        authHeader()
      );
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
);

const initialState = {
  dashboardDetails: [],
  status: null,
  latLngList: [],
  resetRoute :false,
  isLoader:false
};

const dispDashboardDetailSlice = createSlice({
  name: "dasgboardDetails",
  initialState,
  extraReducers: {
    [getDispDashboardDetails.pending]: (state) => {
      state.status = "loading";
      state.isLoader=true
    },
    [getDispDashboardDetails.fulfilled]: (state, action) => {
      state.status = "success";
      state.dashboardDetails = action.payload;
      state.isLoader=false
    },
    [getDispDashboardDetails.rejected]: (state) => {
      state.status = "error";
      state.isLoader=false
    },
    [getLatLngOfOrder.pending]: (state) => {
      state.status = "loading";
    },
    [getLatLngOfOrder.fulfilled]: (state, action) => {
      state.status = "success";
      state.latLngList = action.payload;
      state.resetRoute=false
    },
    [getLatLngOfOrder.rejected]: (state) => {
      state.status = "error";
      state.resetRoute=true
    },
  },
});

export default dispDashboardDetailSlice.reducer;
