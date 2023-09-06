import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CHeader,
  CModal,
  CModalBody,
  CModalTitle,
  CRow,
} from "@coreui/react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  addMerchants,
  closeModal,
  emptyCities,
  emptyState,
  getCitiesList,
  getCoutryList,
  getStateList,
} from "src/features/Merchants/merchantSlice";
import { ImCross } from "react-icons/im";
import * as Yup from "yup";
import Spinner from "src/spinner/Spinner";
import { useEffect, useState } from "react";
import Select from "react-select";
import { useLocation } from "react-router-dom";
import { FILE_SIZE } from "src/utils/HandlerCommonFile";
import PhoneInput from "react-phone-number-input";
import { AddMerchantSchema } from "src/validateSchema/Schema";
const Add = () => {
  const {
    isModalOpen,
    page,
    isLoader,
    countryList,
    stateList,
    cityList,
    currentStatus,
  } = useSelector((state) => state.merchants);

  const dispatch = useDispatch();

  const countryArray = [];
  const data = countryList?.countryList;
  data?.forEach((item) => {
    countryArray.push({
      value: `${item.sortname}`,
      label: `${item.name}`,
      value: item.id,
    });
  });

  const stateArray = [];
  const stateData = stateList?.stateList;
  stateData?.forEach((item) => {
    stateArray.push({
      label: `${item.name}`,
      value: item.id,
    });
  });

  const citiesArray = [];
  const citiesData = cityList?.citiesList;
  citiesData?.forEach((item) => {
    citiesArray.push({
      label: `${item.name}`,
      value: item.id,
    });
  });

  useEffect(() => {
    dispatch(getCoutryList());
  }, []);

  const [urlPath, setUrlPath] = useState();
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    const splitLocation = pathname?.split("/");
    if (splitLocation[2] === "actives") {
      setUrlPath("isActive=1");
    } else if (splitLocation[2] === "awaiting") {
      setUrlPath("isAwaiting=0");
    } else if (splitLocation[1] === "blocked") {
      setUrlPath("isBlocked=1");
    }
  }, [pathname]);

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      website: "",
      pincode: "",
      address: "",
      state: "",
      district: "",
      country: "",
      logo: "",
      bannerImage: "",
    },
    validationSchema: AddMerchantSchema,
    onSubmit: (data, action) => {
      dispatch(addMerchants({ data, page, status: currentStatus, action }))
        .unwrap()
        .then(() => dispatch(closeModal()));
    },
  });

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    dispatch(getStateList(101))
    setFieldValue("country", selectedOption?.label)
    setSelectedState(null);
    setSelectedCity(null);
  };
  
  
  const handleStateChange = (selectedOption) => {
    dispatch(getCitiesList(selectedOption?.value))
    setFieldValue("state", selectedOption?.label)
    setSelectedState(selectedOption);
    setSelectedCity(null);
  };
  
  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
    setFieldValue("district", selectedOption?.label)
  };


  const handlCloseModel = () => {
    dispatch(closeModal());
    resetForm();
    setSelectedCountry(null)
    setSelectedState(null);
    setSelectedCity(null);
  };
  return (
    <>
      <CModal size="lg" visible={isModalOpen}>
        {isLoader ? (
          <Spinner color="primary" className="modal-spinner" />
        ) : null}

        <CHeader className="rounded-top">
          <CModalTitle>Add Merchant</CModalTitle>
          <ImCross
            onClick={handlCloseModel}
            className="text-danger cursor fs-5 me-2"
          />
        </CHeader>
        <CModalBody className="d-flex w-100">
          <CForm className="row g-3" onSubmit={handleSubmit}>
            <CCol md={6}>
              <label htmlFor="validationServer01">Logo</label>
              <CFormInput
                type="file"
                name="logo"
                accept=".png, .jpg, .jpeg"
                onBlur={handleBlur}
                onChange={(e) => {
                  setFieldValue("logo", e.currentTarget.files[0]);
                }}
              />
              <div className="error-container">
                {touched.logo && errors.logo ? (
                  <span className="validtion-error">{errors.logo}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6}>
              <label htmlFor="validationServer01">Banner</label>
              <CFormInput
                type="file"
                name="bannerImage"
                accept=".png, .jpg, .jpeg"
                onBlur={handleBlur}
                onChange={(e) => {
                  setFieldValue("bannerImage", e.currentTarget.files[0]);
                }}
              />
              <div className="error-container">
                {touched.bannerImage && errors.bannerImage ? (
                  <span className="validtion-error">{errors.bannerImage}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="position-relative">
              <label className="" htmlFor="validationServer01">
                First Name<span className="text-danger">*</span>
              </label>
              <CFormInput
                type="text"
                id="validationServer01"
                name="first_name"
                accept=""
                maxLength={30}
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="error-container">
                {touched.first_name && errors.first_name ? (
                  <span className="validtion-error">{errors.first_name}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="position-relative">
              <label className="" htmlFor="validationServer01">
                Last Name<span className="text-danger">*</span>
              </label>
              <CFormInput
                type="text"
                id="validationServer01"
                name="last_name"
                maxLength={30}
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="error-container">
                {touched.last_name && errors.last_name ? (
                  <span className="validtion-error">{errors.last_name}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="position-relative">
              <label className="" htmlFor="validationServer02">
                Email<span className="text-danger">*</span>
              </label>
              <CFormInput
                type="text"
                id="validationServer02"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="error-container">
                {touched.email && errors.email ? (
                  <span className="validtion-error">{errors.email}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="position-relative">
              <label className="" htmlFor="validationServer03">
                Phone Number<span className="text-danger">*</span>
              </label>
              <PhoneInput
                international
                defaultCountry="IN"
                id="validationServer03"
                name="mobile"
                value={values.mobile}
                onChange={(value) => setFieldValue("mobile", value)}
                onBlur={handleBlur}
              />
              <div className="error-container">
                {touched.mobile && errors.mobile ? (
                  <span className="validtion-error">{errors.mobile}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="position-relative">
              <label className="" htmlFor="validationServer05">
                Website<span className="text-danger">*</span>
              </label>
              <CFormInput
                type="text"
                id="validationServer05"
                name="website"
                maxLength={70}
                value={values.website}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="error-container">
                {touched.website && errors.website ? (
                  <span className="validtion-error">{errors.website}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="position-relative">
              <label className="" htmlFor="validationServer05">
                Country<span className="text-danger">*</span>
              </label>
              <Select
                className="assignDriver-dropdown w-100"
                classNamePrefix="Select"
                isClearable
                name="color"
                value={selectedCountry}
                onChange={handleCountryChange}
                options={countryArray}
              />
              <div className="error-container">
                {touched.country && errors.country ? (
                  <span className="validtion-error">{errors.country}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="position-relative">
              <label className="" htmlFor="validationServer05">
                State<span className="text-danger">*</span>
              </label>
              <Select
                className="assignDriver-dropdown w-100"
                classNamePrefix="Select"
                isClearable
                name="color"
                value={selectedState}
                onChange={handleStateChange}
                options={stateArray}
                // onBlur={handleBlur}
              />
              <div className="error-container">
                {touched.state && errors.state ? (
                  <span className="validtion-error">{errors.state}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="position-relative">
              <label className="" htmlFor="validationServer05">
                District<span className="text-danger">*</span>
              </label>
              <Select
                className="assignDriver-dropdown w-100"
                classNamePrefix="Select"
                isClearable
                name="color"
                value={selectedCity}
                onChange={handleCityChange}
                options={citiesArray}
              />
              <div className="error-container">
                {touched.district && errors.district ? (
                  <span className="validtion-error">{errors.district}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="position-relative">
              <label className="" htmlFor="validationServer05">
                Address<span className="text-danger">*</span>
              </label>

              <CFormInput
                type="text"
                id="validationServer05"
                name="address"
                maxLength={100}
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="error-container">
                {touched.address && errors.address ? (
                  <span className="validtion-error">{errors.address}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="position-relative">
              <label className="" htmlFor="validationServer05">
                Pincode<span className="text-danger">*</span>
              </label>
              <CFormInput
                type="text"
                id="validationServer05"
                name="pincode"
                value={values.pincode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="error-container">
                {touched.pincode && errors.pincode ? (
                  <span className="validtion-error">{errors.pincode}</span>
                ) : null}
              </div>
            </CCol>
            <CCol sm={12} className="d-flex justify-content-center">
              <CButton type="submit" color="info" className="w-25 text-white">
                Submit
              </CButton>
            </CCol>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
};

export default Add;
