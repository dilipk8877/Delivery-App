import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authHeader } from "src/utils/authHeader";
import customFetch from "src/utils/axiosGet";

export const getTeams = createAsyncThunk(
  "teams/getTeams",
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get("/teams", authHeader());
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getTeamsById = createAsyncThunk(
  "team/getTeamsById",
  async (id, thunkAPI) => {
    try {
      const res = await customFetch.get(`/team/${id}`, authHeader());
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addTeams = createAsyncThunk(
  "add/teams",
  async (data, thunkAPI) => {
    try {
      const res = await customFetch.post("/add/team", data.data, authHeader());
      thunkAPI.dispatch(getTeams());
      thunkAPI.dispatch(closeAddModal())
      toast.success(res.data.message);
      data.action.resetForm()
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const deleteTeams = createAsyncThunk(
  "delete/teams",
  async (id, thunkAPI) => {
    try {
      const res = await customFetch.delete(`/delete/team/${id}`, authHeader());
      thunkAPI.dispatch(getTeams());
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.Error);
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateTeam = createAsyncThunk(
  "update/team",
  async (data, thunkAPI) => {
    try {
      const res = await customFetch.patch(
        `/update/team/${data.id}`,
        data.data,
        authHeader()
      );
      thunkAPI.dispatch(getTeams());
      toast.success(res.data.message);
      data.action.resetForm()
      thunkAPI.dispatch(closeAddModal())
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
const initialState = {
  teamsList: [],
  teamsListById: [],
  status: null,
  addModal: false,
  confirmMessage: false,
  deleteId: null,
  toggleTeamModal: true,
  teamUpdatePreValue: "",
  submitStatus: null,
  isLoader: false,
};

const teamsSlice = createSlice({
  name: "teamsList",
  initialState,
  reducers: {
    openAddModal: (state, action) => {
      state.addModal = true;
    },
    closeAddModal: (state, action) => {
      state.addModal = false;
    },
    toggleTeamModalTrue: (state, action) => {
      state.toggleTeamModal = true;
    },
    toggleTeamModalFalse: (state, action) => {
      state.toggleTeamModal = false;
    },
    openConfirmMessage: (state, action) => {
      state.confirmMessage = true;
    },
    closeConfirmMessage: (state, action) => {
      state.confirmMessage = false;
    },
    teamDeleteId: (state, action) => {
      state.deleteId = action.payload;
    },
    setTeamUpdatePreValue: (state, action) => {
      state.teamUpdatePreValue = action.payload;
    },
    setSubmit: (state) => {
      state.submitStatus = "submit";
    },
    setUpdate: (state) => {
      state.submitStatus = "update";
    },
  },
  extraReducers: {
    [getTeams.pending]: (state) => {
      state.status = "loading";
      state.isLoader=true
    },
    [getTeams.fulfilled]: (state, action) => {
      state.status = "success";
      state.teamsList = action.payload;
      state.isLoader=false
    },
    [getTeams.rejected]: (state) => {
      state.status = "error";
      state.isLoader=false
    },
    [getTeamsById.pending]: (state) => {
      state.status = "loading";
    },
    [getTeamsById.fulfilled]: (state, action) => {
      state.status = "success";
      state.teamsListById = action.payload;
    },
    [getTeamsById.rejected]: (state) => {
      state.status = "error";
    },
    [addTeams.pending]: (state) => {
      state.isLoader = true;
    },
    [addTeams.fulfilled]: (state) => {
      state.isLoader = false;
    },
    [addTeams.rejected]: (state) => {
      state.isLoader = false;
    },
    [updateTeam.pending]: (state) => {
      state.isLoader = true;
    },
    [updateTeam.fulfilled]: (state) => {
      state.isLoader = false;
    },
    [updateTeam.rejected]: (state) => {
      state.isLoader = false;
    },
    [deleteTeams.pending]: (state) => {
      state.isLoader = true;
    },
    [deleteTeams.fulfilled]: (state) => {
      state.isLoader = false;
    },
    [deleteTeams.rejected]: (state) => {
      state.isLoader = false;
    },
  },
});
export const {
  openAddModal,
  closeAddModal,
  openConfirmMessage,
  closeConfirmMessage,
  teamDeleteId,
  toggleTeamModalTrue,
  toggleTeamModalFalse,
  setTeamUpdatePreValue,
  setSubmit,
  setUpdate,
} = teamsSlice.actions;
export default teamsSlice.reducer;
