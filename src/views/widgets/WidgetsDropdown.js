import React, { useEffect } from "react";
import { CRow, CCol, CWidgetStatsA, CContainer } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboard } from "src/features/Dashboard/DashboardSlice";

const WidgetsDropdown = () => {
  const { stats } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getDashboard(userdata));
  }, []);

  return (
    <CRow >
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="pb-2 mb-4"
          color="success"
          title="Delivered Order"
          value={
            stats?.deliveries?.deliveredOrders ? (
              <span className="fs-4">{stats.deliveries?.deliveredOrders}</span>
            ) : (
              <span className="fs-4">0</span>
            )
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="pb-2 mb-4"
          color="info"
          title="Active Order"
          value={
            stats?.deliveries?.activeOrders ? (
              <span className="fs-4">{stats.deliveries?.activeOrders}</span>
            ) : (
              <span className="fs-4">0</span>
            )
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="pb-2 mb-4"
          color="warning"
          title="Pending Order"
          value={
            stats?.deliveries?.pendingOrders ? (
              <span className="fs-4">{stats.deliveries?.pendingOrders}</span>
            ) : (
              <span className="fs-4">0</span>
            )
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="pb-2 mb-4"
          color="danger"
          title="Cancelled Order"
          value={
            stats?.deliveries?.cancelledOrders ? (
              <span className="fs-4">{stats.deliveries?.cancelledOrders}</span>
            ) : (
              <span className="fs-4">0</span>
            )
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="pb-2 mb-4"
          color="info"
          title="Total Merchant"
          value={
            stats?.vendors?.totalMerchants ? (
              <span className="fs-4">{stats?.vendors?.totalMerchants}</span>
            ) : (
              <span className="fs-4">0</span>
            )
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="pb-2 mb-4"
          color="success"
          title="Active Merchant"
          value={
            stats?.vendors?.active ? (
              <span className="fs-4">{stats?.vendors.active}</span>
            ) : (
              <span className="fs-4">0</span>
            )
          }
        />
      </CCol>

      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="pb-2 mb-4"
          color="danger"
          title="Blocked Merchant"
          value={
            stats?.vendors?.blocked ? (
              <span className="fs-4">{stats?.vendors.blocked}</span>
            ) : (
              <span className="fs-4">0</span>
            )
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="pb-2 mb-4"
          color="warning"
          title="Awaiting Merchant"
          value={
            stats?.vendors?.awaiting ? (
              <span className="fs-4">{stats?.vendors.awaiting}</span>
            ) : (
              <span className="fs-4">0</span>
            )
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="pb-2 mb-4"
          color="dark"
          title="Customers"
          value={
            stats?.misc?.customers ? (
              <span className="fs-4">{stats?.misc.customers}</span>
            ) : (
              <span className="fs-4">0</span>
            )
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="pb-2 mb-4"
          color="dark"
          title="Agents"
          value={
            stats?.agents?.totalAgents ? (
              <span className="fs-4">{ stats?.agents?.totalAgents}</span>
            ) : (
              <span className="fs-4">0</span>
            )
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="pb-2 mb-4"
          color="primary"
          title="Teams"
          value={
            stats?.teams?.totalTeams ? (
              <span className="fs-4">{stats?.teams?.totalTeams}</span>
            ) : (
              <span className="fs-4">0</span>
            )
          }
        />
      </CCol>
    </CRow>
  );
};

export default WidgetsDropdown;
