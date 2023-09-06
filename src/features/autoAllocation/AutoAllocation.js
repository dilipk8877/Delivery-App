import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authHeader } from "src/utils/authHeader";
import customFetch from "src/utils/axiosGet";

export const getAutoAllocation = createAsyncThunk("/getAutoAllocation", async (_,thunkAPI) => {
  try {
    const res = await customFetch.get("/get/allAutoType", authHeader());
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.Error);

  }
});

export const updateAutoAllocation = createAsyncThunk("update/updateAutoAllocation",async(data,thunkAPI)=>{
  try{
    const res = await customFetch.post("/auto_allocation_setting",data,authHeader())
    toast.success(res.data.message)
    return res.data
  }catch(error){
    toast.error(error.response.data.Error)
    return thunkAPI.rejectWithValue(error.response.data.Error);
  }
})

export const showAutoSetting = createAsyncThunk("showAuto/showAutoSetting",async(_,thunkAPI)=>{
  try{
    const res = await customFetch.get("/get/autoSetting",authHeader())
    return res.data
  }catch(error){
    toast.error(error.response.data.Error)
    return thunkAPI.rejectWithValue(error.response.data.Error);
  }
})

const initialState = {
  autoAllocation: [],
  status: null,
  autoSetting:[],
  isLoader:false
};
const autoAllocationSlice = createSlice({
  name: "autoAllocation",
  initialState,
  reducers: {},
  extraReducers: {
    [getAutoAllocation.pending]: (state) => {
      state.status = "loading";
    },
    [getAutoAllocation.fulfilled]: (state,action) => {
      state.status = "success";
      state.autoAllocation=action.payload
    },
    [getAutoAllocation.rejected]: (state) => {
      state.status = "error";
    },
    [showAutoSetting.pending]: (state) => {
      state.status = "loading";
    },
    [showAutoSetting.fulfilled]: (state,action) => {
      state.status = "success";
      state.autoSetting=action.payload
    },
    [showAutoSetting.rejected]: (state) => {
      state.status = "error";
    },
    [updateAutoAllocation.pending]:(state)=>{
      state.isLoader =true
    },
    [updateAutoAllocation.fulfilled]:(state)=>{
      state.isLoader =false
    },
    [updateAutoAllocation.rejected]:(state)=>{
      state.isLoader =false
    },
  },
});

export default autoAllocationSlice.reducer