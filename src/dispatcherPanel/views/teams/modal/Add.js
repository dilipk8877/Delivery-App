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
import {
  addTeams,
  closeAddModal,
  setSubmit,
  setTeamUpdatePreValue,
  setUpdate,
  toggleTeamModalTrue,
  updateTeam,
} from "src/features/teams/TeamSlice";
import Spinner from "src/spinner/Spinner";
import { AddTeamSchema } from "src/validateSchema/Schema";
const Add = () => {
  const {
    addModal,
    toggleTeamModal,
    teamUpdatePreValue,
    submitStatus,
    isLoader,
  } = useSelector((state) => state.team);
  const dispatch = useDispatch();

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    setFieldValue,
    resetForm,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      team_name:
        teamUpdatePreValue && teamUpdatePreValue?.team_name
          ? teamUpdatePreValue?.team_name
          : "",
      team_tag:
        teamUpdatePreValue && teamUpdatePreValue?.team_tag
          ? teamUpdatePreValue?.team_tag
          : "",
    },
    validationSchema: AddTeamSchema,
    onSubmit: (data, action) => {
      if (submitStatus === "submit") {
        dispatch(addTeams({ data, action }));
      } else if (submitStatus === "update") {
        dispatch(updateTeam({ data, id: teamUpdatePreValue.id, action }));
        dispatch(toggleTeamModalTrue());
        dispatch(setTeamUpdatePreValue(" "));
      }
    },
  });

  const handlCloseModel = () => {
    dispatch(closeAddModal());
    dispatch(toggleTeamModalTrue());
    dispatch(setTeamUpdatePreValue(" "));
    resetForm();
  };
  return (
    <CModal alignment="center" size="lg" visible={addModal}>
      {isLoader ? <Spinner color="primary" className="modal-spinner" /> : null}
      <CHeader className="rounded-top">
        <CModalTitle className="">Add Teams</CModalTitle>
        <ImCross
          onClick={handlCloseModel}
          className="text-danger cursor fs-5 me-2"
        />
      </CHeader>
      <CModalBody>
        <CForm className=" g-3 " onSubmit={handleSubmit}>
          <CRow className="">
            <CCol md={6} className="position-relative">
              <label className="" htmlFor="validationServer01">
                Team Name<span className="text-danger">*</span>
              </label>
              <CFormInput
                type="text"
                id="validationServer01"
                name="team_name"
                value={values.team_name}
                maxLength={40}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="error-container">
                {touched.team_name && errors.team_name ? (
                  <span className="validtion-error">{errors.team_name}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="position-relative">
              <label className="" htmlFor="validationServer02">
                Team tag<span className="text-danger">*</span>
              </label>
              <CFormInput
                type="text"
                id="validationServer02"
                name="team_tag"
                maxLength={20}
                value={values.team_tag}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="error-container">
                {touched.team_tag && errors.team_tag ? (
                  <span className="validtion-error">{errors.team_tag}</span>
                ) : null}
              </div>
            </CCol>
          </CRow>
          <CCol sm={12} className="d-flex justify-content-center mt-4">
            {toggleTeamModal ? (
              <CButton
                type="submit"
                color="info"
                className="w-25 text-light"
                onClick={() => dispatch(setSubmit())}
              >
                Submit
              </CButton>
            ) : (
              <CButton
                type="submit"
                color="info"
                className="w-25 text-light"
                onClick={() => dispatch(setUpdate())}
              >
                Update
              </CButton>
            )}
          </CCol>
        </CForm>
      </CModalBody>
    </CModal>
  );
};

export default Add;
