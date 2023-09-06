import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";
import React, { useEffect, useMemo } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  confirmationMesaageOpen,
  getCoordinatesById,
  getGeoFence,
  setDeleteId,
} from "src/features/geoFence/GeoFenceSlice";
import Spinner from "src/spinner/Spinner";
import ReactTable from "src/views/ReactTable/ReactTable";
import PolygonOnMap from "./map/Polygon";
import ConfirmationModel from "./Modal/ConfirmationModel";
const GeoFence = () => {
  const {geoFence, isLoader } = useSelector((state) => state.geoFen);
  const dispatch = useDispatch();

  const navigate = useNavigate();


  useEffect(() => {
    dispatch(getGeoFence());
  }, []);
  
  const handleDelete = (id) => {
    dispatch(setDeleteId(id));
    dispatch(confirmationMesaageOpen());
  };
  const handleEdit = (id)=>{
    navigate(`/dispatcher/geoFence/updateGeoFence/${id}`)
  }
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: (d) => {
          return (
            <span
              onClick={() => dispatch(getCoordinatesById(d.id))}
              className="cursor"
            >
              {d.geofencing_name?.charAt(0).toUpperCase() + d.geofencing_name?.slice(1)}
            </span>
          );
        },
      },
      {
        Header:"Team",
        accessor:"teamName"
      },
      {
        Header: "Action",
        disableSortBy: true,
        accessor: (d) => {
          return (
            <CCardBody className="d-flex justify-content-start align-items-center ps-0 gap-2">
              <FaEdit
                className="cursor"
                title="Update geoFence"
                onClick={() => handleEdit(d.id)}
              />
              <FaTrash className="cursor" title="Delete geoFence" onClick={() => handleDelete(d.id)} />
            </CCardBody>
          );
        },
      },
    ],
    []
  );
  const handleNavigate = () => {
    navigate("/dispatcher/geoFence/addGeoFence");
  };
  return (
    <>
       <CCard className="mb-4">
      {isLoader ? <Spinner className="modal-spinner" /> : null}
          <CCardBody>
            <CRow>
              <CCol md={4}>
                <CContainer className="d-flex justify-content-start gap-3 mb-4">
                  <CButton
                    color="info"
                    className="button-size text-white d-flex justify-content-center align-items-center"
                    onClick={handleNavigate}
                  >
                    <BsFillPlusCircleFill className="me-1 button-icon" />
                    Add
                  </CButton>
                </CContainer>

                <CCard>
                  {true && (
                    <ReactTable
                      data={geoFence?.GeoFence_Details || []}
                      columns={columns}
                    />
                  )}
                </CCard>
              </CCol>
              <CCol md={8}>
                <PolygonOnMap />
              </CCol>
            </CRow>
          </CCardBody>
          <ConfirmationModel />
        </CCard>
    </>
  );
};

export default GeoFence;
