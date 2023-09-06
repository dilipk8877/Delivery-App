import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authHeader } from "src/utils/authHeader";
import customFetch from "src/utils/axiosGet";
import {
  weekCheck,
  yearCheck,
  getDaysOfCurrentMonth,
} from "../../utils/momentconfig";
export const getDashboard = createAsyncThunk(
  "dashboard/getDashboard",
  async (_,thunkAPI) => {
    try {
      const res = await customFetch.get(`/count_order_status`, authHeader());
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getSalesAnalytics = createAsyncThunk(
  "dashboard/getSalesAnalytics",
  async (timeWindow, thunkAPI) => {
    try {
      const response = await customFetch.get(
        `/getOrdersInPresent${timeWindow}`,
        authHeader()
      );
      return response.data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);



const initialState = {
  stats: {},
  allOrder: [],
  status: null,
  dashboardError: "",
  salesData: [],
  chartLabels: [],
  isLoader:false
};

const dashboard = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setWeekSales: (state) => {
      state.chartLabels = weekCheck();
    },
    setMonthSales: (state) => {
      state.chartLabels = getDaysOfCurrentMonth();
    },
    setYearSales: (state) => {
      state.chartLabels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    },
  },
  extraReducers: {
    [getDashboard.pending]: (state, action) => {
      state.status = "loading";
      state.isLoader=true
    },
    [getDashboard.fulfilled]: (state, action) => {
      state.isLoader=false
      if (!!action.payload?.dashboard) {
        state.status = "success";
        const { dashboard } = action.payload;
        state.stats = dashboard;
        state.allOrder = action.payload;
      }
    },
    [getDashboard.rejected]: (state, action) => {
      state.status = "error";
      state.isLoader=false
      state.dashboardError = action.payload;
    },
    [getSalesAnalytics.pending]: (state, action) => {
      state.status = "loading";
      state.isLoader=true
    },
    [getSalesAnalytics.fulfilled]: (state, action) => {
      state.isLoader=false
      if (!!action.payload?.no_of_orders) {
        state.status = "success";
        const { no_of_orders } = action.payload;
        state.salesData = no_of_orders;
      }
    },
    [getSalesAnalytics.rejected]: (state, action) => {
      state.status = "error";
      state.isLoader=false
      state.dashboardError = action.payload;
    },
  },
});

export const { setWeekSales, setMonthSales, setYearSales } = dashboard.actions;
export default dashboard.reducer;
