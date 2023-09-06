import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authHeader } from "src/utils/authHeader";
import customFetch from "src/utils/axiosGet";

export const getMobileBanner = createAsyncThunk(
  "mobileBanner/getMobileBanner",
  async (_,thunkAPI) => {
    try {
      const res = await customFetch.get("/get/banner", authHeader());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addMobileBanner = createAsyncThunk(
  "add/MobileBanner",
  async (data, thunkAPI) => {
    let fData = new FormData();
    fData.append("name", data.data.name);
    fData.append("startDate", data.data.startDate);
    fData.append("endDate", data.data.endDate);
    // fData.append("status", data.status);
    fData.append("assignTo", data.data.assignTo);
    fData.append("bannerImages", data.data.bannerImages);

    try {
      const res = await customFetch.post("/add/banner", fData, authHeader());
      toast.success(res.data.message);
      thunkAPI.dispatch(getMobileBanner());
      thunkAPI.dispatch(closeAddModal())
      data.action.resetForm()
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteMobileBanner = createAsyncThunk(
  "delete/deleteMobileBanner",
  async (id, thunkAPI) => {
    try {
      const res = await customFetch.delete(`delete/banner/${id}`, authHeader());
      thunkAPI.dispatch(getMobileBanner());
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);

    }
  }
);

export const activeMobileBanner = createAsyncThunk(
  "active/activeMobileBanner",
  async (id, thunkAPI) => {
    try {
      const res = await customFetch.patch(`/status/${id}`, authHeader());
      thunkAPI.dispatch(getMobileBanner());
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);

    }
  }
);

export const updateMobileBanner = createAsyncThunk(
  "update/updateMobileBanner",
  async (data, thunkAPI) => {
    let fData = new FormData();
    fData.append("name", data.data.name);
    fData.append("startDate", data.data.startDate);
    fData.append("endDate", data.data.endDate);
    fData.append("assignTo", data.data.assignTo);
    fData.append("bannerImages", data.data.bannerImages);
    try {
      const res = await customFetch.patch(
        `/update/banner/${data.id}`,fData,
        authHeader()
      );
      thunkAPI.dispatch(closeUpdateModal())
      thunkAPI.dispatch(getMobileBanner());
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);

    }
  }
);

const initialState = {
  mobileBannerList: [],
  status: null,
  addModal: false,
  confirmMessage: false,
  isLoader: false,
  deleteId: null,
  updateModal: false,
  prefieldValue:null,
  toggleStatus : true
};

const MobileBannerSlice = createSlice({
  name: "mobileBannerList",
  initialState,
  reducers: {
    openAddModal: (state) => {
      state.addModal = true;
    },
    closeAddModal: (state) => {
      state.addModal = false;
    },
    openUpdateModal: (state) => {
      state.updateModal = true;
    },
    closeUpdateModal: (state) => {
      state.updateModal = false;
    },
    openConfirmMessage: (state) => {
      state.confirmMessage = true;
    },
    closeConfirmMessage: (state) => {
      state.confirmMessage = false;
    },
    setDeleteID: (state, action) => {
      state.deleteId = action.payload;
    },
    setPrefieldValue: (state, action) => {
        state.prefieldValue = action.payload;
      },
    setToggleStatus :(state,action)=>{
      state.toggleStatus=action.payload
    }
  },
  extraReducers: {
    [getMobileBanner.pending]: (state) => {
      state.status = "loading";
      state.isLoader=true
    },
    [getMobileBanner.fulfilled]: (state, action) => {
      state.status = "success";
      state.mobileBannerList = action.payload;
      state.isLoader=false
    },
    [getMobileBanner.rejected]: (state) => {
      state.status = "error";
      state.isLoader=false
    },
    [addMobileBanner.pending]: (state) => {
      state.status = "loading";
      state.isLoader = true;
    },
    [addMobileBanner.fulfilled]: (state, action) => {
      state.status = "success";
      state.isLoader = false;
    },
    [addMobileBanner.rejected]: (state) => {
      state.status = "error";
      state.isLoader = false;
    },
    [updateMobileBanner.pending]: (state) => {
      state.status = "loading";
      state.isLoader = true;
    },
    [updateMobileBanner.fulfilled]: (state, action) => {
      state.status = "success";
      state.isLoader = false;
    },
    [updateMobileBanner.rejected]: (state) => {
      state.status = "error";
      state.isLoader = false;
    },
  },
});

export const {
  openAddModal,
  closeAddModal,
  openConfirmMessage,
  closeConfirmMessage,
  setDeleteID,
  openUpdateModal,
  closeUpdateModal,
  setPrefieldValue,
  setToggleStatus
} = MobileBannerSlice.actions;
export default MobileBannerSlice.reducer;
