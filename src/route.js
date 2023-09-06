import React from "react";

const Dashboard = React.lazy(() =>
  import("./dispatcherPanel/views/Dashboard/Dashboard")
);
//route
const Route = React.lazy(() => import("./dispatcherPanel/views/Route/Routes"));
const PendingRoute = React.lazy(() =>
  import("./dispatcherPanel/views/Route/route/PendingRoute")
);
const ActiveRoute = React.lazy(() =>
  import("./dispatcherPanel/views/Route/route/ActiveRoute")
);
const HistoryRoute = React.lazy(() =>
  import("./dispatcherPanel/views/Route/route/HistoryRoute")
);
const FailedRoute = React.lazy(() =>
  import("./dispatcherPanel/views/Route/route/FailedRoute")
);

const DriverManagement = React.lazy(() =>
  import("./dispatcherPanel/views/teams/Teams")
);
//agent
const Agent = React.lazy(() => import("./dispatcherPanel/views/agent/Agent"));
const ActiveAgent = React.lazy(() =>
  import("./dispatcherPanel/views/agent/agent/Active")
);
const AwaitingAgent = React.lazy(() =>
  import("./dispatcherPanel/views/agent/agent/Awaiting")
);
const BlockedAgent = React.lazy(() =>
  import("./dispatcherPanel/views/agent/agent/Blocked")
);

const Payout = React.lazy(() =>
  import("./dispatcherPanel/views/Payout/Payout")
);
const geoFence = React.lazy(() =>
  import("./dispatcherPanel/views/GeoFence/GeoFence")
);
const AddGeoFence = React.lazy(() =>
  import("./dispatcherPanel/views/GeoFence/Modal/AddGeoFence")
);
const UpdateGeoFence = React.lazy(() =>
  import("./dispatcherPanel/views/GeoFence/Modal/UpdateGeoFence")
);
const Manager = React.lazy(() =>
  import("./dispatcherPanel/views/Manager/Manager")
);
const ViewRoute = React.lazy(() =>
  import("./dispatcherPanel/views/Route/modal/ViewPage")
);
const Pending = React.lazy(() =>
  import("./dispatcherPanel/views/Payout/payout/Pending")
);
const Completed = React.lazy(() =>
  import("./dispatcherPanel/views/Payout/payout/Completed")
);
const Failed = React.lazy(() =>
  import("./dispatcherPanel/views/Payout/payout/Failed")
);
const AddManager = React.lazy(() =>
  import("./dispatcherPanel/views/Manager/modal/AddManager")
);
const UpdateManager = React.lazy(() =>
  import("./dispatcherPanel/views/Manager/modal/UpdateManager")
);
const ViewManager = React.lazy(() =>
  import("./dispatcherPanel/views/Manager/modal/ViewPage")
);
const AutoAllocation = React.lazy(() =>
  import("./dispatcherPanel/views/autoAllocation/AutoAllocation")
);
const PricingRule = React.lazy(() =>
  import("./dispatcherPanel/views/pricingRule/PricingRule")
);
const route = [
  { path: "/dashboard", exact: true, name: "Dashboard" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  {
    path: "/route",
    name: "Route",
    element: Route,
    child: [
      { path: "pending", name: "pending", element: PendingRoute },
      { path: "active", name: "ActiveRoute", element: ActiveRoute },
      { path: "history", name: "HistoryRoute", element: HistoryRoute },
      { path: "failed", name: "FailedRoute", element: FailedRoute },
    ],
  },
  { path: "/viewRoute/:id", name: "ViewRoute", element: ViewRoute },
  { path: "/teams", name: "Teams", element: DriverManagement },
  {
    path: "/agent",
    name: "Agent",
    element: Agent,
    child: [
      { path: "active", name: "ActiveAgent", element: ActiveAgent },
      { path: "awaiting", name: "AwaitingAgent", element: AwaitingAgent },
      { path: "blocked", name: "BlockedAgent", element: BlockedAgent },
    ],
  },
  {
    path: "/payout",
    name: "Payout",
    element: Payout,
    child: [
      { path: "pending", name: "Pending", element: Pending },
      { path: "completed", name: "Completed", element: Completed },
      { path: "failed", name: "Failed", element: Failed },
    ],
  },
  { path: "/autoAllocation", name: "AutoAllocation", element: AutoAllocation },
  { path: "/pricingRule", name: "Pricing Rule", element: PricingRule },
  { path: "/geoFence", name: "Geo Fence", element: geoFence },
  { path: "/geoFence/addGeoFence", name: "AddGeoFence", element: AddGeoFence },
  { path: "/geoFence/updateGeoFence/:id", name: "UpdateGeoFence", element: UpdateGeoFence },
  { path: "/manageManager", name: "Manager", element: Manager },
  {
    path: "/manageManager/addManager",
    name: "AddManager",
    element: AddManager,
  },
  { path: "/manageManager/ViewManager/:id", name: "ViewManager", element: ViewManager },
  {
    path: "/manageManager/updateManager/:id",
    name: "UpdateManager",
    element: UpdateManager,
  },
];

export default route;
