import {
  CButton,
  CForm,
  CFormInput,
  CHeader,
  CModal,
  CModalBody,
  CModalContent,
  CModalFooter,
  CModalTitle,
} from "@coreui/react";
import { Formik, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import * as Yup from "yup";
import {
  closeImportModal,
  importCustomerCSVFile,
  setErrorMessageHide,
} from "src/features/customer/CustomerSlice";
import { ImportCustomerSchema } from "src/validateSchema/Schema";
import { useEffect, useState } from "react";
const ImportModel = () => {
  const { isImportModalOpen, errorMessage, errorMessageHide } = useSelector(
    (state) => state.users
  );
const [errorMessageModal,setErrorMessageModal] = useState(true)

  const dispatch = useDispatch();

  const { values, handleSubmit, errors, touched, setFieldValue, resetForm } =
    useFormik({
      initialValues: {
        file: "",
      },
      validationSchema: ImportCustomerSchema,
      onSubmit: (data, action) => {
        dispatch(importCustomerCSVFile(data));
        action.resetForm();
      },
    });
  const closeImpModal = () => {
    dispatch(closeImportModal());
    dispatch(setErrorMessageHide(false))
    resetForm();
  };
  return (
    <CModal alignment="center" visible={isImportModalOpen}>
      <CHeader className="rounded-top">
        <CModalTitle>Import Customer</CModalTitle>
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
          <CButton color="info" className="text-white" type="submit">
            Import CSV
          </CButton>
        </CModalFooter>
      </CForm>
    </CModal>
  );
};

export default ImportModel;
