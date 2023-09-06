import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CHeader,
  CModal,
  CModalBody,
  CModalTitle,
} from "@coreui/react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import * as Yup from "yup";
import { closeEditModal, editUsers } from "src/features/customer/CustomerSlice";
import Spinner from "src/spinner/Spinner";
import PhoneInput from "react-phone-number-input";
import { UpdateCustomerSchema } from "src/validateSchema/Schema";
const EditModel = () => {
  const { isEditModalOpen, editUser, isLoader } = useSelector(
    (state) => state.users
  );
  const id = editUser?.id;
  const dispatch = useDispatch();

  const {
    values,
    handleChange,
    resetForm,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
    handleBlur,
  } = useFormik({
    initialValues: {
      first_name: editUser?.first_name ? editUser?.first_name : "",
      last_name: editUser?.last_name ? editUser?.last_name : "",
      mobile: editUser?.mobile ? editUser.mobile : "",
    },
    enableReinitialize: true,
    validationSchema: UpdateCustomerSchema,
    onSubmit: (data, action) => {
      dispatch(editUsers({ data, id }));
      dispatch(closeEditModal());
      action.resetForm();
    },
  });

  const handlCloseModel = () => {
    dispatch(closeEditModal());
    resetForm();
  };
  return (
    <CModal size="lg" visible={isEditModalOpen}>
      {isLoader ? <Spinner color="primary" className="modal-spinner" /> : null}
      <CHeader className="rounded-top">
        <CModalTitle className="">Update Customer</CModalTitle>
        <ImCross
          onClick={handlCloseModel}
          className="text-danger cursor fs-5 me-2"
        />
      </CHeader>
      <CModalBody className="d-flex w-100">
        <CForm className="row g-3" onSubmit={handleSubmit}>
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
              Update
            </CButton>
          </CCol>
        </CForm>
      </CModalBody>
    </CModal>
  );
};

export default EditModel;
