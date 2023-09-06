import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authHeader } from "src/utils/authHeader";
import   customFetch from "src/utils/axiosGet";


export const getMerchant = createAsyncThunk(
  "merchant/getMerchant",
  async (status, thunkAPI) => {
    try {
      const res = await customFetch.get(`/merchant?${status.status}`,authHeader());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.Error);
    }
  }
);

export const deleteMerchants = createAsyncThunk(
  "merchant/deleteMerchants",
  async (data, thunkAPI) => {
    try {
      const res = await customFetch.delete(
        `/merchant/${data.deleteId}?${data.currentStatus}`,authHeader()
      );
      thunkAPI.dispatch(getMerchant({status:data.currentStatus}));
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.Error);
      return thunkAPI.rejectWithValue(error.response.data.Error);
    }
  }
);

export const searchMerchant = createAsyncThunk(
  "merchant/searchMerchant",
  async (data, thunkAPI) => {
    try {
      const res = await customFetch.get(
        `/searchMerchant?${data.currentStatus.status}&name=${data.search}`,authHeader()
      );
      thunkAPI.dispatch(getMerchant())
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.Error);

    }
  }
);

export const blockMerchant = createAsyncThunk(
  "block/blockMerchant",
  async (id, thunkAPI) => {
    try {
      const res = await customFetch.patch(`/merchant/block/${id.id}`,id,authHeader());
      thunkAPI.dispatch(getMerchant(id));
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.Error);
      return thunkAPI.rejectWithValue(error.response.data.Error);
    }
  }
);

export const activeMerchant = createAsyncThunk(
  "active/activeMerchant",
  async (id, thunkAPI) => {

    try {
      const res = await customFetch.patch(`/merchant/approve/${id.id}`,id,authHeader());
      thunkAPI.dispatch(getMerchant(id));
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.Error);
      return thunkAPI.rejectWithValue(error.response.data.Error);

    }
  }
);

export const unBlockMerchant = createAsyncThunk("unBlock/unBlockMerchant",async(id,thunkAPI)=>{
  try{
    const res = await customFetch.patch(`/merchant/unblock/${id.id}`,id,authHeader())
    thunkAPI.dispatch(getMerchant(id))
    toast.success(res.data.message)
  }catch(error){
    toast.error(error.response.data.Error);
    return thunkAPI.rejectWithValue(error.response.data.Error);
  }
})

export const addMerchants = createAsyncThunk(
  "merchant/addMerchant",
  async (data, thunkAPI) => {
    let fData = new FormData();
    fData.append("first_name", data.data.first_name);
    fData.append("last_name", data.data.last_name);
    fData.append("email", data.data.email);
    fData.append("mobile", data.data.mobile);
    fData.append("website", data.data.website);
    fData.append("pincode", data.data.pincode);
    fData.append("address", data.data.address);
    fData.append("state", data.data.state);
    fData.append("district", data.data.district);
    fData.append("country", data.data.country);
    fData.append("logo",data.data.logo)
    fData.append("bannerImage",data.data.bannerImage)
    try {
      const res = await customFetch.post("/merchant",fData,authHeader());
      thunkAPI.dispatch(getMerchant({status:data.status.status}));
      toast.success(res.data.message);
      data.action.resetForm()
      return res.data;
    } catch (error) {
      toast.error(error.response.data.Error);
      return thunkAPI.rejectWithValue(error.response.data.Error);
    }
  }
);


export const importCSVFile = createAsyncThunk("importCSV/importCSVFile",async(data,thunkAPI)=>{
  console.log(data)
  try{
    let fData = new FormData();
    fData.append("file", data.data.file);
    const res = await customFetch.post("/import_merchant",fData,authHeader())
      toast.success(res.data.message);
      thunkAPI.dispatch(getMerchant({status:data.currentStatus.status}));
      toast.error(res.data.note);
      thunkAPI.dispatch(closeImportModal());
      thunkAPI.dispatch(setErrorMessageHide())
      return res.data
  }catch(error){
    // toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
})

export const getCoutryList = createAsyncThunk("country/getCountryList",async(_,thunkAPI)=>{
try{
  const res = await customFetch.get("/get/countries")
  return res.data
}catch(error){
  thunkAPI.rejectWithValue(error.response.data.message)
}
}) 

export const getStateList = createAsyncThunk("state/getStateList",async(id,thunkAPI)=>{
  try{
    const res = await customFetch.get(`/get/states/${id}`)
    return res.data
  }catch(error){
    thunkAPI.rejectWithValue(error.response.data.message)
  }
  }) 

  export const getCitiesList = createAsyncThunk("cities/getCitiesList",async(id,thunkAPI)=>{
    try{
      const res = await customFetch.get(`/get/cities/${id}`)
      return res.data
    }catch(error){
      thunkAPI.rejectWithValue(error.response.data.message)
    }
    }) 

const initialState = {
  merchant: [],
  countryList:[],
  stateList:[],
  cityList:[],
  status: null,
  isModalOpen: false,
  isOpenImportModal: false,
  currentStatus: null,
  page: 1,
  logos:null,
  bannerImages:null,
  isLoader:false,
  confirmMessage:false,
  deleteId:null,
  checkError:false,
  currentMerchantPage:null,
  errorMessage:null,
  errorMessageHide:false,
};

const merchantSlice = createSlice({
  name: "merchant",
  initialState,
  reducers: {
    deleteMerchant: (state, action) => {
      const itemId = action.payload;
      state.merchant = state.merchant.filter((item) => item.id !== itemId);
    },
    openModal: (state, action) => {
      state.isModalOpen = true;
    },
    closeModal: (state, action) => {
      state.isModalOpen = false;
    },
    openImportModal: (state, action) => {
      state.isOpenImportModal = true;
    },
    closeImportModal: (state, action) => {
      state.isOpenImportModal = false;
    },
    setCurrentStatus: (state, action) => {

      state.currentStatus = action.payload;
    },
    nextPage: (state, action) => {
      state.page = action.payload
    },
    prevPage: (state, action) => {
      state.page = action.payload
    },
    setLogo:(state,action)=>{
      state.logos= action.payload
    },
    setBannerImage:(state,action)=>{

      state.bannerImages= action.payload
    },
    openConfirmModal: (state, action) => {
      state.confirmMessage = true;
    },
    closeConfirmModal: (state, action) => {
      state.confirmMessage = false;
    },
    merchantDeleteId:(state,action)=>{
      state.deleteId= action.payload
    },
    setCurrentMerchantPage:(state,action)=>{
      state.currentMerchantPage=action.payload
    },
    setErrorMessageHide:(state,action)=>{
      state.errorMessageHide=false
    }
  },
  extraReducers: {
    [getMerchant.pending]: (state, action) => {
      state.status = "loading";
      state.isLoader=true
    },
    [getMerchant.fulfilled]: (state, action) => {
      state.status = "success";
      state.merchant = action.payload;
      state.isLoader=false
    },
    [getMerchant.rejected]: (state, action) => {
      state.status = "error";
      state.isLoader=false
    },
    [searchMerchant.pending]: (state, action) => {
      state.status = "loading";
    },
    [searchMerchant.fulfilled]: (state, action) => {
      state.merchant = action.payload;
    },
    [searchMerchant.rejected]: (state, action) => {
      state.status = "error";
    },
    [addMerchants.pending]: (state, action) => {
      state.status = "loading";
      state.isLoader=true
      // state.checkError=false
    },
    [addMerchants.fulfilled]: (state, action) => {
      state.status = "success";
      state.merchant = action.payload;
      state.isLoader=false
      state.checkError=true
    },
    [addMerchants.rejected]: (state, action) => {
      state.status = "error";
      state.isLoader=false
      // state.checkError=false
    },
    [importCSVFile.pending]: (state, action) => {
      state.status = "loading";
      state.isLoader=true
    },
    [importCSVFile.fulfilled]: (state, action) => {
      state.status = "success";
      state.isLoader=false

    },
    [importCSVFile.rejected]: (state, action) => {
      state.status = "error";
      state.isLoader=false
      state.errorMessage=action.payload
      state.errorMessageHide=true
    },
    [getCoutryList.pending]:(state)=>{
      state.status="loading"
    },
    [getCoutryList.fulfilled]:(state,action)=>{
      state.status="success"
      state.countryList=action.payload
    },
    [getCoutryList.rejected]:(state)=>{
      state.status="error"
    },
    [getStateList.pending]:(state)=>{
      state.status="loading"
    },
    [getStateList.fulfilled]:(state,action)=>{
      state.status="success"
      state.stateList=action.payload
    },
    [getStateList.rejected]:(state)=>{
      state.status="error"
    },
    [getCitiesList.pending]:(state)=>{
      state.status="loading"
    },
    [getCitiesList.fulfilled]:(state,action)=>{
      state.status="success"
      state.cityList=action.payload
    },
    [getCitiesList.rejected]:(state)=>{
      state.status="error"
    },
  },
});

export const {
  openModal,
  closeModal,
  openImportModal,
  closeImportModal,
  deleteMerchant,
  setCurrentStatus,
  setClicked,
  nextPage,
  prevPage,
  setBannerImage,
  setLogo,
  openConfirmModal,
  closeConfirmModal,
  merchantDeleteId,
  setCurrentMerchantPage,
  setErrorMessageHide
} = merchantSlice.actions;
export default merchantSlice.reducer;
