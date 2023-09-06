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
import {
  addPromoCodes,
  closeModal,
  editPromo,
  setInitialValue,
  setPrimaryStatus,
  setSecondaryStatus,
  setToggleFalse,
} from "src/features/Promocode/PromocodeSlice";
import { useFormik } from "formik";

import { ImCross } from "react-icons/im";
import Spinner from "src/spinner/Spinner";
import { AddPromocode } from "src/validateSchema/Schema";
const Add = () => {
  const {
    isModalOpen,
    toggleState,
    editId,
    submitStatus,
    initialValue,
    isLoader,
  } = useSelector((state) => state.promo);
  const dispatch = useDispatch();

  const { values,resetForm, handleBlur, handleChange, touched, errors, handleSubmit } =
    useFormik({
      initialValues: {
        Title: initialValue?.Title ? initialValue?.Title : "",
        Description: initialValue?.Description ? initialValue?.Description : "",
        promo_code: initialValue?.promo_code ? initialValue?.promo_code : "",
        Promo_Type: initialValue?.Promo_Type ? initialValue?.Promo_Type : "",
        discount: initialValue?.discount ? initialValue?.discount : "",
        ExpiryDate: initialValue?.ExpiryDate ? initialValue?.ExpiryDate : "",
      },
      enableReinitialize: true,
      validationSchema: AddPromocode,
      onSubmit: (data, { resetForm }) => {
        if (submitStatus === "primary") {
          dispatch(addPromoCodes(data));
        } else if (submitStatus === "secondary") {
          dispatch(editPromo({ data, editId }));
          dispatch(setInitialValue(""));
        }
        resetForm({ data: "" });
      },
    });

  const handleClose = () => {
    dispatch(closeModal());
    dispatch(setToggleFalse());
    dispatch(setInitialValue(""));
    resetForm()
  };

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  return (
    <CModal size="lg" scrollable alignment="center" visible={isModalOpen}>
      {isLoader ? <Spinner color="primary" className="modal-spinner" /> : null}
      <CHeader className="rounded-top">
        {toggleState ? (
          <CModalTitle>Add Promocode</CModalTitle>
        ) : (
          <CModalTitle>Update Promocode</CModalTitle>
        )}
        <ImCross
          className="text-danger cursor fs-5 me-2"
          onClick={handleClose}
        />
      </CHeader>
      <CModalBody className="">
        <CForm className="mt-2" onSubmit={handleSubmit}>
          <CRow>
            <CCol md={6} className="mt-2">
              <label className="" htmlFor="validationServer01">
                Title<span className="text-danger">*</span>
              </label>
              <CFormInput
                type="text"
                id="validationServer01"
                name="Title"
                maxLength={50}
                value={values.Title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="error-container">
                {touched.Title && errors.Title ? (
                  <span className="validtion-error">
                    {errors.Title}
                  </span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="mt-2">
              <label className="" htmlFor="validationServer01">
                Short Description<span className="text-danger">*</span>
              </label>
              <CFormInput
                type="text"
                id="validationServer01"
                value={values.Description}
                maxLength={200}
                onBlur={handleBlur}
                name="Description"
                onChange={handleChange}
              />
              <div className="error-container">
                {touched.Description && errors.Description ? (
                  <span className="validtion-error">
                    {errors.Description}
                  </span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="mt-2">
              <label className="" htmlFor="validationServer01">
                Promocode<span className="text-danger">*</span>
              </label>
              <CFormInput
                type="text"
                id="validationServer01"
                value={values.promo_code}
                maxLength={30}
                onBlur={handleBlur}
                name="promo_code"
                onChange={handleChange}
              />
              <div className="error-container">
                {touched.promo_code && errors.promo_code ? (
                  <span className="validtion-error">
                    {errors.promo_code}
                  </span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="mt-2">
              <label className="" htmlFor="validationServer01">
                Promo Type<span className="text-danger">*</span>
              </label>
              <CFormSelect
                feedbackInvalid="Example invalid select feedback"
                onChange={handleChange}
                value={values.Promo_Type}
                onBlur={handleBlur}
                name="Promo_Type"
              >
                <option>Select Promo Type</option>
                <option value="Percentage">Percentage Discount</option>
              </CFormSelect>
              <div className="error-container">
                {touched.Promo_Type && errors.Promo_Type ? (
                  <span className="validtion-error">
                    {errors.Promo_Type}
                  </span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="mt-2">
              <label className="" htmlFor="validationServer01">
                Discount<span className="text-danger">*</span>
              </label>
              <CFormInput
                type="text"
                id="validationServer01"
                value={values.discount}
                onBlur={handleBlur}
                name="discount"
                onChange={handleChange}
              />
              <div className="error-container">
                {touched.discount && errors.discount ? (
                  <span className="validtion-error">
                    {errors.discount}
                  </span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="mt-2">
              <label className="" htmlFor="validationServer01">
                Expire Date<span className="text-danger">*</span>
              </label>
              <CFormInput
                type="date"
                id="validationServer01"
                min={disablePastDate()}
                value={values.ExpiryDate}
                onBlur={handleBlur}
                name="ExpiryDate"
                onChange={handleChange}
              />
              <div className="error-container">
                {touched.ExpiryDate && errors.ExpiryDate ? (
                  <span className="validtion-error">
                    {errors.ExpiryDate}
                  </span>
                ) : null}
              </div>
            </CCol>

            <CCol md={12} className="d-flex justify-content-center">
              {toggleState ? (
                <CButton
                  type="submit"
                  color="info"
                  className="w-25 mt-3 text-white"
                  onClick={() => dispatch(setPrimaryStatus())}
                >
                  Submit
                </CButton>
              ) : (
                <CButton
                  type="submit"
                  color="info"
                  className="w-25 mt-3 text-white"
                  onClick={() => dispatch(setSecondaryStatus())}
                >
                  Update
                </CButton>
              )}
            </CCol>
          </CRow>
        </CForm>
      </CModalBody>
    </CModal>
  );
};

export default Add;
