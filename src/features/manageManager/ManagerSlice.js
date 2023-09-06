import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authHeader } from "src/utils/authHeader";
import customFetch from "src/utils/axiosGet";

export const getManagerList = createAsyncThunk(
  "managerList/getManagerList",
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get("get/sub_admin", authHeader());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.Error);
    }
  }
);

export const getPermission = createAsyncThunk(
  "perm/getPermission",
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get("/get/permission", authHeader());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.Error);
    }
  }
);

export const addSub_manager = createAsyncThunk(
  "add/addSub_manager",
  async (data, thunkAPI) => {
    try {
      const res = customFetch.post(`/add/sub_admin`, data.data, authHeader());
      toast.success((await res).data.message);
      thunkAPI.dispatch(getManagerList());
      data.navigate("/dispatcher/manageManager")
      data.action.resetForm()
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteManager = createAsyncThunk(
  "delete/deleteManager",
  async (id, thunkAPI) => {
    try {
      const res = await customFetch.delete(
        `/delete/sub_admin/${id}`,
        authHeader()
      );
      thunkAPI.dispatch(getManagerList());
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.Error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getManagerById = createAsyncThunk(
  "byId/getManagerById",
  async (id, thunkAPI) => {
    try {
      const res = await customFetch.get(
        `/getById/sub_admin/${id}`,
        authHeader()
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const updateSub_admin = createAsyncThunk(
  "update/updateSub_admin",
  async (data, thunkAPI) => {
    try {
      const res = await customFetch.patch(
        `/update/sub_admin/${data.id}`,
        data.data,
        authHeader()
      );
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.Error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const sidebarPermissionForSubAdmin = createAsyncThunk(
  "sidebarPermission/sidebarPermissionForSubAdmin",
  async (_, thunkAPI) => {
    const id = localStorage.getItem("id");
    try {
      const res = await customFetch.get(`permission/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.Error);
    }
  }
);
const initialState = {
  managerList: [],
  permission: [],
  managerById: [],
  sidebarPerm: [],
  status: null,
  confirmMessage: false,
  deleteId: null,
  isLoader: false,
  getError: false,
  toggleUpdateButton: true,
  toggleStatus: null,
  disabledField: false,
};

const managerSlice = createSlice({
  name: "managerList",
  initialState,
  reducers: {
    openConfirmMessage: (state, action) => {
      state.confirmMessage = true;
    },
    closeConfirmMessage: (state, action) => {
      state.confirmMessage = false;
    },
    setDeleteId: (state, action) => {
      state.deleteId = action.payload;
    },
    toggleUpdateButtonTrue: (state, action) => {
      state.toggleUpdateButton = true;
    },
    toggleUpdateButtonFalse: (state, action) => {
      state.toggleUpdateButton = false;
    },
    setToggleStausSubmit: (state, action) => {
      state.toggleStatus = "submit";
    },
    setToggleStausUpdate: (state, action) => {
      state.toggleStatus = "update";
    },
    DisabledFieldtrue: (state) => {
      state.disabledField = true;
    },
  },
  extraReducers: {
    [getManagerList.pending]: (state) => {
      state.status = "loading";
    },
    [getManagerList.fulfilled]: (state, action) => {
      state.status = "success";
      state.managerList = action.payload;
    },
    [getManagerList.rejected]: (state) => {
      state.status = "error";
    },
    [getPermission.pending]: (state) => {
      state.status = "loading";
    },
    [getPermission.fulfilled]: (state, action) => {
      state.status = "success";
      state.permission = action.payload;
    },
    [getPermission.rejected]: (state) => {
      state.status = "error";
    },
    [addSub_manager.pending]: (state, action) => {
      state.isLoader = true;
    },
    [addSub_manager.fulfilled]: (state, action) => {
      state.isLoader = false;
    },
    [addSub_manager.rejected]: (state, action) => {
      state.isLoader = false;
    },
    [updateSub_admin.pending]: (state, action) => {
      state.isLoader = true;
    },
    [updateSub_admin.fulfilled]: (state, action) => {
      state.isLoader = false;
    },
    [updateSub_admin.rejected]: (state, action) => {
      state.isLoader = false;
    },
    [deleteManager.pending]: (state, action) => {
      state.isLoader = true;
    },
    [deleteManager.fulfilled]: (state, action) => {
      state.isLoader = false;
    },
    [deleteManager.rejected]: (state, action) => {
      state.isLoader = false;
    },
    [getManagerById.pending]: (state) => {
      state.status = "loading";
    },
    [getManagerById.fulfilled]: (state, action) => {
      state.status = "success";
      state.managerById = action.payload;
    },
    [getManagerById.rejected]: (state) => {
      state.status = "error";
    },
    [sidebarPermissionForSubAdmin.pending]: (state) => {
      state.status = "loading";
      state.isLoader=true
    },
    [sidebarPermissionForSubAdmin.fulfilled]: (state, action) => {
      state.status = "success";
      state.sidebarPerm = action.payload;
      state.isLoader=false
    },
    [sidebarPermissionForSubAdmin.rejected]: (state) => {
      state.status = "error";
      state.isLoader=false
    },
  },
});
export const {
  openConfirmMessage,
  closeConfirmMessage,
  setDeleteId,
  toggleUpdateButtonTrue,
  toggleUpdateButtonFalse,
  setToggleStausSubmit,
  setToggleStausUpdate,
  DisabledFieldtrue,
} = managerSlice.actions;
export default managerSlice.reducer;
