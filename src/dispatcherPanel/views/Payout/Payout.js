import { CButton, CCard, CCardBody, CContainer, CLink } from '@coreui/react'
import React from 'react'
import { BiExport } from "react-icons/bi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import {NavLink,Outlet} from "react-router-dom"
const Payout = () => {
  const payout = useSelector((state) => state.payout.payoutList);

  return (
    <CCard>
      <CCardBody>
        <CContainer className="d-flex justify-content-end gap-3 mb-4">
          <CButton color="info" className="button-size d-flex justify-content-center align-items-center">
            <CLink
              className="text-decoration-none text-white"
              href={`https://delivery-app.softprodigyphp.in/export_payout`}
              download="filename.csv"
            >
              <BiExport className="me-1 button-icon" />
              Export
            </CLink>
          </CButton>
        </CContainer>
        <CContainer className="d-flex justify-content-between align-items-center w-100 text-center fs-6">
          <CContainer className="upperData-section">
            {payout ? (
              <>
                <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                  <FaMoneyCheckAlt className="text-dark fs-5 me-2" />{" "}
                  {payout?.totalOrderValue}
                </span>
                <p className="text-black">Total Order</p>
              </>
            ) : (
              <>
                <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                  <FaMoneyCheckAlt className="text-dark fs-5 me-2" /> 0
                </span>
                <p className="text-black">Total Order</p>
              </>
            )}
          </CContainer>
          <CContainer className="upperData-section">
            {payout ? (
              <>
                <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                  <FaMoneyCheckAlt className="text-dark fs-5 me-2" />{" "}
                  {payout?.pendingPayoutValues}
                </span>
                <p className="text-black">Pending Payout</p>
              </>
            ) : (
              <>
                <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                  <FaMoneyCheckAlt className="text-dark fs-5 me-2" /> 0
                </span>
                <p className="text-black">Pending Payout</p>
              </>
            )}
          </CContainer>
          <CContainer className="upperData-section">
            {payout ? (
              <>
                <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                  <FaMoneyCheckAlt className="text-dark fs-5 me-2" />{" "}
                  {payout?.completedPayoutValue}
                </span>
                <p className="text-black">Completed Payout</p>
              </>
            ) : (
              <>
                <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                  <FaMoneyCheckAlt className="text-dark fs-5 me-2" /> 0
                </span>
                <p className="text-black">Completed Payout</p>
              </>
            )}
          </CContainer>
        </CContainer>
        <CContainer className="d-flex mt-5 justify-content-between align-items-center mb-3">
          <CContainer>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "activeLink  me-4 fs-6 text-decoration-none text-black font-weight-bold"
                  : "normalLink  me-4 fs-6"
              }
              to="/dispatcher/payout/pending"
            >
              Pending
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "activeLink fs-6 text-decoration-none text-black font-weight-bold"
                  : "normalLink  fs-6"
              }
              to="/dispatcher/payout/completed"
            >
              Completed
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "activeLink ms-4 me-4 fs-6 text-decoration-none text-black font-weight-bold"
                  : "normalLink ms-4 me-4 fs-6"
              }
              to="/dispatcher/payout/failed"
            >
              Failed
            </NavLink>
          </CContainer>
        </CContainer>
        {/* <div style={{ marginTop: "15px" }}>
        </div> */}
        <Outlet></Outlet>
      </CCardBody>
    </CCard>
  )
}

export default Payout