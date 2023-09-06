import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, setCurrentManageOrderPage } from "src/features/Orders/OrderSlice";
import moment from "moment-timezone";
import boxImage from "src/assets/images/download.jpeg";
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCol,
  CImage,
  CRow,
} from "@coreui/react";
import { BiRupee } from "react-icons/bi";
const History = () => {
  const history = useSelector((state) => state.orders);
  const { searchInput, startDate, endDate } = useSelector(
    (state) => state.orders
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getAllOrders({ status: "delivered", searchInput, startDate, endDate })
    );
    dispatch(setCurrentManageOrderPage("history"))
  }, [searchInput, startDate, endDate]);

  return (
    <CCard className="mt-2">
      <CCardBody>
        {history?.Allorders?.data ? (
          <CRow>
            {history?.Allorders?.data?.map((val, id) => {
              return (
                <CCol md={6} key={id}>
                  <CCard className="mb-4 border-start border-start-4 border-top-1 border-end-1 border-bottom-1 border-start-primary border-top-secondary border-end-secondary border-bottom-secondary">
                    <CRow>
                      <CCol
                        sm={5}
                        className="p-2 position-relative text-center pe-0 d-flex flex-column justify-content-center align-items-center "
                      >
                        <CImage src={val.boxImage} className="w-75 mb-4" />
                        <CButton
                          className="p-1 text-white text-capitalize position-absolute bottom-0 mb-2"
                          color="success"
                        >
                          {val.status}
                        </CButton>
                      </CCol>
                      <CCol sm={7} className="mt-1 mb-2">
                        <CCardText className="text-dark fs-7 fw-bolder">
                          Order Number:{" "}
                          <span className="text-body">{val.orderNumber}</span>
                        </CCardText>
                        <CCardText className="text-dark fs-7 fw-bolder">
                          Size:{" "}
                          <span className="text-body ">{val.boxType}</span>
                        </CCardText>
                        <CCardText className="text-dark fs-7 fw-bolder">
                          Product Name:{" "}
                          <span className="text-body">{val.productName}</span>
                        </CCardText>
                        <CCardText className="text-dark fs-7 fw-bolder">
                          Amount:{" "}
                          <span className="text-body ">
                            <BiRupee />
                            {val.price.toLocaleString("en-IN")}
                          </span>
                        </CCardText>
                        <CCardText className="text-dark fs-7 fw-bolder">
                          Customer Name:{" "}
                          <span className="text-body ">
                            {val.user.first_name} {val.user.last_name}
                          </span>
                        </CCardText>
                        
                        {/* <CCardText className="text-dark fs-7 fw-bolder">
                          Total: <span className="text-body ">53</span>
                        </CCardText> */}
                        <CCardText className="text-dark fs-7 fw-bolder">
                          Date:{" "}
                          <span className="text-body ">
                            {moment
                              .utc(val.createdAt, "YYYY-MM-DDTHH:mm:ssZ")
                              .format("DD-MM-YYYY")}
                          </span>
                        </CCardText>
                      </CCol>
                      {/* <CCol sm={4} className="mt-1">
                        <CCardText className="text-dark fs-7 fw-bolder">
                          Product Name:{" "}
                          <span className="text-body">{val.productName}</span>
                        </CCardText>
                        <CCardText className="text-dark fs-7 fw-bolder">
                          Total: <span className="text-body ">53</span>
                        </CCardText>
                        <CCardText className="text-dark fs-7 fw-bolder">
                          Date:{" "}
                          <span className="text-body ">
                            {moment
                              .utc(val.createdAt, "YYYY-MM-DDTHH:mm:ssZ")
                              .format("DD-MM-YYYY")}
                          </span>
                        </CCardText>
                      </CCol> */}
                    </CRow>
                  </CCard>
                </CCol>
              );
            })}
          </CRow>
        ) : (
          <CRow>
            <CCol className="d-flex justify-content-center">
              No record found
            </CCol>
          </CRow>
        )}
      </CCardBody>
    </CCard>
  );
};

export default History;
