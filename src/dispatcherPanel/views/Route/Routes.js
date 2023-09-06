import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CContainer,
  CFormInput,
  CLink,
} from "@coreui/react";
import { BiExport } from "react-icons/bi";
import { MdHomeWork } from "react-icons/md";
import { RiBriefcase2Fill } from "react-icons/ri";
import { TiBusinessCard } from "react-icons/ti";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRoutes, searchRoutes } from "src/features/Route/RouteSlice";
import ConfirmationModel from "./modal/ConfirmationModel";
import AssignDriver from "./modal/AssignDriver";
import Spinner from "src/spinner/Spinner";
import { toast } from "react-toastify";
const Routes = () => {
  const route = useSelector((state) => state.route.route);
  const { currentStatus, isLoader } = useSelector((state) => state.route);
  const [pathLoaction, setPathLoaction] = useState("");
  const dispatch = useDispatch();
  const noDataMessage = () => toast.error(`No Route found in ${currentStatus} `);

  const { pathname } = useLocation();

  useEffect(() => {
    setPathLoaction("");
  }, [pathname]);

  return (
    <CCard style={{ width: "100" }} className="mb-4">
      {isLoader ? <Spinner className="modal-spinner" /> : null}
      <CCardBody>
        <CContainer className="d-flex justify-content-end gap-3 mb-4">
          {route?.orderDetails?.length ? (
            <CButton color="info" className="button-size ms-3 d-flex justify-content-center align-items-center">
              <CLink
                className="text-decoration-none text-white"
                href={`https://delivery-app.softprodigyphp.in/export_routes/${currentStatus}`}
                download="filename.csv"
              >
                <BiExport className="me-1 button-icon" />
                Export
              </CLink>
            </CButton>
          ) : (
            <CButton
              color="info"
              className="button-size ms-3 d-flex justify-content-center align-items-center"
              onClick={() => noDataMessage()}
            >
              <CLink className="text-decoration-none text-white">
                <BiExport className="me-1 button-icon" />
                Export
              </CLink>
            </CButton>
          )}
        </CContainer>
        <CContainer className="d-flex justify-content-between align-items-center w-100 text-center fs-6">
          <CContainer className="upperData-section">
            {route ? (
              <>
                <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                  <MdHomeWork className="text-dark fs-5 me-2" />
                  {route?.UpperData?.Pending_Assignment}
                </span>
                <p>Pending Assignment</p>
              </>
            ) : (
              <>
                <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                  <MdHomeWork className="text-dark fs-5 me-2" />0
                </span>
                <p>Pending Assignment</p>
              </>
            )}
          </CContainer>
          <CContainer className="upperData-section">
            {route ? (
              <>
                <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                  <RiBriefcase2Fill className="text-dark fs-5 me-2" />
                  {route?.UpperData?.Active}
                </span>
                <p>Active Orders</p>
              </>
            ) : (
              <>
                <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                  <RiBriefcase2Fill className="text-dark fs-5 me-2" />0
                </span>
                <p>Active Orders</p>
              </>
            )}
          </CContainer>
          <CContainer className="upperData-section">
            {route ? (
              <>
                <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                  <TiBusinessCard className="text-dark fs-5 me-2" />
                  {route?.UpperData?.Active_Customers}
                </span>
                <p>Active Customer</p>
              </>
            ) : (
              <>
                <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                  <TiBusinessCard className="text-dark fs-5 me-2" />0
                </span>
                <p>Active Customer</p>
              </>
            )}
          </CContainer>
          <CContainer className="upperData-section">
            {route ? (
              <>
                <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                  <TiBusinessCard className="text-dark fs-5 me-2" />
                  {route?.UpperData?.Active_Agents}
                </span>
                <p>Active Agents</p>
              </>
            ) : (
              <>
                <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                  <TiBusinessCard className="text-dark fs-5 me-2" />0
                </span>
                <p>Active Agents</p>
              </>
            )}
          </CContainer>
        </CContainer>
        <CContainer className="d-flex mt-5 justify-content-between align-items-center">
          <CContainer className="mt-3">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "activeLink   fs-6 text-decoration-none text-black font-weight-bold"
                  : "normalLink   fs-6"
              }
              to="/dispatcher/route/pending"
              onClick={() => dispatch(getRoutes("pending"))}
            >
              Pending
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "activeLink ms-4 fs-6 text-decoration-none text-black font-weight-bold"
                  : "normalLink ms-4 fs-6"
              }
              to="/dispatcher/route/active"
              onClick={() => dispatch(getRoutes("active"))}
            >
              Active
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "activeLink ms-4 fs-6 text-decoration-none text-black font-weight-bold"
                  : "normalLink ms-4 fs-6"
              }
              to="/dispatcher/route/history"
              onClick={() => dispatch(getRoutes("delivered"))}
            >
              History
            </NavLink>
          </CContainer>
          <CContainer className="d-flex justify-content-end align-items-center w-75">
            <CFormInput
              type="search"
              maxLength={100}
              className="w-75 border border-dark"
              placeholder="Search by Customer Name..."
              value={pathLoaction}
              onChange={(e) =>
                {dispatch(
                  searchRoutes({ currentStatus, name: e.target.value.trim() })
                ); setPathLoaction(e.target.value)}
              }
            />
          </CContainer>
        </CContainer>
        <Outlet></Outlet>
      </CCardBody>
      <ConfirmationModel />
      <AssignDriver />
    </CCard>
  );
};

export default Routes;
