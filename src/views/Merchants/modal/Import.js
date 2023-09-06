import {
  CButton,
  CForm,
  CFormInput,
  CHeader,
  CModal,
  CModalBody,
  CModalFooter,
  CModalTitle,
} from "@coreui/react";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeImportModal,
  importCSVFile,
  setErrorMessageHide,
} from "src/features/Merchants/merchantSlice";
import * as Yup from "yup";
import { ImCross } from "react-icons/im";
import { ImportMerchant } from "src/validateSchema/Schema";

const Import = () => {
  const dispatch = useDispatch();
  const { isOpenImportModal, currentStatus, errorMessage, errorMessageHide } =
    useSelector((state) => state.merchants);

  const { values, handleSubmit, errors, touched, setFieldValue, resetForm } =
    useFormik({
      initialValues: {
        file: "",
      },
      validationSchema: ImportMerchant,
      onSubmit: (data, action) => {
        dispatch(importCSVFile({ data, currentStatus }));
        action.resetForm();
      },
    });

  const closeImpModal = () => {
    dispatch(closeImportModal());
    dispatch(setErrorMessageHide());
    resetForm();
  };
  return (
    <CModal alignment="center" visible={isOpenImportModal}>
      <CHeader className="rounded-top">
        <CModalTitle>Import Merchant</CModalTitle>
        <ImCross
          className="text-danger cursor fs-5 me-2"
          onClick={closeImpModal}
        />
      </CHeader>
      <CForm onSubmit={handleSubmit}>
        <CModalBody>
          {errorMessageHide && (
            <CModalTitle className="modalTitle">{errorMessage}</CModalTitle>
          )}
          <CFormInput
            type="file"
            name="file"
            accept=".csv"
            onChange={(e) => {
              setFieldValue("file", e.currentTarget.files[0]);
            }}
          />
          <div className="error-container">
            {touched.file && errors.file ? (
              <span className="validtion-error">{errors.file}</span>
            ) : null}
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeImpModal}>
            Close
          </CButton>
          <CButton color="info" className="text-white " type="submit">
            Import CSV
          </CButton>
        </CModalFooter>
      </CForm>
    </CModal>
  );
};

export default Import;
