import { toast } from "react-toastify";
import customFetch from "src/utils/axiosGet";
import { authHeader } from "src/utils/authHeader";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getRoutes = createAsyncThunk(
  "route,getRoute",
  async (status, thunkAPI) => {
    try {
      const res = await customFetch.get(`orderStatus/${status}`, authHeader());
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getRouteById = createAsyncThunk(
  "getRoute/getRouteById",
  async (id, thunkAPI) => {
    try {
      const res = await customFetch.get(`getRouteById/${id}`, authHeader());
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const searchRoutes = createAsyncThunk(
  "search/route",
  async (search, thunkAPI) => {
    try {
      const res = await customFetch.get(
        `searchRoutes/${search.currentStatus}?name=${search.name}`
      );
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const deleteHistoryRoute = createAsyncThunk(
  "deleteRoute/getRoutes",
  async (id, thunkAPI) => {
    try {
      const res = await customFetch.delete(`deleteRoute/${id}`, authHeader());
      thunkAPI.dispatch(getRoutes("delivered"));
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAssignDriver = createAsyncThunk(
  "assignDriver/getAssignDriver",
  async (driver, thunkAPI) => {
    try {
      const res = await customFetch.post(
        `/routes/action/edit/${driver.orderNumber}/${driver.userId}`,
        {},
        authHeader()
      );
      thunkAPI.dispatch(getRoutes("pending"));
      toast.success(res.data.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAvailbleDriver = createAsyncThunk(
  "AvailbleDriver,getAvailbleDriver",
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get("/availbale-drivers", authHeader());
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  route: [],
  routeByid: [],
  status: null,
  confirmMessage: false,
  deleteId: null,
  openAssignDriver: false,
  currentStatus: null,
  isLoader: false,
  assignDriver: [],
  orderNumber: null,
  availbleDriver: [],
  currentRoutePage: null,
};

const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    openConfirmModal: (state, action) => {
      state.confirmMessage = true;
    },
    closeConfirmModal: (state, action) => {
      state.confirmMessage = false;
    },
    userDeleteId: (state, action) => {
      state.deleteId = action.payload;
    },
    openAssignDriverModel: (state, action) => {
      state.openAssignDriver = true;
    },
    closeAssignDriverModel: (state, action) => {
      state.openAssignDriver = false;
    },
    setCurrentStatus: (state, action) => {
      state.currentStatus = action.payload;
    },
    setOrderNumber: (state, action) => {
      state.orderNumber = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentRoutePage = action.payload;
    },
  },
  extraReducers: {
    [getRoutes.pending]: (state, action) => {
      state.status = "loading";
      state.isLoader = true;
    },
    [getRoutes.fulfilled]: (state, action) => {
      state.status = "success";
      state.route = action.payload;
      state.isLoader = false;
    },
    [getRoutes.rejected]: (state, action) => {
      state.status = "error";
      state.route = [];
      state.isLoader = false;
    },
    [getRouteById.pending]: (state, action) => {
      state.status = "loading";
      state.isLoader = true;
    },
    [getRouteById.fulfilled]: (state, action) => {
      state.status = "success";
      state.routeByid = action.payload;
      state.isLoader = false;
    },
    [getRouteById.rejected]: (state, action) => {
      state.status = "error";
      state.route = [];
      state.isLoader = false;
    },
    [searchRoutes.pending]: (state, action) => {
      state.status = "loading";
    },
    [searchRoutes.fulfilled]: (state, action) => {
      (state.status = "success"), (state.route = action.payload);
    },
    [searchRoutes.rejected]: (state, action) => {
      state.status = "error";
    },
    [getAssignDriver.pending]: (state, action) => {
      state.isLoader = true;
    },
    [getAssignDriver.fulfilled]: (state, action) => {
      state.isLoader = false;
    },
    [getAssignDriver.rejected]: (state, action) => {
      state.isLoader = false;
    },
    [getAvailbleDriver.pending]: (state, action) => {
      state.status = "loading";
      state.isLoader = true;
    },
    [getAvailbleDriver.fulfilled]: (state, action) => {
      (state.status = "success"), (state.isLoader = false);
      state.availbleDriver = action.payload;
    },
    [getAvailbleDriver.rejected]: (state, action) => {
      state.status = "error";
      state.isLoader = false;
    },
  },
});
export const {
  openConfirmModal,
  closeConfirmModal,
  userDeleteId,
  openAssignDriverModel,
  closeAssignDriverModel,
  setCurrentStatus,
  setOrderNumber,
  setCurrentPage
} = routeSlice.actions;
export default routeSlice.reducer;
