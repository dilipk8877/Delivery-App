import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authHeader } from "src/utils/authHeader";
import customFetch from "src/utils/axiosGet";

export const getProfile = createAsyncThunk("admin/getProfile", async (_,thunkAPI) => {
  try {
    const res = await customFetch("/getAdmin", authHeader());
    return res.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.message)

  }
});

export const updateProfile = createAsyncThunk(
  "update/updateProfile",
  async (data, thunkAPI) => {
    let fData = new FormData();
    fData.append("first_name", data.data.first_name);
    fData.append("last_name", data.data.last_name);
    fData.append("mobile", data.data.mobile);
    fData.append("short_code", data.data.short_code);
    fData.append("company_address", data.data.company_address);
    fData.append("company_name", data.data.company_name);
    fData.append("country", data.data.country);
    fData.append("profileImage",data.data.profileImage );
    try {
      const res = await customFetch.patch(
        `/updateAdminProfile/${data.id}`,
        fData,
        authHeader()
      );
      thunkAPI.dispatch(getProfile())
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      thunkAPI.rejectWithValue(error.response.data.message)

    }
  }
);

const initialState = {
  profileList: [],
  status: null,
  isLoader: false,
};

const profileSlice = createSlice({
  name: "profileList",
  initialState,
  extraReducers: {
    [getProfile.pending]: (state) => {
      state.status = "loading";
      state.isLoader=true
    },
    [getProfile.fulfilled]: (state, action) => {
      state.status = "success";
      state.profileList = action.payload;
      localStorage.setItem("profileImage",action.payload?.data?.profileImage)
      state.isLoader=false
    },
    [getProfile.rejected]: (state) => {
      state.status = "error";
      state.isLoader=false
    },
    [updateProfile.pending]: (state) => {
      state.profileList = "loading";
      state.isLoader = true;
    },
    [updateProfile.fulfilled]: (state, action) => {
      state.profileList = "success";
      state.isLoader = false;
    },
    [updateProfile.rejected]: (state) => {
      state.profileList = "error";
      state.isLoader = false;
    },
  },
});

export default profileSlice.reducer;
