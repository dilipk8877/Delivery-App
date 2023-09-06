import {
  CButton,
  CCard,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  getManagerById,
  getPermission,
  updateSub_admin,
} from "src/features/manageManager/ManagerSlice";
import { useNavigate, useParams } from "react-router-dom";
import SwitchToggle from "./SwitchToggle";
import Switch from "@mui/material/Switch";
import Spinner from "src/spinner/Spinner";
const UpdateManager = () => {
  const { permission, isLoader, managerById } = useSelector(
    (state) => state.manager
  );
  const partitionValue = Math.ceil(permission?.permission?.length / 2);

  const [perm, setPermission] = useState([]);
  const [check, setCheck] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManagerById(id));
    dispatch(getPermission());
  }, []);
console.log(perm)

// let unique = perm.filter((item, i, ar) => ar.indexOf(item) === i);
// console.log("unique",unique)
  const { values, handleSubmit, setFieldValue, errors, touched } = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: managerById?.users?.first_name
        ? managerById?.users?.first_name
        : "",
      last_name: managerById?.users?.last_name
        ? managerById?.users?.last_name
        : "",
      email: managerById?.users?.email ? managerById?.users?.email : "",
      mobile: managerById?.users?.mobile ? managerById?.users?.mobile : "",
      status: managerById?.admins ? managerById?.admins : "",
      entity_type:[],
    },
    onSubmit: (data, { resetForm }) => {
      dispatch(updateSub_admin({ id, data }));
      navigate("/dispatcher/manageManager");
      resetForm({ data: "" });
    },
  });

  const options = [
    { value: "active", label: "Active" },
    { value: "inActive", label: "InActive" },
  ];
  const getPermissionMatch = (id) => {
    const temp = managerById?.entities?.filter((item) => item.id === id);
    return temp?.length > 0 ? true : false;
  };

  return (
    <CCard className="mb-4">
      {isLoader ? <Spinner color="primary" className="modal-spinner" /> : null}
      <CForm className="p-3" onSubmit={handleSubmit}>
        <CRow>
          <CCol md={6} className="mt-3">
            <label className="" htmlFor="validationServer01">
              First Name
            </label>
            <CFormInput
              type="text"
              name="first_name"
              value={values.first_name}
              disabled={true}
            />
          </CCol>
          <CCol md={6} className="mt-3">
            <label className="" htmlFor="validationServer01">
              Last Name
            </label>
            <CFormInput
              type="text"
              name="last_name"
              value={values.last_name}
              disabled={true}
            />
          </CCol>
          <CCol md={6} className="mt-3">
            <label className="" htmlFor="validationServer01">
              Email
            </label>
            <CFormInput
              type="text"
              name="email"
              value={values.email}
              disabled={true}
            />
          </CCol>
          <CCol md={6} className="mt-3">
            <label className="" htmlFor="validationServer01">
              Phone Number
            </label>
            <CFormInput
              type="text"
              name="mobile"
              value={values.mobile}
              disabled={true}
            />
          </CCol>
          <CCol md={6} className="mt-3">
            <label className="" htmlFor="validationServer01">
              Status<span className="text-danger">*</span>
            </label>
            <Select
              options={options}
              value={options.find((option) => option.value === values.status)}
              onChange={(option) => setFieldValue("status", option.value)}
            />{" "}
            <div className="error-container">
              {touched.status && errors.status ? (
                <span className="validtion-error">{errors.status}</span>
              ) : null}
            </div>
          </CCol>
          <CCol md={12} className="mt-4">
            <CRow>
              <CCol md={6}>
                <CRow className="d-flex align-items-center">
                  <CCol md={9} className="addmanager-status">
                    Permission
                  </CCol>
                  <CCol md={3} className="addmanager-status">
                    Status
                  </CCol>
                  {permission?.permission
                    ?.slice(0, partitionValue)
                    .map((list, index) => {
                      return (
                        <CRow key={index} className="d-flex align-items-center">
                          <CCol md={1} className="fs-3">
                            •
                          </CCol>
                          <CCol md={8}>{list.entity_name}</CCol>
                          <CCol md={3}>
                            <SwitchToggle
                              isChecked={getPermissionMatch(list.id)}
                              setPermission={setPermission}
                              id={list.id}
                            />
                          </CCol>
                        </CRow>
                      );
                    })}
                </CRow>
              </CCol>
              <CCol md={6}>
                <CRow className="d-flex align-items-center">
                  <CCol md={9} className="addmanager-status">
                    Permission
                  </CCol>
                  <CCol md={3} className="addmanager-status">
                    Status
                  </CCol>
                  {permission?.permission
                    ?.slice(partitionValue)
                    .map((list, index) => {
                      return (
                        <CRow key={index} className="d-flex align-items-center">
                          <CCol md={1} className="fs-3">
                            •
                          </CCol>
                          <CCol md={8}>{list.entity_name}</CCol>
                          <CCol md={3}>
                            <SwitchToggle
                              isChecked={getPermissionMatch(list.id)}
                              setPermission={setPermission}
                              id={list.id}
                            />
                          </CCol>
                        </CRow>
                      );
                    })}
                </CRow>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
        <CRow>
          <CCol md={7} className="d-flex justify-content-end mt-4">
            <CButton
              type="submit"
              color="info"
              className="w-25 text-light"
              onClick={() => {
                setFieldValue("entity_type", perm);
              }}
            >
              Update
            </CButton>
          </CCol>
        </CRow>
      </CForm>
    </CCard>
  );
};

export default UpdateManager;
