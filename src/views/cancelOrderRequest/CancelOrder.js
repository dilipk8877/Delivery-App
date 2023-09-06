import { CCard, CCardBody, CContainer } from "@coreui/react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import Spinner from "src/spinner/Spinner";

const CancelOrder = () => {
  const {isLoader} = useSelector((state) => state.cancelOrder);
  return (
    <CCard className="mb-4">
      {isLoader ? <Spinner  className="modal-spinner" />:null}
      <CCardBody>
        <CContainer className="mt-4 mb-2">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeLink  me-4 fs-6 text-decoration-none text-black font-weigth-bold"
                : "normalLink  me-4 fs-6"
            }
            to="/order/cancel_Order/pending"
            // onClick={()=>dispatch(getReturnRequest("pending"))}
          >
            Pending
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeLink  me-4 fs-6 text-decoration-none text-black font-weigth-bold"
                : "normalLink  me-4 fs-6"
            }
            to="/order/cancel_Order/accepted"
            // onClick={()=>dispatch(getReturnRequest("accepted"))}
          >
            Accepted
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeLink  fs-6 text-decoration-none text-black font-weigth-bold"
                : "normalLink  fs-6"
            }
            to="/order/cancel_Order/rejected"
            // onClick={()=>dispatch(getReturnRequest("rejected"))}
          >
            Rejected
          </NavLink>
        </CContainer>
        <Outlet></Outlet>
      </CCardBody>
    </CCard>
  );
};

export default CancelOrder;
