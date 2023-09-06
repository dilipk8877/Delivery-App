import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authHeader } from "src/utils/authHeader";
import customFetch from "src/utils/axiosGet";

export const getPricingRule = createAsyncThunk(
  "pricing/getPricingRule",
  async (_,thunkAPI) => {
    try {
      const res = await customFetch.get("get/pricing", authHeader());
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
);

export const addPricingRule = createAsyncThunk(
  "add/pricingRule",
  async (data, thunkAPI) => {
    try {
      const res = await customFetch.post("add_pricing", data.data, authHeader());
      toast.success(res.data.message);
      thunkAPI.dispatch(getPricingRule());
      data.action.resetForm()
      thunkAPI.dispatch(closeAddModal())
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
);

export const getVehicleType = createAsyncThunk("_/getVehicleType", async (_,thunkAPI) => {
  try {
    const res = await customFetch.get("/get/vehicleType", authHeader());
    return res.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.message)
  }
});

export const deletePricingRule = createAsyncThunk(
  "delete/deletePricingRule",
  async (id, thunkAPI) => {
    try {
      const res = await customFetch.delete(
        `/delete/pricing/${id}`,
        authHeader()
      );
      thunkAPI.dispatch(getPricingRule());
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      thunkAPI.rejectWithValue(error.response.data.message)

    }
  }
);

export const updatePricingRule = createAsyncThunk(
  "update/updatePricingRule",
  async (data, thunkAPI) => {
    try {
      const res = await customFetch.patch(
        `/update/pricing/${data.UpdateId}`,
        data.data,
        authHeader()
      );
      thunkAPI.dispatch(getPricingRule());
      data.action.resetForm()
      thunkAPI.dispatch(closeAddModal())
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      thunkAPI.rejectWithValue(error.response.data.message)

    }
  }
);

const initialState = {
  pricingList: [],
  status: null,
  addmodal: false,
  isLoader: false,
  vehicleType: [],
  confirmationMessage: false,
  deleteId: null,
  prefieldPricingRule:null,
  toggleButton:true
};

const pricingRuleSlice = createSlice({
  name: "pricingList",
  initialState,
  reducers: {
    openAddModal: (state) => {
      state.addmodal = true;
    },
    closeAddModal: (state) => {
      state.addmodal = false;
    },
    openConfirmationMessage: (state) => {
      state.confirmationMessage = true;
    },
    closeConfirmationMessage: (state) => {
      state.confirmationMessage = false;
    },
    setDeleteId: (state, action) => {
      state.deleteId = action.payload;
    },
    setPrefieldValue:(state,action)=>{
        state.prefieldPricingRule=action.payload
    },
    toggleSubmitButton:(state)=>{
        state.toggleButton=true
    },
    toggleUpdateButton:(state)=>{
        state.toggleButton=false
    },
  },
  extraReducers: {
    [getPricingRule.pending]: (state) => {
      state.status = "loading";
      state.isLoader=true
    },
    [getPricingRule.fulfilled]: (state, action) => {
      state.status = "success";
      state.pricingList = action.payload;
      state.isLoader=false
    },
    [getPricingRule.rejected]: (state) => {
      state.status = "error";
      state.isLoader=false
    },
    [addPricingRule.pending]: (state) => {
      state.isLoader = true;
    },
    [addPricingRule.fulfilled]: (state, action) => {
      state.isLoader = false;
    },
    [addPricingRule.rejected]: (state) => {
      state.isLoader = false;
    },
    [updatePricingRule.pending]: (state) => {
      state.isLoader = true;
    },
    [updatePricingRule.fulfilled]: (state, action) => {
      state.isLoader = false;
    },
    [updatePricingRule.rejected]: (state) => {
      state.isLoader = false;
    },
    [getVehicleType.pending]: (state) => {
      state.status = "loading";
    },
    [getVehicleType.fulfilled]: (state, action) => {
      state.status = "success";
      state.vehicleType = action.payload;
    },
    [getVehicleType.rejected]: (state) => {
      state.status = "error";
    },
    [deletePricingRule.pending]: (state) => {
      state.isLoader = true;
    },
    [deletePricingRule.fulfilled]: (state, action) => {
      state.isLoader = false;
    },
    [deletePricingRule.rejected]: (state) => {
      state.isLoader = false;
    },
  },
});

export const {
  openAddModal,
  closeAddModal,
  openConfirmationMessage,
  closeConfirmationMessage,
  setDeleteId,
  setPrefieldValue,
  toggleSubmitButton,
  toggleUpdateButton
} = pricingRuleSlice.actions;
export default pricingRuleSlice.reducer;
