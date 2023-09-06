import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CHeader,
  CModal,
  CModalBody,
  CModalTitle,
  CRow,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";

import { useFormik } from "formik";
import * as Yup from "yup";
import { ImCross } from "react-icons/im";
import Switch from "@mui/material/Switch";
import {
  addMobileBanner,
  closeAddModal,
  updateMobileBanner,
} from "src/features/mobileBanner/MobileBannerSlice";
import { useEffect, useState } from "react";
import Spinner from "src/spinner/Spinner";
import { FILE_SIZE } from "src/utils/HandlerCommonFile";
import { AddMobileBanner } from "src/validateSchema/Schema";
const Add = () => {
  const { addModal, isLoader, toggleStatus, prefieldValue } = useSelector(
    (state) => state.mobileBanner
  );
  const [startDateValue, setStateDateValue] = useState("");
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeAddModal());
    resetForm();
  };

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      startDate: "",
      endDate: "",
      bannerImages: "",
      assignTo: "abcd",
    },
    enableReinitialize: true,
    validationSchema: AddMobileBanner,
    onSubmit: (data,action) => {
      // {
      //   toggleStatus
      //     ? dispatch(addMobileBanner(data))
      //     : dispatch(updateMobileBanner({ data, id: prefieldValue?.id }));
      // }
      dispatch(addMobileBanner({data,action}));
    },
  });
  const disableStartDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const splitdate = startDateValue.split("-");

  const disableEndDate = () => {
    const today = new Date();
    const dd = String(splitdate[2]).padStart(2, "0");
    const mm = String(splitdate[1]).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <CModal size="lg" scrollable alignment="center" visible={addModal}>
      {isLoader ? <Spinner color="primary" className="modal-spinner" /> : null}
      <CHeader className="rounded-top">
        <CModalTitle>Add Mobile Banner</CModalTitle>
        {/* {toggleStatus ? (
          <CModalTitle>Add Mobile Banner</CModalTitle>
        ) : (
          <CModalTitle>Update Mobile Banner</CModalTitle>
        )} */}

        <ImCross
          className="text-danger cursor fs-5 me-2"
          onClick={handleClose}
        />
      </CHeader>
      <CModalBody className="">
        <CForm className="mt-2" onSubmit={handleSubmit}>
          <CRow>
            <CCol md={6}>
              <CCol md={12} className="mt-2 p-0 ">
                <label className="" htmlFor="validationServer01">
                  Upload Mobile Banner Image
                  {toggleStatus ? <span className="text-danger">*</span> : null}
                </label>
                <CFormInput
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  name="bannerImages"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    setFieldValue("bannerImages", e.currentTarget.files[0]);
                  }}
                />
                <div className="error-container">
                  {touched.bannerImages && errors.bannerImages ? (
                    <span className="validtion-error">
                      {errors.bannerImages}
                    </span>
                  ) : null}
                </div>
              </CCol>
            </CCol>
            <CCol md={6} className="mt-2">
              <label className="" htmlFor="validationServer01">
                Name<span className="text-danger">*</span>
              </label>
              <CFormInput
                type="text"
                name="name"
                maxLength={70}
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <div className="error-container">
                {touched.name && errors.name ? (
                  <span className="validtion-error">{errors.name}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="mt-2">
              <label className="" htmlFor="validationServer01">
                Start Date<span className="text-danger">*</span>
              </label>
              <CFormInput
                type="date"
                name="startDate"
                min={disableStartDate()}
                value={values.startDate}
                onChange={(e) => {
                  setFieldValue("startDate", e.target.value);
                  setStateDateValue(e.target.value);
                }}
                onBlur={handleBlur}
              />
              <div className="error-container">
                {touched.startDate && errors.startDate ? (
                  <span className="validtion-error">{errors.startDate}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="mt-2">
              <label className="" htmlFor="validationServer01">
                End Date<span className="text-danger">*</span>
              </label>
              <CFormInput
                type="date"
                name="endDate"
                min={disableEndDate()}
                value={values.endDate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="error-container">
                {touched.endDate && errors.endDate ? (
                  <span className="validtion-error">{errors.endDate}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={12} className="d-flex justify-content-center">
              {/* {toggleStatus ? (
                <CButton
                  type="submit"
                  color="info"
                  className="w-25 mt-3 text-white"
                >
                  Submit
                </CButton>
              ) : (
                <CButton
                  type="submit"
                  color="info"
                  className="w-25 mt-3 text-white"
                >
                  Update
                </CButton>
              )} */}
              <CButton
                type="submit"
                color="info"
                className="w-25 mt-3 text-white"
              >
                Submit
              </CButton>
            </CCol>
          </CRow>
        </CForm>
      </CModalBody>
    </CModal>
  );
};

export default Add;
