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
import { ImCross } from "react-icons/im";
import * as Yup from "yup";
import { addCustomer, closeModal } from "src/features/customer/CustomerSlice";
import PhoneInput from "react-phone-number-input";
import Spinner from "src/spinner/Spinner";
import { AddCustomerSchema } from "src/validateSchema/Schema";

const Add = () => {
  const { isModalOpen, isLoader } = useSelector((state) => state.users);
  const dispatch = useDispatch();


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
    enableReinitialize: true,
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      image: "",
    },
    validationSchema: AddCustomerSchema,
    onSubmit: (data, action) => {
      dispatch(addCustomer({ data, action }));
      // action.resetForm()
    },
  });

  const handlCloseModel = () => {
    dispatch(closeModal());
    resetForm();
  };
  return (
    <CModal size="lg" visible={isModalOpen}>
      {isLoader ? <Spinner className="modal-spinner" /> : null}
      <CHeader className="rounded-top">
        <CModalTitle className="">Add Customer</CModalTitle>
        <ImCross
          onClick={handlCloseModel}
          className="text-danger cursor fs-5 me-2"
        />
      </CHeader>
      <CModalBody className="d-flex w-100">
        <CForm className="row g-3" onSubmit={handleSubmit}>
          <CCol md={12}>
            <CRow>
              <CCol md={6} className="">
                <CFormLabel htmlFor="logo">
                  Image
                  <CFormInput
                    type="file"
                    name="image"
                    accept=".png, .jpg, .jpeg"
                    className="CFormInput-customer"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      setFieldValue("image", e.currentTarget.files[0]);
                    }}
                  />
                  <div className="error-container">
                    {touched.image && errors.image ? (
                      <span className="validtion-error">{errors.image}</span>
                    ) : null}
                  </div>
                </CFormLabel>
              </CCol>
            </CRow>
          </CCol>
          <CCol md={6} className="position-relative">
            <label className="" htmlFor="validationServer01">
              First Name<span className="text-danger">*</span>
            </label>
            <CFormInput
              type="text"
              id="validationServer01"
              name="first_name"
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
            {/* <CFormInput
              type="phone"
              id="validationServer03"
              name="mobile"
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
            /> */}
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
          <CCol sm={12} className="d-flex justify-content-center">
            <CButton type="submit" color="info" className="w-25 text-light">
              Submit
            </CButton>
          </CCol>
        </CForm>
      </CModalBody>
    </CModal>
  );
};

export default Add;
