import {
  CButton,
  CCard,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CRow,
} from "@coreui/react";
import { CCardBody } from "@coreui/react-pro";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AutuCompleteCity from "../map/AutoCompleteCity";
import * as Yup from "yup";
import {
  getPrefieldGEoFenceById,
  updateGeoFence,
} from "src/features/geoFence/GeoFenceSlice";
import PolygonMap from "../map/LeafLet";
import Spinner from "src/spinner/Spinner";

const UpdateGeoFence = () => {
  const { coordinates, isLoader } = useSelector((state) => state.geoFen);
  const preFieldValue = useSelector(
    (state) => state.geoFen.prefieldGEoFenceById
  );
  const [address, setAdress] = useState();
  const dispatch = useDispatch();
  const coordint = coordinates[0]?.latlngs;
  const lat = preFieldValue?.theGeoFence?.coordinates?.map((ll) => ll.lat);
  const lng = preFieldValue?.theGeoFence?.coordinates?.map((ll) => ll.lng);
  const centerMap = {
    lat: lat && lat[0] ? lat[0] : 30.682421,
    lng: lng && lng[0] ? lng[0] : 76.727631,
  };

  const [center, setCenter] = useState([30.682421, 76.727631]);
  const navigate = useNavigate();

  const { id } = useParams();
  const city = preFieldValue?.theGeoFence?.location;
  useEffect(() => {
    dispatch(getPrefieldGEoFenceById(id));
    setAdress(city);
  }, [city, id]);

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        geofencing_name: preFieldValue?.theGeoFence?.geofencing_name
          ? preFieldValue?.theGeoFence?.geofencing_name
          : "",
        location: address,
        coordinates: coordint,
      },
      enableReinitialize: true,
      onSubmit: (data, { resetForm }) => {
        dispatch(updateGeoFence({ coordinates: coordint, id, navigate }));
        resetForm({ data: "" });
      },
    });

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
                <CFormSelect disabled>
                  <option>{preFieldValue?.theGeoFence?.teamName}</option>
                </CFormSelect>
              </CCol>
              <CCol md={12} className="mt-2">
                <label className="" htmlFor="validationServer01">
                  Location<span className="text-danger">*</span>
                </label>
                <AutuCompleteCity
                  setAdress={setAdress}
                  address={address}
                  setCenter={setCenter}
                  value={preFieldValue?.theGeoFence?.location}
                  disabled={preFieldValue}
                />
                <div className="error-container">
                  {touched.location && errors.location ? (
                    <span className="validtion-error">{errors.location}</span>
                  ) : null}
                </div>
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
                  disabled={true}
                />
                <div className="error-container">
                  {touched.geofencing_name && errors.geofencing_name ? (
                    <span className="validtion-error">
                      {errors.geofencing_name}
                    </span>
                  ) : null}
                </div>
              </CCol>
              <CCol
                md={12}
                className="d-flex justify-content-between mt-3 gap-5"
              >
                <CButton
                  color="secondary"
                  className="w-50 text-white"
                  onClick={() => navigate("/dispatcher/geoFence")}
                >
                  Cancel
                </CButton>
                <CButton type="submit" color="info" className="w-50 text-white">
                  Update
                </CButton>
              </CCol>
            </CCol>
            <CCol md={8}>
              {/* <AutoCom /> */}
              <div className="mt-2">
                <span style={{ marginLeft: "15px" }}>
                  {touched.coordinates && errors.coordinates ? (
                    <span className="validtion-error">
                      {errors.coordinates}
                    </span>
                  ) : null}
                </span>
                <PolygonMap
                  center={centerMap}
                  polygonCoords={preFieldValue?.theGeoFence?.coordinates}
                />
              </div>
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default UpdateGeoFence;
