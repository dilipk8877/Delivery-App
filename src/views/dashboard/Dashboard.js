import React, { useEffect } from "react";
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCol,
  CRow,
} from "@coreui/react";
import { CChart } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";
import WidgetsDropdown from "../widgets/WidgetsDropdown";
import {
  getSalesAnalytics,
  setWeekSales,
  setMonthSales,
  setYearSales,
} from "src/features/Dashboard/DashboardSlice";
import { useDispatch, useSelector } from "react-redux";
import { TIME_WINDOW } from "src/utils/constants.util";
import Spinner from "src/spinner/Spinner";


const Dashboard = () => {
  const { salesData, chartLabels,isLoader } = useSelector((store) => store.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSalesAnalytics(TIME_WINDOW.week));
    dispatch(setWeekSales());
  }, []);

  const handleSalesClick = (time) => {
    dispatch(getSalesAnalytics(time));
    if (time === TIME_WINDOW.week) {
      dispatch(setWeekSales());
    }
    if (time === TIME_WINDOW.year) {
      dispatch(setYearSales());
    }
    if (time === TIME_WINDOW.month) {
      dispatch(setMonthSales());
    }
  };
  return (
    <>
     {isLoader ? (
          <Spinner color="primary" className="modal-spinner" />
        ) : null}
      <WidgetsDropdown />
        <CRow>
        </CRow>
          <CCard className="mb-4">
            <CCardBody>
              <CRow>
                <CCol sm={5}>
                  <h5 id="traffic" className="card-title mb-0">
                    Sales Analytics
                  </h5>
                </CCol>
                <CCol sm={7} className="d-none d-md-block">
                  <CButtonGroup className="float-end me-3">
                    {["Year", "Week", "Month"].map((value, idk) => (
                      <CButton
                        color="outline-secondary"
                        id="btngraph"
                        key={idk}
                        onClick={() => handleSalesClick(value)}
                        className="mx-0"
                      >
                        {value}
                      </CButton>
                    ))}
                  </CButtonGroup>
                </CCol>
                <CChart
                  type="bar"
                  data={{
                    labels: chartLabels,
                    datasets: [
                      {
                        label: "deliveries",
                        backgroundColor: hexToRgba(getStyle("--cui-info"), 10),
                        borderColor: getStyle("--cui-info"),
                        pointHoverBackgroundColor: getStyle("--cui-info"),
                        borderWidth: 2,
                        data: salesData,
                        fill: true,
                      },
                    ],
                  }}
                  labels="months"
                />
              </CRow>
            </CCardBody>
          </CCard>
    </>
  );
};

export default Dashboard;
