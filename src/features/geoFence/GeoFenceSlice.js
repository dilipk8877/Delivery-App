import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authHeader } from "src/utils/authHeader";
import customFetch from "src/utils/axiosGet";

export const getGeoFence = createAsyncThunk(
  "GeoFence/getGeoFence",
  async (_,thunkAPI) => {
    try {
      const res = await customFetch("all/geos", authHeader());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.Error);
    }
  }
);

export const addGeoFence = createAsyncThunk(
  "GeoFence/addGeoFence",
  async (data, thunkAPI) => {
    try {
      const res = await customFetch.post("/create/geo", data, authHeader());
      toast.success(res.data.message);
      data.navigate("/dispatcher/geoFence")
      thunkAPI.dispatch(getGeoFence());
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);

    }
  }
);

export const getCoordinatesById = createAsyncThunk(
  "CoordinatesById/getCoordinatesById",
  async (id,thunkAPI) => {
    try {
      const res = await customFetch(`/get/geo/${id}`, authHeader());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteGeoFence = createAsyncThunk(
  "delete/deleteGeoFence",
  async (id, thunkAPI) => {
    try {
      const res = await customFetch.delete(`/geo/${id}`, authHeader());
      toast.success(res.data.message);
      thunkAPI.dispatch(getGeoFence());
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getPrefieldGEoFenceById = createAsyncThunk(
  "PrefieldGEoFenceById/getPrefieldGEoFenceById",
  async (id,thunkAPI) => {
    try{
      const res = await customFetch.get(`/get/geo/${id}`,authHeader())
      return res.data
    }catch(error){
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);


export const updateGeoFence = createAsyncThunk(
  "update/UpdateGeoFence",
  async (data, thunkAPI) => {
    try {
      const res = await customFetch.post(`geo/${data.id}`, data, authHeader());
      toast.success(res.data.message);
      data.navigate("/dispatcher/geoFence")
      return res.data;
    } catch (error) {
      toast.error(error.response.data.Error);
      toast.error("To update, Please create a new area.");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  geoFence: [],
  status: null,
  coordinates: [],
  isLoader: false,
  coordinatById: [],
  confirmationMesaage: false,
  deleteId: null,
  prefieldGEoFenceById:[],
};
const geoFenceSlice = createSlice({
  name: "geoFence",
  initialState,
  reducers: {
    setCoordinates: (state, action) => {
      state.coordinates = action.payload;
    },
    confirmationMesaageOpen: (state) => {
      state.confirmationMesaage = true;
    },
    confirmationMesaageClose: (state) => {
      state.confirmationMesaage = false;
    },
    setDeleteId: (state, action) => {
      state.deleteId = action.payload;
    },

  },
  extraReducers: {
    [getGeoFence.pending]: (state) => {
      state.status = "loading";
      state.isLoader=true
    },
    [getGeoFence.fulfilled]: (state, action) => {
      state.status = "success";
      state.geoFence = action.payload;
      state.isLoader=false
    },
    [getGeoFence.pending]: (state) => {
      state.status = "error";
      state.isLoader=false
    },
    [addGeoFence.pending]: (state) => {
      state.status = "loading";
      state.isLoader = true;
    },
    [addGeoFence.fulfilled]: (state, action) => {
      state.status = "success";
      state.isLoader = false;
    },
    [addGeoFence.rejected]: (state) => {
      state.status = "error";
      state.isLoader = false;
    },
    [updateGeoFence.pending]: (state) => {
      state.status = "loading";
      state.isLoader = true;
    },
    [updateGeoFence.fulfilled]: (state, action) => {
      state.status = "success";
      state.isLoader = false;
    },
    [updateGeoFence.rejected]: (state) => {
      state.status = "error";
      state.isLoader = false;
    },
    [getCoordinatesById.pending]: (state) => {
      state.status = "loading";
    },
    [getCoordinatesById.fulfilled]: (state, action) => {
      state.status = "success";
      state.coordinatById = action.payload;
    },
    [getCoordinatesById.pending]: (state) => {
      state.status = "error";
    },
    [getPrefieldGEoFenceById.pending]: (state) => {
      state.status = "loading";
    },
    [getPrefieldGEoFenceById.fulfilled]: (state, action) => {
      state.status = "success";
      state.prefieldGEoFenceById = action.payload;
    },
    [getPrefieldGEoFenceById.pending]: (state) => {
      state.status = "error";
    },
    [deleteGeoFence.pending]:(state)=>{
      state.isLoader=true
    },
    [deleteGeoFence.fulfilled]:(state)=>{
      state.isLoader=false
    },
    [deleteGeoFence.rejected]:(state)=>{
      state.isLoader=false
    },
  },
});
export const {
  setCoordinates,
  confirmationMesaageOpen,
  confirmationMesaageClose,
  setDeleteId,
} = geoFenceSlice.actions;
export default geoFenceSlice.reducer;
