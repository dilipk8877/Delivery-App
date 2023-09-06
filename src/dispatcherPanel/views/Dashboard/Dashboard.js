import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CBadge,
  CCard,
  CCardBody,
  CCardText,
  CCol,
  CContainer,
  CListGroup,
  CListGroupItem,
  CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  getDispDashboardDetails,
  getLatLngOfOrder,
} from "src/features/dispatcherDashboard/DispatcherDashboard";
import PolyLineMap from "./map/GoogleMap";
import Spinner from "src/spinner/Spinner";

const Dashboard = () => {
  const { dashboardDetails, latLngList,status, isLoader } = useSelector(
    (state) => state.dashboardDeatils
  );
  const [directionResponse, setDirectionResponse] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDispDashboardDetails());
  }, []);

  

  const calculateRoute = async () => {
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: {
        lat: parseFloat(latLngList?.arr.pickUpLatitude),
        lng: parseFloat(latLngList?.arr.pickUpLongitude),
      },
      destination: {
        lat: parseFloat(latLngList?.arr.dropOffLatitude),
        lng: parseFloat(latLngList?.arr.dropOffLongitude),
      },
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionResponse(results);
  };


  useEffect(()=>{
    if(status ==="success"){
      calculateRoute()
    }
    
  },[status])

  return (
    <CCard className="mb-4">
      {isLoader ? <Spinner  className="modal-spinner" />:null}
      <CCardBody>
        <CRow>
          <CCol md={4} className="dashboard-accordion">
            <CAccordion>
              {dashboardDetails?.teamsData?.map((list, index) => {
                return (
                  <CAccordionItem
                    itemKey={index}
                    className="AccordionItem"
                    key={index}
                  >
                    <CAccordionHeader className="d-grid accordion-header">
                      <CRow>
                        <CCol md={12}>{list.team.team_name}</CCol>
                        <CCol
                          md={12}
                          className="d-flex justify-content-between align-items-center accordion-header"
                        >
                          <CContainer className="d-flex justify-content-between p-0">
                            <span className="accordion-agents">
                              {list.totalAgents} Agents :
                            </span>
                            <span className="accordion-agents">
                              {list.isOnlineCount} Online
                            </span>
                            |
                            <span className="accordion-agents">
                              {list.isOfflineCount} Offline
                            </span>
                          </CContainer>
                        </CCol>
                      </CRow>
                    </CAccordionHeader>
                    <CAccordionBody className="accordionBody">
                      {list?.team?.drivers?.length > 0 ? (
                        list?.team?.drivers?.map((driver, index) => {
                          return (
                            <CListGroup className="ListGroup" key={index}>
                              <CListGroupItem
                                component="button"
                                onClick={() =>dispatch(getLatLngOfOrder(driver.userId))}
                              >
                                <span className="ListGroupItem-span">
                                  <FaCircle
                                    className={
                                      driver.isOnline === true
                                        ? "driver-online"
                                        : "driver-offline"
                                    }
                                  />
                                </span>{" "}
                                {driver.user.first_name} {driver.user.last_name}
                              </CListGroupItem>
                            </CListGroup>
                          );
                        })
                      ) : (
                        <CListGroup className="ListGroup">
                          <CListGroupItem>No Driver Assign</CListGroupItem>
                        </CListGroup>
                      )}
                    </CAccordionBody>
                  </CAccordionItem>
                );
              })}
            </CAccordion>
          </CCol>
          <CCol md={8}>
            <PolyLineMap
              directionResponse={directionResponse}
            />
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default Dashboard;
