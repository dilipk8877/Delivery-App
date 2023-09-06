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
import Select from "react-select";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPricingRule,
  closeAddModal,
  getVehicleType,
  setPrefieldValue,
  updatePricingRule,
} from "src/features/pricingRule/PricingSLice";
import { ImCross } from "react-icons/im";
import { getGeoFence } from "src/features/geoFence/GeoFenceSlice";
import { getTeams, getTeamsById } from "src/features/teams/TeamSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import Spinner from "src/spinner/Spinner";
import { AddPricingRuleSchema } from "src/validateSchema/Schema";
const Add = () => {
  const { addmodal, vehicleType, prefieldPricingRule, toggleButton, isLoader } =
    useSelector((state) => state.pricingRule);
  const getAllFence = useSelector((state) => state.geoFen.geoFence);
  const { teamsListById, teamsList } = useSelector((state) => state.team);

  const dispatch = useDispatch();
  const handlCloseModel = () => {
    dispatch(closeAddModal());
    resetForm();
  };
  useEffect(() => {
    dispatch(getGeoFence());
    dispatch(getTeams());
    dispatch(getVehicleType());
  }, []);

  const geoFenceArray = [];
  const dataGeoFence = getAllFence?.GeoFence_Details;
  dataGeoFence?.forEach((item) => {
    geoFenceArray.push({
      value: `${item.geofencing_name}`,
      label: `${item.geofencing_name}`,
      value: item.id,
    });
  });

  // team
  const teamArray = [];
  const data = teamsList?.teamList;
  data?.forEach((item) => {
    teamArray.push({
      value: `${item.team_name}`,
      label: `${item.team_name}`,
      value: item.id,
    });
  });

  // vehicle type
  const vehicleTypeArray = [];
  const vehicleTypeData = vehicleType?.theVehicleType;
  vehicleTypeData?.forEach((item) => {
    vehicleTypeArray.push({
      value: `${item.driverVehicleType}`,
      label: `${item.driverVehicleType}`,
    });
  });

  const UpdateId = prefieldPricingRule?.id;
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    errors,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: prefieldPricingRule?.Name ? prefieldPricingRule?.Name : "",
      geoFenceId: prefieldPricingRule?.geoFenceId
        ? prefieldPricingRule?.geoFenceId
        : "",
      teamId: prefieldPricingRule?.teamId ? prefieldPricingRule?.teamId : "",
      agentVehicle: prefieldPricingRule?.agentVehicle
        ? prefieldPricingRule?.agentVehicle
        : "",
      basePrice: prefieldPricingRule?.base_price
        ? prefieldPricingRule?.base_price
        : "",
      baseDuration: prefieldPricingRule?.base_duration
        ? prefieldPricingRule?.base_duration
        : "",
      baseDistance: prefieldPricingRule?.base_distance
        ? prefieldPricingRule?.base_distance
        : "",
      DurationPrice: prefieldPricingRule?.duration_price
        ? prefieldPricingRule?.duration_price
        : "",
      DistanceFee: prefieldPricingRule?.distance_fee
        ? prefieldPricingRule?.distance_fee
        : "",
      agentCommPercnt: prefieldPricingRule?.agent_comm_per
        ? prefieldPricingRule?.agent_comm_per
        : "",
    },
    enableReinitialize: true,
    validationSchema: AddPricingRuleSchema,
    onSubmit: (data, action) => {
      if (toggleButton === true) {
        dispatch(addPricingRule({ data, action }));
        setFieldValue("geoFenceId", null);
        setFieldValue("teamId", null);
        setFieldValue("agentVehicle", null);
      } else if (toggleButton === false) {
        dispatch(updatePricingRule({ data, UpdateId, action }));
        dispatch(setPrefieldValue(" "))
      }
    },
  });

  const handleTeamId = (selectedOption) => {
    setFieldValue("teamId", selectedOption.value);
    dispatch(getTeamsById(selectedOption.value));
  };
  const setSelectedGeoFenceOption = (selectedOption) => {
    setFieldValue("geoFenceId", selectedOption.value);
  };

  const handleVehicleType = (selectedOption) => {
    setFieldValue("agentVehicle", selectedOption.value);
  };
  return (
    <CModal alignment="center" size="lg" visible={addmodal}>
      {isLoader ? <Spinner color="primary" className="modal-spinner" /> : null}
      <CHeader className="rounded-top">
        <CModalTitle className="">Add Pricing Rule</CModalTitle>
        <ImCross
          onClick={handlCloseModel}
          className="text-danger cursor fs-5 me-2"
        />
      </CHeader>
      <CModalBody>
        <CForm onSubmit={handleSubmit}>
          <CRow>
            <CCol md={6} className="mb-2">
              <label htmlFor="">
                Name <span className="text-danger">*</span>
              </label>
              <CFormInput
                type="text"
                name="name"
                maxLength={30}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              <div className="error-container">
                {touched.name && errors.name ? (
                  <span className="validtion-error"> {errors.name}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="mb-2">
              <label htmlFor="">
                Select Geo Fence <span className="text-danger">*</span>
              </label>
              <Select
                options={geoFenceArray}
                onChange={setSelectedGeoFenceOption}
                name="geoFenceId"
                value={geoFenceArray.find(
                  (option) => option.value === values.geoFenceId
                )}
                onBlur={handleBlur}
                isDisabled={prefieldPricingRule && true}
              />{" "}
              <div className="error-container">
                {touched.geoFenceId && errors.geoFenceId ? (
                  <span className="validtion-error"> {errors.geoFenceId}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="mb-2">
              <label htmlFor="">
                Select Team <span className="text-danger">*</span>
              </label>
              <Select
                options={teamArray}
                onChange={handleTeamId}
                value={teamArray.find(
                  (option) => option.value === values.teamId
                )}
                isDisabled={prefieldPricingRule && true}
              />{" "}
              <div className="error-container">
                {touched.teamId && errors.teamId ? (
                  <span className="validtion-error"> {errors.teamId}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="mb-2">
              <label htmlFor="">
                Select Team Tag <span className="text-danger">*</span>
              </label>
              <CFormInput
                value={
                  prefieldPricingRule?.teamTag || teamsListById?.data?.team_tag
                }
                readOnly
              />
            </CCol>
            <CCol md={6} className="mb-2">
              <label htmlFor="">
                Select Driver Vehicle <span className="text-danger">*</span>
              </label>
              <Select
                options={vehicleTypeArray}
                name="agentVehicle"
                value={vehicleTypeArray.find(
                  (option) => option.value === values.agentVehicle
                )}
                onChange={handleVehicleType}
                isDisabled={prefieldPricingRule && true}
              />{" "}
              <div className="error-container">
                {touched.agentVehicle && errors.agentVehicle ? (
                  <span className="validtion-error">
                    {" "}
                    {errors.agentVehicle}
                  </span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="mb-2">
              <label htmlFor="">
                Base Price <span className="text-danger">*</span>
              </label>
              <CFormInput
                type="number"
                name="basePrice"
                value={values.basePrice}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              <div className="error-container">
                {touched.basePrice && errors.basePrice ? (
                  <span className="validtion-error"> {errors.basePrice}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="mb-2">
              <label htmlFor="">
                Base Duration <span className="text-danger">*</span>
              </label>
              <CFormInput
                type="number"
                name="baseDuration"
                value={values.baseDuration}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              <div className="error-container">
                {touched.baseDuration && errors.baseDuration ? (
                  <span className="validtion-error">
                    {" "}
                    {errors.baseDuration}
                  </span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="mb-2">
              <label htmlFor="">
                Base Distance <span className="text-danger">*</span>
              </label>
              <CFormInput
                type="number"
                name="baseDistance"
                value={values.baseDistance}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              <div className="error-container">
                {touched.baseDistance && errors.baseDistance ? (
                  <span className="validtion-error">
                    {" "}
                    {errors.baseDistance}
                  </span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="mb-2">
              <label htmlFor="">
                Duration Price (per minute){" "}
                <span className="text-danger">*</span>
              </label>
              <CFormInput
                type="number"
                name="DurationPrice"
                value={values.DurationPrice}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              <div className="error-container">
                {touched.DurationPrice && errors.DurationPrice ? (
                  <span className="validtion-error">
                    {" "}
                    {errors.DurationPrice}
                  </span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="mb-2">
              <label htmlFor="">
                Distance Fee <span className="text-danger">*</span>
              </label>
              <CFormInput
                type="number"
                name="DistanceFee"
                value={values.DistanceFee}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              <div className="error-container">
                {touched.DistanceFee && errors.DistanceFee ? (
                  <span className="validtion-error"> {errors.DistanceFee}</span>
                ) : null}
              </div>
            </CCol>
            <CCol md={6} className="mb-2">
              <label htmlFor="">
                Agent Commission Percentage{" "}
                <span className="text-danger">*</span>
              </label>
              <CFormInput
                type="number"
                name="agentCommPercnt"
                value={values.agentCommPercnt}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              <div className="error-container">
                {touched.agentCommPercnt && errors.agentCommPercnt ? (
                  <span className="validtion-error">
                    {" "}
                    {errors.agentCommPercnt}
                  </span>
                ) : null}
              </div>
            </CCol>
            <CCol md={12} className="mt-4 d-flex justify-content-center">
              {toggleButton ? (
                <CButton type="submit" color="info" className="w-25 text-white">
                  Submit
                </CButton>
              ) : (
                <CButton type="submit" color="info" className="w-25 text-white">
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
