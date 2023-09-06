import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authHeader } from "src/utils/authHeader";
import  customFetch from "src/utils/axiosGet";

export const getPromo = createAsyncThunk("promo/getPromo", async (_,thunkAPI) => {
  try {
    const res = await customFetch.get(`/get_promo`,authHeader());
    return res.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.message);
  }
});
export const deletePromoCodes = createAsyncThunk(
  "promo/deletePromocode",
  async (id, thunkAPI) => {
    try {
      const res = await customFetch.delete(`/delete_promo/${id}`,authHeader());
      thunkAPI.dispatch(getPromo(id));
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.Error);
      thunkAPI.rejectWithValue(error.response.data.Error)

    }
  }
);

export const addPromoCodes = createAsyncThunk(
  "promo/deletePromocode",
  async (data, thunkAPI) => {
    try {
      const res = await customFetch.post(`/add_promo`, { ...data },authHeader());
      thunkAPI.dispatch(getPromo());
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.Error);
      thunkAPI.rejectWithValue(error.response.data.Error)

    }
  }
);

export const editPromo = createAsyncThunk(
  "promo/editPromo",
  async (data, thunkAPI) => {
    try {
      const res = await customFetch.put(
        `/update_promo/${data.editId}`,
        data.data,authHeader()
      );
      thunkAPI.dispatch(getPromo(data));
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.Error);
      thunkAPI.rejectWithValue(error.response.data.Error)

    }
  }
);



const initialState = {
  promos: [],
  status: null,
  promoCodeError: "",
  isModalOpen: false,
  toggleState: true,
  editId: null,
  submitStatus: null,
  initialValue: null,
  deleteId:null,
  isOpenConfirmMessage:false,
  isLoader:false
};

const PromoSlice = createSlice({
  name: "promo",
  initialState,
  reducers: {
    deletePromocode: (state, action) => {
      const itemId = action.payload;
      state.promos = state.promos.filter((item) => item.id !== itemId);
    },
    addPromocode: (state, action) => {
      state.promos.push(action.payload);
    },
    editPromocode: (state, action) => {
      state.promos = action.payload;
    },
    openModal: (state, action) => {
      state.isModalOpen = true;
    },
    closeModal: (state, action) => {
      state.isModalOpen = false;
    },
    openEditModel: (state, action) => {
      state.isModalOpen = true;
    },
    setTogglePromo: (state, action) => {
      state.toggleState = false;
    },
    setToggleFalse: (state, action) => {
      state.toggleState = true;
    },
    editIds: (state, action) => {
      state.editId = action.payload;
    },
    setPrimaryStatus: (state, action) => {
      state.submitStatus = "primary";
    },
    setSecondaryStatus: (state, action) => {
      state.submitStatus = "secondary";
    },
    setInitialValue: (state, action) => {

      state.initialValue = action.payload;
    },
    setDeleteId:(state,action)=>{
      state.deleteId=action.payload
    },
    OpenConfirmMessage:(state,action)=>{
      state.isOpenConfirmMessage=true
    },
    closeConfirmMessage:(state)=>{
      state.isOpenConfirmMessage=false
    }
  },
  extraReducers: {
    [getPromo.pending]: (state, action) => {
      state.status = "loading";
      state.isLoader=true
    },
    [getPromo.fulfilled]: (state, action) => {
      state.status = "success";
      state.promos = action.payload;
      state.isLoader=false
    },
    [getPromo.rejected]: (state, { payload }) => {
      state.status = "error";
      state.isLoader=false
    },
    [addPromoCodes.pending]: (state, action) => {
      state.status = "loading";
      state.isLoader=true
    },
    [addPromoCodes.fulfilled]: (state, action) => {
      state.status = "success";
      state.promos = action.payload;
      state.isModalOpen = false;
      state.isLoader=false
    },
    [addPromoCodes.rejected]: (state, { payload }) => {
      state.status = "error";
      state.isLoader=false
    },
    [editPromo.pending]: (state, action) => {
      state.status = "loading";
      state.isLoader=true
    },
    [editPromo.fulfilled]: (state, action) => {
      state.isModalOpen = false;
      state.isLoader=false
    },
  },
});

export const {
  openModal,
  closeModal,
  editPromocode,
  openEditModel,
  setTogglePromo,
  setToggleFalse,
  editIds,
  setValidated,
  setPrimaryStatus,
  setSecondaryStatus,
  setInitialValue,
  setPreFieldValue,
  setDeleteId,
  OpenConfirmMessage,
  closeConfirmMessage
} = PromoSlice.actions;
export default PromoSlice.reducer;
