import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authHeader } from "src/utils/authHeader";
import customFetch from "src/utils/axiosGet";

export const getUsers = createAsyncThunk("user/getUsers", async (_,thunkAPI) => {
  try {
    const res = await customFetch.get(`/users`, authHeader());
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const deleteUsers = createAsyncThunk(
  "user/deleteUsers",
  async (id, thunkAPI) => {
    try {
      const res = await customFetch.delete(`/users/${id}`, authHeader());
      thunkAPI.dispatch(getUsers());
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const activeUsers = createAsyncThunk(
  "user/activeUsers",
  async (id, thunkAPI) => {
    try {
      const res = await customFetch.get(`/users/status/${id}`, authHeader());
      thunkAPI.dispatch(getUsers(id));
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const importCustomerCSVFile = createAsyncThunk(
  "importCSV/importCSVFile",
  async (data, thunkAPI) => {
    console.log("sdfsdfdfg", data);
    try {
      let fData = new FormData();
      fData.append("file", data.file);
      console.log("sadffgfg", fData.append("file", data.file))
      const res = await customFetch.post(`/importCSV`, fData, authHeader());
      thunkAPI.dispatch(getUsers());
      toast.success(res.data.message);
      thunkAPI.dispatch(closeImportModal())
      thunkAPI.dispatch(setErrorMessageHide())
      return res.data;
    } catch (error) {
      // toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editUsers = createAsyncThunk(
  "user/editUsers",
  async (data, thunkAPI) => {
    try {
      const res = await customFetch.patch(
        `/users/${data.id}`,
        data.data,
        authHeader()
      );
      thunkAPI.dispatch(getUsers());
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const searchCustomer = createAsyncThunk(
  "user/searchCustomer",
  async (data,thunkAPI) => {
    try {
      const res = await customFetch.get(
        `/users?name=${data.search}`,
        authHeader()
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addCustomer = createAsyncThunk(
  "user/addCustomer",
  async (data, thunkAPI) => {
    let fData = new FormData();
    fData.append("first_name", data.data.first_name);
    fData.append("last_name", data.data.last_name);
    fData.append("email", data.data.email);
    fData.append("mobile", data.data.mobile);
    fData.append("image", data.data.image);
    try {
      const res = await customFetch.post(
        `/admin/addCustomers`,
        fData,
        authHeader()
      );
      thunkAPI.dispatch(getUsers());
      toast.success(res.data.message);
      thunkAPI.dispatch(closeModal())
      data.action.resetForm()
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);

const initialState = {
  users: [],
  csvData: [],
  status: null,
  editUser: null,
  isModalOpen: false,
  isEditModalOpen: false,
  isImportModalOpen: false,
  editUser: {},
  isLoader: false,
  confirmMessage: false,
  deleteId: null,
  searchField:null,
  errorMessage:null,
  errorMessageHide:false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      const itemId = action.payload;
      state.users = state.users.filter((item) => item.id !== itemId);
    },
    setEditUser: (state, action) => {
      state.editUser = action?.payload;
    },
    openModal: (state, action) => {
      state.isModalOpen = true;
    },
    closeModal: (state, action) => {
      state.isModalOpen = false;
    },
    openEditModal: (state, action) => {
      state.isEditModalOpen = true;
    },
    closeEditModal: (state, action) => {
      state.isEditModalOpen = false;
    },
    openImportModal: (state, action) => {
      state.isImportModalOpen = true;
    },
    closeImportModal: (state, action) => {
      state.isImportModalOpen = false;
    },
    openConfirmModal: (state, action) => {
      state.confirmMessage = true;
    },
    closeConfirmModal: (state, action) => {
      state.confirmMessage = false;
    },
    userDeleteId: (state, action) => {
      state.deleteId = action.payload;
    },
    setSearchField: (state, action) => {
      state.searchField = action.payload;
    },
    setErrorMessageHide:(state,action)=>{
      state.errorMessageHide=false
    }
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = "loading";
      state.isLoader=true
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload;
      state.isLoader=false
    },
    [getUsers.rejected]: (state, action) => {
      state.status = "error";
      state.isLoader=false
    },
    [activeUsers.pending]: (state, action) => {
      state.isLoader=true
    },
    [activeUsers.fulfilled]: (state, action) => {
      state.isLoader=false
    },
    [activeUsers.rejected]: (state, action) => {
      state.isLoader=false
    },
    [searchCustomer.pending]: (state, action) => {
      state.status = "loading";
    },
    [searchCustomer.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload;
    },
    [searchCustomer.rejected]: (state, action) => {
      state.status = "error";
    },
    [addCustomer.pending]: (state, action) => {
      state.status = "loading";
      state.isLoader = true;
    },
    [addCustomer.fulfilled]: (state, action) => {
      state.status = "success";
      state.isLoader = false;
    },
    [addCustomer.rejected]: (state, action) => {
      state.status = "error";
      state.isLoader = false;
    },
    [editUsers.pending]: (state, action) => {
      state.status = "loading";
      state.isLoader = true;
    },
    [editUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload;
      state.isLoader = false;
    },
    [editUsers.rejected]: (state, action) => {
      state.status = "error";
      state.isLoader = false;
    },
    [importCustomerCSVFile.pending]: (state, action) => {
      state.status = "loading";
      state.isLoader = true;
    },
    [importCustomerCSVFile.fulfilled]: (state, action) => {
      state.status = "success";
      state.isLoader = false;
    },
    [importCustomerCSVFile.rejected]: (state, {payload}) => {
      state.status = "error";
      state.isLoader = false;
      state.errorMessageHide = true;
      state.errorMessage = payload?.response?.data?.message
    },
  },
});

export const {
  setEditUser,
  openModal,
  closeModal,
  openEditModal,
  closeEditModal,
  openImportModal,
  closeImportModal,
  openConfirmModal,
  closeConfirmModal,
  userDeleteId,
  setSearchField,
  setErrorMessageHide
} = usersSlice.actions;
export default usersSlice.reducer;
