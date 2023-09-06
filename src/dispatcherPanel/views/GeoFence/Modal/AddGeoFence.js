import {
  CButton,
  CCard,
  CCol,
  CForm,
  CFormInput,
  CFormTextarea,
  CRow,
} from "@coreui/react";
import { CCardBody } from "@coreui/react-pro";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { getTeams } from "src/features/teams/TeamSlice";
import AutuCompleteCity from "../map/AutoCompleteCity";
import * as Yup from "yup";
import { addGeoFence } from "src/features/geoFence/GeoFenceSlice";
import PolygonMap from "../map/LeafLet";
import Spinner from "src/spinner/Spinner";
import { AddGeoFenceSchema } from "src/validateSchema/Schema";

const AddGeoFence = () => {
  const [address, setAdress] = useState("");
  const { coordinates, isLoader } = useSelector((state) => state.geoFen);
  const coordint = coordinates[0]?.latlngs;
  const team = useSelector((state) => state.team.teamsList);
  const [selectedOption, setSelectedOption] = useState(null);
  const [center, setCenter] = useState([30.682421, 76.727631]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const teamName = selectedOption?.label;
  const testArray = [];
  const data = team?.teamList;
  data?.forEach((item) => {
    testArray.push({
      value: `${item.team_name}`,
      label: `${item.team_name}`,
      value: item.id,
    });
  });

  useEffect(() => {
    dispatch(getTeams());
  }, []);
  useEffect(() => {
    console.log(center);
  }, [center]);
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      geofencing_name: "",
      description: "",
      location: address,
      teamName: teamName,
      coordinates: coordint,
    },

    validationSchema: AddGeoFenceSchema,
    onSubmit: async (data, { resetForm }) => {
      try {
        await dispatch(
          addGeoFence({
            geofencing_name: data.geofencing_name,
            description: data.description,
            location: address,
            coordinates: coordint,
            teamName: teamName,
            navigate,
          })
        ).unwrap();
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    setFieldValue("teamName", teamName);
    setFieldValue("location", address);
    setFieldValue("coordinates", coordint);
  }, [teamName, address, coordint]);

  return (
    <CCard className="mb-4">
      {isLoader ? <Spinner className="modal-spinner" /> : null}
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
          <CRow>
            <CCol md={4}>
              <CCol md={12} className="mt-2">
                <label className="" htmlFor="validationServer01">
                  Select Team<span className="text-danger">*</span>
                </label>
                <Select
                  className="addGeoFence-dropdown"
                  classNamePrefix="Select"
                  isClearable
                  name="teamName"
                  onChange={setSelectedOption}
                  options={testArray}
                  onBlur={handleBlur}
                />
                <div className="error-container">
                  {touched.teamName && errors.teamName ? (
                    <span className="validtion-error">{errors.teamName}</span>
                  ) : null}
                </div>
              </CCol>
              <CCol md={12} className="mt-2">
                <label className="" htmlFor="validationServer01">
                  Location<span className="text-danger">*</span>
                </label>
                <AutuCompleteCity
                  setAdress={setAdress}
                  address={address}
                  setCenter={setCenter}
                />
                <div className="error-container">
                  {touched.location && errors.location ? (
                    <span className="validtion-error">{errors.location}</span>
                  ) : null}
                </div>
                {/* <span className="validtion-error">{addressError}</span> */}
              </CCol>
              <CCol md={12} className="mt-2">
                <label className="" htmlFor="validationServer01">
                  GeoFence Name<span className="text-danger">*</span>
                </label>
                <CFormInput
                  type="text"
                  id="validationServer01"
                  name="geofencing_name"
                  className="addGeoFence-geofencing_name"
                  value={values.geofencing_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="error-container">
                  {touched.geofencing_name && errors.geofencing_name ? (
                    <span className="validtion-error">
                      {errors.geofencing_name}
                    </span>
                  ) : null}
                </div>
              </CCol>
              <CCol md={12} className="mt-2">
                <label className="" htmlFor="validationServer01">
                  Description{" "}
                  <span style={{ fontSize: "12px" }}>(Optional) </span>
                </label>
                <CFormTextarea
                  id="validationServer01"
                  name="description"
                  className="addGeoFence-geofencing_name"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </CCol>
              <CCol
                md={12}
                className="d-flex justify-content-between mt-2 gap-5"
              >
                <CButton
                  color="secondary"
                  className="w-50 text-white"
                  onClick={() => navigate("/dispatcher/geoFence")}
                >
                  Cancel
                </CButton>
                <CButton type="submit" color="info" className="w-50 text-white">
                  Submit
                </CButton>
              </CCol>
            </CCol>
            <CCol md={8}>
              {/* <AutoCom /> */}
              <div className="mt-2">
                <span style={{ marginLeft: "15px" }}>
                  <div className="error-container">
                    {touched.coordinates && errors.coordinates ? (
                      <span className="validtion-error">
                        {errors.coordinates}
                      </span>
                    ) : null}
                  </div>
                </span>
                <PolygonMap center={center} />
              </div>
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default AddGeoFence;
