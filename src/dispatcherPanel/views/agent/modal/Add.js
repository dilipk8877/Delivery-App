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
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import { addAgents, closeAgentAddModal } from "src/features/agents/AgentSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { getTeams } from "src/features/teams/TeamSlice";
import { getVehicleType } from "src/features/pricingRule/PricingSLice";
import Spinner from "src/spinner/Spinner";
import { useLocation } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { AgentAddSchema } from "src/validateSchema/Schema";

const Add = () => {
  const { vehicleType } = useSelector((state) => state.pricingRule);
  const { agentAddModal, isLoader, currentSTs } = useSelector((state) => state.agent);
  const team = useSelector((state) => state.team.teamsList);
  const [urlPath, setUrlPath] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();
  const userId = selectedOption?.value;
  const testArray = [];
  const data = team?.teamList;
  data?.forEach((item) => {
    testArray.push({
      value: `${item.team_name}`,
      label: `${item.team_name}`,
      value: item.id,
    });
  });

  const vehicleTypeArray = [];
  const vehicleTypeData = vehicleType?.theVehicleType;
  vehicleTypeData?.forEach((item) => {
    vehicleTypeArray.push({
      value: `${item.driverVehicleType}`,
      label: `${item.driverVehicleType}`,
    });
  });

  useEffect(() => {
    dispatch(getTeams());
    dispatch(getVehicleType());
  }, []);
  const handlCloseModel = () => {
    dispatch(closeAgentAddModal());
    resetForm();
  };

  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    const splitLocation = pathname?.split("/");
    if (splitLocation[2] === "active") {
      setUrlPath("isActive=1");
    } else if (splitLocation[2] === "awaiting") {
      setUrlPath("isAwaiting=0");
    } else if (splitLocation[1] === "blocked") {
      setUrlPath("isBlocked=1");
    }
  }, [pathname]);
 
  const {
    values,
    handleBlur,
    handleChange,
    touched,
    errors,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      teamId: userId,
      type: "",
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      website: "",
      dob: "",
      plate_number: "",
      vehicle_type: "",
      delivery_area: "",
    },
    enableReinitialize: true,
    validationSchema:AgentAddSchema,
    onSubmit: (data, action) => {
      dispatch(addAgents({ data, action, status: currentSTs }));
    },
  });
  const today = new Date();
  const maxDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  )
    .toISOString()
    .slice(0, 10);

  const minDate = new Date(
    today.getFullYear() - 100,
    today.getMonth(),
    today.getDate()
  )
    .toISOString()
    .slice(0, 10);

  const handleVehicleType = (selectedOption) => {
    setFieldValue("vehicle_type", selectedOption.value);
  };
  return (
    <CModal size="lg" visible={agentAddModal}>
      {isLoader ? <Spinner color="primary" className="modal-spinner" /> : null}
      <CHeader className="rounded-top">
        <CModalTitle>Add Agents</CModalTitle>
        <ImCross
          onClick={handlCloseModel}
          className="text-danger cursor fs-5 me-2"
        />
      </CHeader>
      <CModalBody className="d-flex w-100">
        <CForm className="row g-3" onSubmit={handleSubmit}>
          <CCol className="me-4">
            <label className="" htmlFor="validationServer01">
              Select Team<span className="text-danger">*</span>
            </label>
            <Select
              className="assignDriver-dropdown"
              classNamePrefix="Select"
              isClearable
              name="color"
              onChange={setSelectedOption}
              options={testArray}
            />
            <div className="error-container">
              {touched.teamId && errors.teamId ? (
                <span className="validtion-error">{errors.teamId}</span>
              ) : null}
            </div>
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
            <label className="" htmlFor="validationServer02">
              Last Name<span className="text-danger">*</span>
            </label>
            <CFormInput
              type="text"
              id="validationServer02"
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
              maxLength={30}
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
            {/* <PhoneInput
              name="mobile"
              value={values.mobile}
              onChange={handleChange}
              international={true}
              onBlur={handleBlur}
              defaultCountry="IN"
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
          <CCol md={6} className="position-relative">
            <label className="" htmlFor="validationServer05">
              Website<span className="text-danger">*</span>
            </label>
            <CFormInput
              type="text"
              id="validationServer05"
              name="website"
              maxLength={70}
              value={values.website}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="error-container">
              {touched.website && errors.website ? (
                <span className="validtion-error">{errors.website}</span>
              ) : null}
            </div>
          </CCol>
          <CCol md={6} className="position-relative">
            <label className="" htmlFor="validationServer05">
              Date of Birth<span className="text-danger">*</span>
            </label>
            <CFormInput
              type="date"
              id="validationServer05"
              name="dob"
              value={values.dob}
              max={maxDate}
              min={minDate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="error-container">
              {touched.dob && errors.dob ? (
                <span className="validtion-error">{errors.dob}</span>
              ) : null}
            </div>
          </CCol>
          <CCol md={6} className="position-relative">
            <label className="" htmlFor="validationServer05">
              Vehicle Reg. number<span className="text-danger">*</span>
            </label>

            <CFormInput
              type="text"
              id="validationServer05"
              name="plate_number"
              maxLength={20}
              value={values.plate_number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="error-container">
              {touched.plate_number && errors.plate_number ? (
                <span className="validtion-error">{errors.plate_number}</span>
              ) : null}
            </div>
          </CCol>
          <CCol md={6} className="position-relative">
            <label className="" htmlFor="validationServer05">
              Delivery Area<span className="text-danger">*</span>
            </label>
            <CFormInput
              type="text"
              id="validationServer05"
              name="delivery_area"
              maxLength={150}
              value={values.delivery_area}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="error-container">
              {touched.delivery_area && errors.delivery_area ? (
                <span className="validtion-error">{errors.delivery_area}</span>
              ) : null}
            </div>
          </CCol>
          <CCol md={6} className="position-relative">
            <label className="" htmlFor="validationServer05">
              Agent Type<span className="text-danger">*</span>
            </label>
            <CFormSelect
              feedbackInvalid="Example invalid select feedback"
              onChange={handleChange}
              value={values.type}
              onBlur={handleBlur}
              name="type"
            >
              <option>Select Agent Type</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Employee">Employee</option>
            </CFormSelect>
            <div className="error-container">
              {touched.type && errors.type ? (
                <span className="validtion-error">{errors.type}</span>
              ) : null}
            </div>
          </CCol>
          <CCol md={6} className="position-relative">
            <label className="" htmlFor="validationServer05">
              Vehicle Type<span className="text-danger">*</span>
            </label>
            <Select
              options={vehicleTypeArray}
              name="vehicle_type"
              value={vehicleTypeArray.find(
                (option) => option.value === values.vehicle_type
              )}
              onChange={handleVehicleType}
            />
            <div className="error-container">
              {touched.vehicle_type && errors.vehicle_type ? (
                <span className="validtion-error">{errors.vehicle_type}</span>
              ) : null}
            </div>
          </CCol>
          <CCol sm={12} className="d-flex justify-content-center">
            <CButton type="submit" color="info" className="w-25 text-white">
              Submit
            </CButton>
          </CCol>
        </CForm>
      </CModalBody>
    </CModal>
  );
};

export default Add;
