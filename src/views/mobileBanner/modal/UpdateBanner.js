import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CHeader,
  CImage,
  CModal,
  CModalBody,
  CModalTitle,
  CRow,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";

import { useFormik } from "formik";
import { ImCross } from "react-icons/im";

import {
  closeUpdateModal,
  updateMobileBanner,
} from "src/features/mobileBanner/MobileBannerSlice";
import { useEffect, useState } from "react";
import Spinner from "src/spinner/Spinner";
import { FILE_SIZE } from "src/utils/HandlerCommonFile";
import { UpdateMobileBanner } from "src/validateSchema/Schema";

const UpdateBanner = () => {
  const { updateModal, isLoader, prefieldValue } = useSelector(
    (state) => state.mobileBanner
  );
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [bannerUploadImage, setBannerUploadImage] = useState();
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeUpdateModal());
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
      name: prefieldValue?.name ? prefieldValue?.name : "",
      startDate: prefieldValue?.startDate ? prefieldValue?.startDate : "",
      endDate: prefieldValue?.endDate ? prefieldValue?.endDate : "",
      bannerImages: "",
      assignTo: "abcd",
    },
    enableReinitialize: true,
    validationSchema: UpdateMobileBanner,
    onSubmit: (data) => {
      dispatch(updateMobileBanner({ data, id: prefieldValue?.id }));
    },
  });

  

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    setFieldValue("startDate", event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
    setFieldValue("endDate", event.target.value);
  };
    const disableStartDate = () => {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const yyyy = today.getFullYear();
      return yyyy + "-" + mm + "-" + dd;
    };


  return (
    <CModal size="lg" scrollable alignment="center" visible={updateModal}>
      {isLoader ? <Spinner color="primary" className="modal-spinner" /> : null}
      <CHeader className="rounded-top">
        <CModalTitle>Update Mobile Banner</CModalTitle>
        <ImCross className="text-danger fs-5 me-2" onClick={handleClose} />
      </CHeader>
      <CModalBody className="">
        <CForm className="mt-2" onSubmit={handleSubmit}>
          <CRow>
            <CCol md={6}>
              {prefieldValue && (
                <CImage
                  src={
                    bannerUploadImage
                      ? bannerUploadImage
                      : `https://delivery-app.softprodigyphp.in/upload/${prefieldValue?.bannerImages[0]?.filename}`
                  }
                  alt="bannerImage"
                  width={350}
                  height={280}
                  className="ms-4 mt-2"
                />
              )}
            </CCol>
            <CCol md={6}>
              <CCol md={12}>
                <CCol md={12} className="p-0 ">
                  <label className="" htmlFor="validationServer01">
                    Upload Mobile Banner Image
                  </label>
                  <CFormInput
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    name="bannerImages"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      setBannerUploadImage(
                        URL.createObjectURL(e.target.files[0])
                      );
                      setFieldValue("bannerImages", e.currentTarget.files[0]);
                    }}
                  />{" "}
                  <div className="error-container">
                    {touched.bannerImages && errors.bannerImages ? (
                      <span className="validtion-error">
                        {errors.bannerImages}
                      </span>
                    ) : null}
                  </div>
                </CCol>
              </CCol>
              <CCol md={12} className="mt-2">
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
                />{" "}
                <div className="error-container">
                  {touched.name && errors.name ? (
                    <span className="validtion-error">{errors.name}</span>
                  ) : null}
                </div>
              </CCol>
              <CCol md={12} className="mt-2">
                <label className="" htmlFor="validationServer01">
                  Start Date<span className="text-danger">*</span>
                </label>
                <CFormInput
                  type="date"
                  id="start-date"
                  value={startDate || values.startDate}
                  onChange={handleStartDateChange}
                  min={disableStartDate()}
                />{" "}
                <div className="error-container">
                  {touched.startDate && errors.startDate ? (
                    <span className="validtion-error">{errors.startDate}</span>
                  ) : null}
                </div>
              </CCol>
              <CCol md={12} className="mt-2">
                <label className="" htmlFor="validationServer01">
                  End Date<span className="text-danger">*</span>
                </label>
                <CFormInput
                  type="date"
                  id="end-date"
                  value={endDate || values.endDate}
                  onChange={handleEndDateChange}
                  min={startDate}
                />{" "}
                <div className="error-container">
                  {touched.endDate && errors.endDate ? (
                    <span className="validtion-error">{errors.endDate}</span>
                  ) : null}
                </div>
              </CCol>
            </CCol>

            <CCol md={12} className="d-flex justify-content-center">
              <CButton
                type="submit"
                color="info"
                className="w-25 mt-3 text-white"
              >
                Update
              </CButton>
            </CCol>
          </CRow>
        </CForm>
      </CModalBody>
    </CModal>
  );
};

export default UpdateBanner;
