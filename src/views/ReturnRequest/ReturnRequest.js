import { CCard, CCardBody, CContainer} from "@coreui/react";
import React from "react";
import { useDispatch } from "react-redux"
import { NavLink, Outlet } from "react-router-dom";
import { getReturnRequest } from "src/features/ReturnRequest/ReturnRequest";
const return_request = () => {
  const dispatch = useDispatch()
  return (
    <CCard>
      <CCardBody>
        <CContainer className="mt-4 mb-2">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeLink  me-4 fs-6 text-decoration-none text-black font-weigth-bold"
                : "normalLink  me-4 fs-6"
            }
            to="/order/return_order/pending_request"
            onClick={()=>dispatch(getReturnRequest("pending"))}
          >
            Pending Requests
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeLink  me-4 fs-6 text-decoration-none text-black font-weigth-bold"
                : "normalLink  me-4 fs-6"
            }
            to="/order/return_order/accepted_request"
            onClick={()=>dispatch(getReturnRequest("accepted"))}
          >
            Accepted Requests
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeLink  fs-6 text-decoration-none text-black font-weigth-bold"
                : "normalLink  fs-6"
            }
            to="/order/return_order/rejected_request"
            onClick={()=>dispatch(getReturnRequest("rejected"))}
          >
            Rejected Requests
          </NavLink>
        </CContainer>
        <Outlet></Outlet>
      </CCardBody>
    </CCard>
  );
};

export default return_request;
