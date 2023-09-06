import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CCard, CCardBody, CContainer, CForm, CFormInput } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrders,
  setEndDate,
  setSearchInput,
  setStartDate,
} from "src/features/Orders/OrderSlice";

import { DateRangePicker } from "rsuite";
import moment from "moment";

const All_order = () => {
  const { searchInput, startDate, endDate } = useSelector(
    (state) => state.orders
  );

  const dispatch = useDispatch();

  return (
    <CCard className="auto">
      <CCardBody>
        <CContainer className="d-flex justify-content-end mt-2">
          <CForm className="d-flex">
            <DateRangePicker
              showOneCalendar
              format="dd-MM-yyyy"
              className="ms-4 rounded border border-dark"
              onChange={(date) => {
                if (date === null) {
                  dispatch(setStartDate(""));
                  dispatch(setEndDate(""));
                } else {
                  return date.forEach((item, index) => {
                    if (index === 0) {
                      dispatch(setStartDate(moment(item).format("YYYY-MM-DD")));
                    }
                    if (index === 1) {
                      dispatch(setEndDate(moment(item).format("YYYY-MM-DD")));
                    }
                  });
                }
              }}
            />
            <CFormInput
              type="search"
              maxLength={50}
              className="me-2 ms-2 border border-dark w-50"
              placeholder="Search by Customer Name..."
              onChange={(e) => dispatch(setSearchInput(e.target.value.trim()))}
            />
          </CForm>
        </CContainer>
        <CContainer className="mt-5" active>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeLink  me-4 fs-6 text-decoration-none text-black"
                : "normalLink  me-4 fs-6"
            }
            to="/order/manage_order/pending"
            onClick={() => {
              dispatch(
                getAllOrders({
                  status: "pending",
                  searchInput,
                  startDate,
                  endDate,
                })
              );
            }}
          >
            Pending
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeLink ms-4 me-4 fs-6 text-decoration-none text-black font-weight-bold"
                : "normalLink ms-4 me-4 fs-6"
            }
            to="/order/manage_order/active"
            onClick={() => {
              dispatch(
                getAllOrders({
                  status: "active",
                  searchInput,
                  startDate,
                  endDate,
                })
              );
            }}
          >
            Active
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeLink ms-4 fs-6 text-decoration-none text-black font-weight-bold"
                : "normalLink ms-4 fs-6"
            }
            to="/order/manage_order/history"
            onClick={() => {
              dispatch(
                getAllOrders({
                  status: "delivered",
                  searchInput,
                  startDate,
                  endDate,
                })
              );
            }}
          >
            History
          </NavLink>
        </CContainer>
        <Outlet></Outlet>
      </CCardBody>
    </CCard>
  );
};

export default All_order;
