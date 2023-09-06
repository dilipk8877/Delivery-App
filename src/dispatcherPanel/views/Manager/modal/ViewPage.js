import { CCard, CCardBody, CCol, CContainer, CRow } from "@coreui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getManagerById } from "src/features/manageManager/ManagerSlice";

const ViewPage = () => {
  const managerId = useSelector((state) => state.manager.managerById);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getManagerById(id));
  }, []);

  return (
    <CCard className="mb-3">
      <CCardBody>
        <CContainer>
          <CRow>
            <CCol md={12}>
              <CRow>
                <CCol md={6} className="text-black fs-6">
                  Name
                </CCol>
                <CCol md={6}>
                  {managerId?.users?.first_name} {managerId?.users?.last_name}
                </CCol>
                <CCol md={6} className="text-black fs-6">
                  Email
                </CCol>
                <CCol md={6}>{managerId?.users?.email}</CCol>
                <CCol md={6} className="text-black fs-6">
                    Mobile Number
                  </CCol>
                  <CCol md={6}>{managerId?.users?.mobile}</CCol>
                  <CCol md={6} className="text-black fs-6">
                    Status
                  </CCol>
                  <CCol md={6}>
                    {managerId?.admins?.charAt(0)?.toUpperCase() +
                      managerId?.admins?.slice(1)}
                  </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CContainer>
        <CContainer className="bg-dark w-100 text-white mt-4 mb-3">
          Permission
        </CContainer>
        <CContainer>
          <CRow>
              <CRow>
                {managerId?.entities?.length > 0 ? (
                  managerId?.entities?.map((list, index) => {
                    return (
                      <CCol
                        md={6}
                        key={index}
                        className="text-black fs-6 pb-2"
                      >
                        {index +1}. {list.entity_name}
                      </CCol>
                    );
                  })
                ) : (
                  <CCol className="d-flex justify-content-center">
                    <span>No Permission assigned</span>
                  </CCol>
                )}
              </CRow>
          </CRow>
        </CContainer>
      </CCardBody>
    </CCard>
  );
};

export default ViewPage;
