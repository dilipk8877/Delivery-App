import {
  CButton,
  CCard,
  CCardBody,
  CCardText,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormInput,
  CImage,
  CRow,
} from "@coreui/react";
import { Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import oneByone from "../../../assets/images/onebyone.png";
import sendToAll from "../../../assets/images/sentToAll.png";
import batchWise from "../../../assets/images/batchWise.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getAutoAllocation,
  showAutoSetting,
  updateAutoAllocation,
} from "src/features/autoAllocation/AutoAllocation";
import { useFormik } from "formik";
import * as Yup from "yup";
import Spinner from "src/spinner/Spinner";
import { AutoAlloactionSchema } from "src/validateSchema/Schema";
const AutoAllocation = () => {
  const { autoAllocation, autoSetting, isLoader } = useSelector(
    (state) => state.autoAll
  );

  const [status, setStatus] = useState(false);
  const [autoAlgo, setAutoAlogo] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAutoAllocation());
    dispatch(showAutoSetting());
  }, []);

  const cardDesAndImage = [
    {
      desc: "Allocation will done one by one",
      img: oneByone,
    },
    {
      desc: "Allocation request will send to all",
      img: sendToAll,
    },
    {
      desc: "Allocation request will done in round robin format",
      img: oneByone,
    },
    {
      desc: "Allocation request will done batch wise",
      img: batchWise,
    },
  ];

  const {
    values,
    handleBlur,
    handleChange,
    touched,
    errors,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      maxRadius: autoSetting?.theautoSetting?.max_radius
        ? autoSetting?.theautoSetting?.max_radius
        : "",
      autoAllocationType: autoSetting?.theautoSetting?.auto_allocation_type_id
        ? autoSetting?.theautoSetting?.auto_allocation_type_id
        : "",
    },
    enableReinitialize: true,
    validationSchema: AutoAlloactionSchema,
    onSubmit: (data) => {
      dispatch(updateAutoAllocation(data));
    },
  });
  const previousId = autoSetting?.theautoSetting?.auto_allocation_type_id;

  const [selectedId, setSelectedId] = useState();
  const handleButtonClick = (id) => {
    setSelectedId(id);
    setAutoAlogo(id);
  };
  useEffect(() => {
    setSelectedId(previousId);
  }, [previousId]);
  return (
    <CCard className="mb-4">
      {isLoader ? <Spinner color="primary" className="modal-spinner" /> : null}
      <CCardBody>
        <CContainer>
          <Switch checked={status} onClick={() => setStatus(!status)} />
          Enable this option to automatically assign Task to your agent.
        </CContainer>
        <CForm onSubmit={handleSubmit}>
          <CContainer className="mt-2 mb-2">
            <label className="" htmlFor="validationServer01">
              Maximum Radius (Maximum 5 Km)<span className="text-danger">*</span>
            </label>
            <CFormInput
              className="w-25"
              type="number"
              name="maxRadius"
              value={values.maxRadius}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={!status}
              min={1}
              max={5}
              title="Raduis must be less 5 km"
            />
            <div className="error-container">
              {touched.maxRadius && touched.maxRadius ? (
                <span className="validtion-error">{errors.maxRadius}</span>
              ) : null}
            </div>
          </CContainer>
          <CContainer>
            <CCardText className="text-black fs-6">
              Select a Method to allocate task
            </CCardText>
            <div className="error-container">
              {touched.autoAllocationType && touched.autoAllocationType ? (
                <span className="validtion-error">
                  {errors.autoAllocationType}
                </span>
              ) : null}
            </div>
            <CRow>
              {autoAllocation?.theAutoAllocation?.map((auto, index) => {
                return (
                  <CCol md={6} key={index}>
                    <CCard className="p-3 mt-2 mb-4 autolocation-card">
                      <CRow>
                        <CCol>
                          <CFormCheck
                            type="radio"
                            label={`${auto.type_allocation_name}`}
                            id={auto.id}
                            name="radioButtons"
                            value={auto.id}
                            checked={selectedId === auto.id}
                            onChange={(e) => handleButtonClick(e.target.value)}
                            disabled={!status}
                          />
                          <CCardText>{cardDesAndImage[index].desc}</CCardText>
                        </CCol>
                        <CCol className="d-flex justify-content-end">
                          <CImage
                            src={cardDesAndImage[index].img}
                            width="120px"
                            height="80px"
                          />
                        </CCol>
                      </CRow>
                    </CCard>
                  </CCol>
                );
              })}

              <CCol md={4}>
                <CButton
                  type="submit"
                  color="info"
                  className="w-50 text-white"
                  onClick={() => {
                    setFieldValue("autoAllocationType", autoAlgo);
                  }}
                >
                  Update
                </CButton>
              </CCol>
            </CRow>
          </CContainer>
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default AutoAllocation;
