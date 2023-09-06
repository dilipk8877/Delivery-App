import { CButton, CCard, CCol, CForm, CFormInput, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import Switch from "@mui/material/Switch";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-number-input";

import {
  addSub_manager,
  getPermission,
} from "src/features/manageManager/ManagerSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "src/spinner/Spinner";
import { AddManagerSchema } from "src/validateSchema/Schema";
const AddManager = () => {
  const { permission, isLoader } = useSelector((state) => state.manager);
  const partitionValue = Math.ceil(permission?.permission?.length / 2);
  const [perm, setPermission] = useState([]);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPermission());
  }, []);


  const permissionHandler = (e) => {
    if(perm.includes(e)===false){
      setPermission((prev) => [...prev, e]);
    }else{
      setPermission((prev) => prev.filter((item) => item!== e));
    }
  };

  const options = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "InActive" },
  ];

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      status: "",
      entity_type: [],
    },
    validationSchema: AddManagerSchema,
    onSubmit: (data, action) => {
      dispatch(addSub_manager({ data, action, navigate }));
    },
  });

  return (
    <CCard className="mb-4">
      {isLoader ? <Spinner color="primary" className="modal-spinner" /> : null}
      <CForm className="p-3" onSubmit={handleSubmit}>
        <CRow>
          <CCol md={6} className="mt-3">
            <label className="" htmlFor="validationServer01">
              First Name<span className="text-danger">*</span>
            </label>
            <CFormInput
              type="text"
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
          <CCol md={6} className="mt-3">
            <label className="" htmlFor="validationServer01">
              Last Name<span className="text-danger">*</span>
            </label>
            <CFormInput
              type="text"
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
          <CCol md={6} className="mt-3">
            <label className="" htmlFor="validationServer01">
              Email<span className="text-danger">*</span>
            </label>
            <CFormInput
              type="text"
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
          <CCol md={6} className="mt-3">
            <label className="" htmlFor="validationServer01">
              Phone Number<span className="text-danger">*</span>
            </label>
            {/* <CFormInput
              type="text"
              name="mobile"
              maxLength={10}
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
              // style={{outerHeight:"100px"}}
            />
            <div className="error-container">
              {touched.mobile && errors.mobile ? (
                <span className="validtion-error">{errors.mobile}</span>
              ) : null}
            </div>
          </CCol>
          <CCol md={6} className="mt-3">
            <label className="" htmlFor="validationServer01">
              Status<span className="text-danger">*</span>
            </label>
            <Select
              options={options}
              value={options.find((option) => option.value === values.status)}
              onChange={(option) => setFieldValue("status", option.value)}
            />
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
                        <CCol md={1} className="fs-3">•</CCol>
                          <CCol md={8}>{list.entity_name}</CCol>
                          <CCol md={3}>
                            <Switch
                              name={list.id}
                              onChange={(e) =>
                                permissionHandler(e.target.name)
                              }
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
                        <CCol md={1} className="fs-3">•</CCol>
                          <CCol md={8}>{list.entity_name}</CCol>
                          <CCol md={3}>
                            <Switch
                              name={list.id}
                              onChange={(e) =>
                                permissionHandler(e.target.name)
                              }
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
              Submit
            </CButton>
          </CCol>
        </CRow>
      </CForm>
    </CCard>
  );
};

export default AddManager;
