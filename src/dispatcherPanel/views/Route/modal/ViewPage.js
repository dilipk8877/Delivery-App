import { CCard, CCardBody, CCol, CContainer, CRow } from "@coreui/react";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRouteById } from "src/features/Route/RouteSlice";
import Spinner from "src/spinner/Spinner";

const ViewPage = () => {
  const routeById = useSelector((state)=>state.route.routeByid)
  const {isLoader} = useSelector((state)=>state.route)
  const { id } = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRouteById(id))
  }, [id]);
  return (
    <CCard className="mb-3">
        {isLoader ? <Spinner className="modal-spinner" /> : null}
      <CCardBody>
        <CContainer>
          <CRow>
            <CCol md={6}>
              <CRow>
              <CCol md={6} className="text-black fs-6">Order Number</CCol>
              <CCol md={6}>{routeById?.data?.orderNumber}</CCol>
              <CCol md={6} className="text-black fs-6">Order types</CCol>
              <CCol md={6}>{routeById?.data?.orderType}</CCol>
              <CCol md={6} className="text-black fs-6">Customer Name</CCol>
              <CCol md={6}>{routeById?.data?.user?.first_name}{' '}{routeById?.data?.user?.last_name}</CCol>
              </CRow>
            </CCol>
            <CCol md={6}>
            <CRow>
              <CRow>
             
              <CCol md={6} className="text-black fs-6">Status</CCol>
              <CCol md={6}>{routeById?.data?.status}</CCol>
              <CCol md={6} className="text-black fs-6">Product Name</CCol>
              <CCol md={6}>{routeById?.data?.productName}</CCol>
              <CCol md={6} className="text-black fs-6">Schedule time</CCol>
              <CCol md={6}>{moment(routeById?.data?.pickupDate).local().format("DD-MM-YYYY")}</CCol>
              </CRow>
              </CRow>
            </CCol>
          </CRow>
        </CContainer>
        <CContainer className="bg-dark w-100 text-white mt-4 mb-3">
          Pickup Deatils
        </CContainer>
        <CContainer>
        <CRow>
            <CCol md={6}>
              <CRow>
              <CCol md={6} className="text-black fs-6">Pickup Lat</CCol>
              <CCol md={6}>{routeById?.data?.pickUpLatitude}</CCol>
              <CCol md={6} className="text-black fs-6">Pickup Address</CCol>
              <CCol md={6}>{routeById?.data?.pickUpAddress}</CCol>
              </CRow>
            </CCol>
            <CCol md={6}>
            <CRow>
              <CRow>
              <CCol md={6} className="text-black fs-6">Pickup Long</CCol>
              <CCol md={6}>{routeById?.data?.pickUpLongitude}</CCol>
              </CRow>
              </CRow>
            </CCol>
          </CRow>
        </CContainer>
        <CContainer className="bg-dark w-100 text-white mt-4 mb-3">
          DropOff Deatils
        </CContainer>
        <CContainer>
        <CRow>
            <CCol md={6}>
              <CRow>
              <CCol md={6} className="text-black fs-6">Dropoff Lat</CCol>
              <CCol md={6}>{routeById?.data?.dropOffLatitude}</CCol>
              <CCol md={6} className="text-black fs-6">Dropoff Address</CCol>
              <CCol md={6}>{routeById?.data?.dropOffAddress}</CCol>
              </CRow>
            </CCol>
            <CCol md={6}>
            <CRow>
              <CRow>
              <CCol md={6} className="text-black fs-6">Dropoff Long</CCol>
              <CCol md={6}>{routeById?.data?.dropOffLongitude}</CCol>
              </CRow>
              </CRow>
            </CCol>
          </CRow>
        </CContainer>
        <CContainer className="bg-dark w-100 text-white mt-4 mb-3">
          Order Id Summary
        </CContainer>
        <CContainer>
        <CRow>
            <CCol md={6}>
              <CRow>
              <CCol md={6} className="text-black fs-6">Delivery Charges</CCol>
              <CCol md={6}>{routeById?.data?.price}</CCol>
              </CRow>
            </CCol>
            <CCol md={6}>
            <CRow>
              <CRow>
              </CRow>
              </CRow>
            </CCol>
          </CRow>
        </CContainer>
      </CCardBody>
    </CCard>
  );
};

export default ViewPage;
