import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
// profile
const Profile = React.lazy(() => import("./views/Profile/Profile"));

// all orders
const All_order = React.lazy(() => import("./views/Orders/All_order"));
const Active = React.lazy(() => import("./views/Orders/orders/Active"));
const Pending = React.lazy(() => import("./views/Orders/orders/Pending"));
const History = React.lazy(() => import("./views/Orders/orders/history"));

// return request
const return_request = React.lazy(() =>
  import("./views/ReturnRequest/ReturnRequest")
);
const PendingRequest = React.lazy(() =>
  import("./views/ReturnRequest/component/PendingRequest")
);
const AcceptedRequests = React.lazy(() =>
  import("./views/ReturnRequest/component/AcceptedRequests")
);
const RejectedRequests = React.lazy(() =>
  import("./views/ReturnRequest/component/RejectedRequests")
);

const cancelOrder = React.lazy(() =>
  import("./views/cancelOrderRequest/CancelOrder")
);
const pendingCancelOrder = React.lazy(() =>
  import("./views/cancelOrderRequest/cancelOrder/Pending")
);
const acceptedCancelOrder = React.lazy(() =>
  import("./views/cancelOrderRequest/cancelOrder/Accepted")
);
const rejectedCancelOrder = React.lazy(() =>
  import("./views/cancelOrderRequest/cancelOrder/Rejected")
);

// merchants
const merchant = React.lazy(() => import("./views/Merchants/Merchants"));
const Actives = React.lazy(() => import("./views/Merchants/Active"));
const Awaiting = React.lazy(() => import("./views/Merchants/Awaiting"));
const Blocked = React.lazy(() => import("./views/Merchants/Blocked"));

const PromoCode = React.lazy(() => import("./views/PromoCode/PromoCode"));
const MobileBanner = React.lazy(() =>
  import("./views/mobileBanner/MobileBanner")
);
const Customer = React.lazy(() => import("./views/Customers/customer"));

const Widgets = React.lazy(() => import("./views/widgets/Widgets"));

const routes = [
  { path: "/dashboard", exact: true, name: "Dashboard" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/merchant", name: "Merchant", element: merchant },
  { path: "/widgets", name: "Widgets", element: Widgets },
  { path: "/customer", name: "Customer", element: Customer },
  { path: "/profile", name: "Profile", element: Profile },
  { path: "/order/manage_order", name: "Manage Order", element: All_order },
  {
    path: "/order/manage_order/history",
    name: "history",
    element: History,
    exact: true,
  },
  {
    path: "/order/manage_order/active",
    name: "active",
    element: Active,
    exact: true,
  },
  {
    path: "/order/manage_order/pending",
    name: "pending",
    element: Pending,
  },
  {
    path: "/order/return_order",
    name: "Return Order",
    element: return_request,
  },
  {
    path: "/order/return_order/pending_request",
    name: "Pending Requests",
    element: PendingRequest,
  },
  {
    path: "/order/return_order/accepted_request",
    name: "Accepted Requests",
    element: AcceptedRequests,
  },
  {
    path: "/order/return_order/rejected_request",
    name: "Rejected Requests",
    element: RejectedRequests,
  },
  {
    path: "/order/cancel_Order",
    name: "Cancel Order",
    element: cancelOrder,
  },
  {
    path: "/order/cancel_Order/pending",
    name: "Pending",
    element: pendingCancelOrder,
  },
  {
    path: "/order/cancel_Order/accepted",
    name: "Accepted",
    element: acceptedCancelOrder,
  },
  {
    path: "/order/cancel_Order/rejected",
    name: "Rejected",
    element: rejectedCancelOrder,
  },
  { path: "/promocode", name: "Promocode", element: PromoCode },
  { path: "/mobileBanner", name: "Mobile Banner", element: MobileBanner },
  { path: "/merchant/active", name: "Active", element: Actives },
  { path: "/merchant/awaiting", name: "Awaiting", element: Awaiting },
  { path: "/merchant/blocked", name: "Blocked", element: Blocked },
];

export const modify_routes = [
  { path: "/dashboard", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/widgets", name: "Widgets", element: Widgets },
  { path: "/customer", name: "Active", element: Customer },
  {
    path: "/order/manage_order",
    name: "Manage Order",
    element: All_order,
    child: [
      { path: "history", name: "history", element: History, exact: true },
      { path: "active", name: "active", element: Active, exact: true },
      { path: "pending", name: "pending", element: Pending },
    ],
  },
  {
    path: "/order/return_order",
    name: "Return Request",
    element: return_request,
    child: [
      {
        path: "pending_request",
        name: "Pending Requests",
        element: PendingRequest,
        exact: true,
      },
      {
        path: "accepted_request",
        name: "Accepted Requests",
        element: AcceptedRequests,
        exact: true,
      },
      {
        path: "rejected_request",
        name: "Rejected Requests",
        element: RejectedRequests,
        exact: true,
      },
    ],
  },
  {
    path: "/merchant",
    name: "Merchant",
    element: merchant,
    child: [
      {
        path: "/merchant/active",
        name: "Actives",
        element: Actives,
        exact: true,
      },
      {
        path: "/merchant/awaiting",
        name: "Awaiting",
        element: Awaiting,
        exact: true,
      },
      {
        path: "/merchant/blocked",
        name: "Blocked",
        element: Blocked,
        exact: true,
      },
    ],
  },
  {
    path: "/order/cancel_Order",
    name: "cancel Order",
    element: cancelOrder,
    child: [
      {
        path: "/order/cancel_Order/pending",
        name: "Pending",
        element: pendingCancelOrder,
        exact: true,
      },
      {
        path: "/order/cancel_Order/accepted",
        name: "Accepted",
        element: acceptedCancelOrder,
        exact: true,
      },
      {
        path: "/order/cancel_Order/rejected",
        name: "Rejected",
        element: rejectedCancelOrder,
        exact: true,
      },
    ],
  },
  { path: "/promocode", name: "PromoCode", element: PromoCode },
  { path: "/mobileBanner", name: "Mobile Banner", element: MobileBanner },

  { path: "/profile", name: "Profile", element: Profile },
];
export default routes;
