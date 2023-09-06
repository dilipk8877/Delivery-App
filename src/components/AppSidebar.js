import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CIcon from "@coreui/icons-react";
import {
  cibCmake,
  cibWolfram,
  cilCart,
  cilImageBroken,
  cilPeople,
  cilSpeedometer,
  cilUser,
} from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";
import { CSidebar, CSidebarBrand, CSidebarNav } from "@coreui/react";

import { AppSidebarNav } from "./AppSidebarNav";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config

import { visibleTriggerHandler } from "src/features/sideNav/sideNavSlice";
import { sidebarPermissionForSubAdmin } from "src/features/manageManager/ManagerSlice";
import { getProfile } from "src/features/profile/ProfileSlice";
import Spinner from "src/spinner/Spinner";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const { open } = useSelector((store) => store.sideNav);
  const { sidebarPerm, isLoader } = useSelector((state) => state.manager);
  const { currentMerchantPage } = useSelector((state) => state.merchants);
  const {
    currentManageOrderPage,
    currentReturnOrderPage,
    currentCancelOrderPage,
  } = useSelector((state) => state.orders);
  useEffect(() => {
    dispatch(sidebarPermissionForSubAdmin());
    // dispatch(getProfile());
  }, []);

  const order = sidebarPerm?.permissions?.some(
    (item) => item.entity_name === "Orders"
  );

  const merchant = sidebarPerm?.permissions?.some(
    (item) => item.entity_name === "Merchants"
  );
  const customer = sidebarPerm?.permissions?.some(
    (item) => item.entity_name === "Customers"
  );
  const promocode = sidebarPerm?.permissions?.some(
    (item) => item.entity_name === "Promocode"
  );
  const mobileBanner = sidebarPerm?.permissions?.some(
    (item) => item.entity_name === "Mobile Banner"
  );
  const profile = sidebarPerm?.permissions?.some(
    (item) => item.entity_name === "Profile"
  );

  const navigation = [
    {
      component: CNavItem,
      name: "Dashboard",
      to: "/dashboard",
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },
    order
      ? {
          component: CNavGroup,
          name: "Orders",
          icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
          items: [
            {
              component: CNavItem,
              name: "Manage Orders",
              to: `/order/manage_order/${currentManageOrderPage || "pending"}`,
            },
            {
              component: CNavItem,
              name: "Return Orders",
              to: `/order/return_order/${
                currentReturnOrderPage || "pending_request"
              }`,
            },
            {
              component: CNavItem,
              name: "Cancel Orders",
              to: `/order/cancel_Order/${currentCancelOrderPage || "pending"}`,
            },
          ],
        }
      : {
          component: CNavGroup,
        },
    merchant
      ? {
          component: CNavItem,
          name: "Merchants",
          to: `/merchant/${currentMerchantPage || "active"}`,
          icon: <CIcon icon={cibCmake} customClassName="nav-icon" />,
        }
      : {
          component: CNavItem,
        },
    customer
      ? {
          component: CNavItem,
          name: "Customers",
          to: "/customer",
          icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
        }
      : {
          component: CNavItem,
        },
    promocode
      ? {
          component: CNavItem,
          name: "Promocode",
          to: "/promocode",
          icon: <CIcon icon={cibWolfram} customClassName="nav-icon" />,
        }
      : {
          component: CNavItem,
        },
    mobileBanner
      ? {
          component: CNavItem,
          name: "Mobile Banner",
          to: "/mobileBanner",
          icon: <CIcon icon={cilImageBroken} customClassName="nav-icon" />,
        }
      : {
          component: CNavItem,
        },
    profile
      ? {
          component: CNavItem,
          name: "Profile",
          to: "/profile",
          icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
        }
      : {
          component: CNavItem,
        },
  ];

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={open}
      onVisibleChange={(visible) => {
        dispatch(visibleTriggerHandler(visible));
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <div>
          <span className="fs-2 ">𝓢𝓸𝓯𝓽𝓟𝓻𝓸𝓭𝓲𝓰𝔂</span>
        </div>
      </CSidebarBrand>
      <CSidebarNav>
        {isLoader ? (
          <Spinner color="primary" className="modal-spinner" />
        ) : (
          <SimpleBar>
            <AppSidebarNav items={navigation} />
          </SimpleBar>
        )}
      </CSidebarNav>
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
