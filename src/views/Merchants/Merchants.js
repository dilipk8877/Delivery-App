import {
  CButton,
  CCard,
  CCardBody,
  CCardText,
  CContainer,
  CFormInput,
  CLink,
} from "@coreui/react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getMerchant,
  openImportModal,
  openModal,
  searchMerchant,
  setCurrentStatus,
} from "src/features/Merchants/merchantSlice";
import { MdHomeWork } from "react-icons/md";
import { RiBriefcase2Fill } from "react-icons/ri";
import { TiBusinessCard } from "react-icons/ti";
import Add from "./modal/Add";
import Import from "./modal/Import";
import { BiImport } from "react-icons/bi";
import ConfirmMessage from "./modal/ConfirmMessage";
import Spinner from "src/spinner/Spinner";
import { useEffect, useState } from "react";

const Merchant = () => {
  const { merchant, currentStatus, page, isLoader } = useSelector(
    (store) => store.merchants
  );
  const [pathLoaction, setPathLoaction] = useState("");
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  useEffect(() => {
    setPathLoaction("");
  }, [pathname]);

  const handleDispatchActive = () => {
    dispatch(setCurrentStatus({ status: "isActive=1" }));
    dispatch(getMerchant({ status: "isActive=1" }));
  };

  const handleDispatchAwaiting = () => {
    dispatch(setCurrentStatus({ status: "isAwaiting=0" }));
    dispatch(getMerchant({ status: "isAwaiting=0" }));
  };
  const handleDispatchBlocked = () => {
    dispatch(setCurrentStatus({ status: "isBlocked=1" }));
    dispatch(getMerchant({ status: "isBlocked=1" }));
  };


  return (
    <>
      <CCard className="mb-4">
        {isLoader ? (
          <Spinner color="primary" className="modal-spinner" />
        ) : null}
        <CCardBody>
          <CContainer className="d-flex justify-content-end align-items-center gap-3 mb-4">
          {/* <CButton 
              className="text-info cursor"
              onClick={handleDownload}
            >
              Sample Download
            </CButton> */}
            <CButton
              className="button-size justify-content-center align-items-center text-white text-white"
              color="info"
              onClick={() => dispatch(openImportModal())}
            >
              <BiImport className="me-1 button-icon" />
              Import
            </CButton>
            <CButton
              className="button-size justify-content-center align-items-center text-white text-white"
              color="info"
              onClick={() => dispatch(openModal())}
            >
              <BsFillPlusCircleFill className="me-1 button-icon" />
              Add
            </CButton>
          </CContainer>
          <CContainer className="d-flex justify-content-between align-items-center text-center fs-6">
            <CContainer className="upperData-section">
              {merchant ? (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <MdHomeWork className="text-dark fs-5 me-2" />
                    {merchant.totalMerchants}
                  </span>
                  <p className="text-black">Total Merchants</p>
                </>
              ) : (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <MdHomeWork className="text-dark fs-5 me-2" />0
                  </span>
                  <p className="text-black">Total Merchants</p>
                </>
              )}
            </CContainer>
            <CContainer className="upperData-section">
              {merchant ? (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <RiBriefcase2Fill className="text-dark fs-5 me-2" />
                    {merchant.openMerchants}
                  </span>
                  <p className="text-black">Open Merchants</p>
                </>
              ) : (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <RiBriefcase2Fill className="text-dark fs-5 me-2" />0
                  </span>
                  <p className="text-black">Open Merchants</p>
                </>
              )}
            </CContainer>
            <CContainer className="upperData-section">
              {merchant ? (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <TiBusinessCard className="text-dark fs-5 me-2" />
                    {merchant.totalProducts}
                  </span>
                  <p className="text-black">Total Orders</p>
                </>
              ) : (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <TiBusinessCard className="text-dark fs-5 me-2" />0
                  </span>
                  <p className="text-black">Total Orders</p>
                </>
              )}
            </CContainer>
            <CContainer className="upperData-section">
              {merchant ? (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <TiBusinessCard className="text-dark fs-5 me-2" />
                    {merchant.totalActiveOrders}
                  </span>
                  <p className="text-black">Total Active Order</p>
                </>
              ) : (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <TiBusinessCard className="text-dark fs-5 me-2" />0
                  </span>
                  <p className="text-black">Total Active Order</p>
                </>
              )}
            </CContainer>
          </CContainer>
          <CContainer className="d-flex mt-5 justify-content-between align-items-center">
            <CContainer>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "activeLink  fs-6 text-decoration-none text-black font-weight-bold"
                    : "normalLink  fs-6"
                }
                to="/merchant/active"
                onClick={handleDispatchActive}
              >
                Active
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "activeLink ms-4 fs-6 text-decoration-none text-black font-weight-bold"
                    : "normalLink ms-4 fs-6"
                }
                to="/merchant/awaiting"
                onClick={handleDispatchAwaiting}
              >
                Awaiting Approval
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "activeLink ms-4 me-4 fs-6 text-decoration-none text-black font-weight-bold"
                    : "normalLink ms-4 me-4 fs-6"
                }
                to="/merchant/blocked"
                onClick={handleDispatchBlocked}
              >
                Blocked
              </NavLink>
            </CContainer>
            <CFormInput
              type="search"
              maxLength={100}
              className="w-50 mb-3 border border-dark"
              placeholder="Search by Merchant Name..."
              value={pathLoaction}
              onChange={(e) =>
               { dispatch(
                  searchMerchant({
                    currentStatus,
                    search: e.target.value.trim(),
                  })
                );setPathLoaction(e.target.value)}
              }
            />
          </CContainer>
          <Outlet></Outlet>
          <Import />
          <Add />
          <ConfirmMessage />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Merchant;
