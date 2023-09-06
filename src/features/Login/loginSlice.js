import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  customFetch from "src/utils/axiosGet";
import { toast } from "react-toastify";
import { setToken } from "src/utils/authHeader";
export const getLogin = createAsyncThunk(
  "user/getUserLogin",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await customFetch.post("/adminLogin", userData);
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem('userFirst', res.data.data.first_name);
      localStorage.setItem('userLast', res.data.data.last_name);
      localStorage.setItem('email', res.data.data.email);
      localStorage.setItem('userType', res.data.data.userType);
      localStorage.setItem('id', res.data.id);
      setToken(res.data.data.token);
      toast.success(res.data.message)
      return res.data;
    } catch (err) {
      toast.error(err.response.data.Error);
      toast.error(err.response.data.message);
      return rejectWithValue(err.res.data.data);
    }
  }
);

const initialState = {
  loading: false,
  userFirstName: localStorage.getItem('userFirst') ? localStorage.getItem('userFirst') : null,
  userLastName: localStorage.getItem('userLast') ? localStorage.getItem('userLast') : null,
  email: localStorage.getItem('email') ? localStorage.getItem('email') : null,
  error: null,
  success: false,
  isLogin: localStorage.getItem('token') ? true : false,
};

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOutUser: (state) => {
      localStorage.clear();
      state.isLogin = false;
      toast("Logout Successfully")
    },
  },
  extraReducers: {
    [getLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getLogin.fulfilled]: (state, { payload }) => {
      if (payload.status === 200) {
        const { first_name, last_name, email } = payload.data;
        state.userFirstName = first_name;
        state.userLastName = last_name;
        state.email = email;
        state.loading = false;
        state.isLogin = true;
      }
    },
    [getLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const { logOutUser } = loginSlice.actions;
export default loginSlice.reducer;
