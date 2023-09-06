import { authHeader } from "src/utils/authHeader";
import customFetch from "src/utils/axiosGet";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getAgents = createAsyncThunk(
  "agent/getAgents",
  async (status, thunkAPI) => {
    try {
      const res = await customFetch.get(`/getAllAgent?${status}`, authHeader());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getChangeState = createAsyncThunk(
  "changeStatge/getChangeState",
  async (state, thunkAPI) => {
    try {
      const res = await customFetch.patch(
        `/${state.status}/${state.id}`,
        state,
        authHeader()
      );
      thunkAPI.dispatch(getAgents(state.currentStatus));
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteAgents = createAsyncThunk(
  "delete/deleteAgents",
  async (data, thunkAPI) => {
    try {
      const res = await customFetch.delete(
        `deleteAgent/${data.deleteId}?${data.currentSTs}`,
        authHeader()
      );
      thunkAPI.dispatch(getAgents(data.currentSTs));
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addAgents = createAsyncThunk(
  "add/addAgents",
  async (data, thunkAPI) => {
    try {
      const res = await customFetch.post(`/addAgent`, data.data, authHeader());
      thunkAPI.dispatch(getAgents(data.status));
      toast.success(res.data.message);
      data.action.resetForm()
      thunkAPI.dispatch(closeAgentAddModal())
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const searchAgents = createAsyncThunk(
  "search/searchAgents",
  async (search, thunkAPI) => {
    try {
      const res = await customFetch.get(
        `searchAgent?name=${search.search}&${search.currentSTs}`,
        authHeader()
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);

    }
  }
);

export const assignTeamsToDriver = createAsyncThunk(
  "assign/assignTeamsToDriver",
  async (assign, thunkAPI) => {
    try {
      const res = await customFetch.post(
        `/agents/teamAssign/${assign.teamId}/${assign.driverId}`,
        assign,
        authHeader()
      );
      thunkAPI.dispatch(getAgents("isActive=1"));
      toast.success(res.data.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
const initialState = {
  agentList: [],
  status: null,
  agentAddModal: false,
  isLoader: false,
  confirmMessage: false,
  deleteId: null,
  currentSTs: null,
  assignDriverModel: false,
  driverId: null,
  currentPage:null
};

const agentSlice = createSlice({
  name: "agentList",
  initialState,
  reducers: {
    openAgentAddModal: (state, action) => {
      state.agentAddModal = true;
    },
    closeAgentAddModal: (state, action) => {
      state.agentAddModal = false;
    },
    openConfirmationModal: (state, action) => {
      state.confirmMessage = true;
    },
    closeConfirmationModal: (state, action) => {
      state.confirmMessage = false;
    },
    setDeleteId: (state, action) => {
      state.deleteId = action.payload;
    },
    setCurrentSTs: (state, action) => {
      state.currentSTs = action.payload;
    },
    openAssignDriverModel: (state, action) => {
      state.assignDriverModel = true;
    },
    closeAssignDriverModel: (state, action) => {
      state.assignDriverModel = false;
    },
    setDriverId: (state, action) => {
      state.driverId = action.payload;
    },
    setCurrentAgentPage:(state,action)=>{
      state.currentPage=action.payload
    }
  },
  extraReducers: {
    [getAgents.pending]: (state) => {
      state.status = "loading";
      state.isLoader = true;
    },
    [getAgents.fulfilled]: (state, action) => {
      state.status = "success";
      state.isLoader = false;
      state.agentList = action.payload;
    },
    [getAgents.rejected]: (state) => {
      state.status = "error";
      state.isLoader = false;
    },
    [searchAgents.pending]: (state) => {
      state.status = "loading";
    },
    [searchAgents.fulfilled]: (state, action) => {
      state.status = "success";
      state.agentList = action.payload;
    },
    [searchAgents.rejected]: (state, action) => {
      state.status = "error";
    },
    [addAgents.pending]: (state) => {
      state.status = "loading";
      state.isLoader = true;
    },
    [addAgents.fulfilled]: (state, action) => {
      state.status = "success";
      state.isLoader = false;
    },
    [addAgents.rejected]: (state) => {
      state.status = "error";
      state.isLoader = false;
    },
    [assignTeamsToDriver.pending]: (state) => {
      state.isLoader = true;
    },
    [assignTeamsToDriver.fulfilled]: (state, action) => {
      state.isLoader = false;
    },
    [assignTeamsToDriver.rejected]: (state) => {
      state.isLoader = false;
    },
    [deleteAgents.pending]: (state) => {
      state.isLoader = true;
    },
    [deleteAgents.fulfilled]: (state, action) => {
      state.isLoader = false;
    },
    [deleteAgents.rejected]: (state) => {
      state.isLoader = false;
    },
    [getChangeState.pending]: (state) => {
      state.isLoader = true;
    },
    [getChangeState.fulfilled]: (state, action) => {
      state.isLoader = false;
    },
    [getChangeState.rejected]: (state) => {
      state.isLoader = false;
    },
  },
});
export const {
  openAgentAddModal,
  closeAgentAddModal,
  openConfirmationModal,
  closeConfirmationModal,
  setDeleteId,
  setCurrentSTs,
  openAssignDriverModel,
  closeAssignDriverModel,
  setDriverId,
  setCurrentAgentPage
} = agentSlice.actions;
export default agentSlice.reducer;
