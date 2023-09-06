import React, { useEffect } from "react";
import { CSidebar, CSidebarBrand, CSidebarNav } from "@coreui/react";

import { AppSidebarNav } from "./AppSidebarNav";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import { useDispatch, useSelector } from "react-redux";
import { visibleTriggerHandler } from "src/features/sideNav/sideNavSlice";
import { sidebarPermissionForSubAdmin } from "src/features/manageManager/ManagerSlice";
import CIcon from "@coreui/icons-react";
import {
  cilBolt,
  cilCommand,
  cilMap,
  cilSpeedometer,
  cilStream,
  cilTruck,
  cilVector,
  cilWallet,
} from "@coreui/icons";
import { CNavItem, CNavTitle } from "@coreui/react";
import Spinner from "src/spinner/Spinner";

const AppSidebar = () => {
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const { open } = useSelector((store) => store.sideNav);
  const dispatch = useDispatch();
  const { sidebarPerm, isLoader } = useSelector((state) => state.manager);
  useEffect(() => {
    dispatch(sidebarPermissionForSubAdmin());
  }, []);
  const { currentPage } = useSelector((state) => state.agent);
  const { currentRoutePage } = useSelector((state) => state.route);

  const route = sidebarPerm?.permissions?.some(
    (item) => item.entity_name === "Route"
  );
  const teams = sidebarPerm?.permissions?.some(
    (item) => item.entity_name === "Teams"
  );
  const agent = sidebarPerm?.permissions?.some(
    (item) => item.entity_name === "Agents"
  );
  const AutoAllocation = sidebarPerm?.permissions?.some(
    (item) => item.entity_name === "Auto Allocation"
  );
  // const payout = sidebarPerm?.permissions?.some(
  //   (item) => item.entity_name === "Payout"
  // );
  const geoFence = sidebarPerm?.permissions?.some(
    (item) => item.entity_name === "Geo Fence"
  );
  const pricingRule = sidebarPerm?.permissions?.some(
    (item) => item.entity_name === "Pricing Rule"
  );
  const manager =
    localStorage.getItem("id") === "3272f6ed-aef3-4488-8a56-14226de07825";

  const navigation = [
    {
      component: CNavItem,
      name: "Dashboard",
      to: "/dispatcher/dashboard",
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },
    route
      ? {
          component: CNavItem,
          name: "Route",
          to: `/dispatcher/route/${currentRoutePage || "pending"}`,
          icon: <CIcon icon={cilStream} customClassName="nav-icon" />,
        }
      : {
          component: CNavItem,
        },
    teams
      ? {
          component: CNavItem,
          name: "Teams",
          to: "/dispatcher/teams",
          icon: <CIcon icon={cilBolt} customClassName="nav-icon" />,
        }
      : {
          component: CNavItem,
        },
    agent
      ? {
          component: CNavItem,
          name: "Agent",
          to: `/dispatcher/agent/${currentPage || "active"}`,
          icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
        }
      : {
          component: CNavItem,
        },
    // payout
    //   ? {
    //       component: CNavItem,
    //       name: "Payout",
    //       to: "/dispatcher/payout/pending",
    //       icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    //     }
    //   : {
    //       component: CNavItem,
    //     },
    AutoAllocation
      ? {
          component: CNavItem,
          name: "Auto Allocation",
          to: "/dispatcher/autoAllocation",
          icon: <CIcon icon={cilVector} customClassName="nav-icon" />,
        }
      : {
          component: CNavItem,
        },
    pricingRule
      ? {
          component: CNavItem,
          name: "Pricing Rule",
          to: "/dispatcher/pricingRule",
          icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
        }
      : {
          component: CNavItem,
        },
    geoFence
      ? {
          component: CNavItem,
          name: "Geo Fence",
          to: "/dispatcher/geoFence",
          icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
        }
      : {
          component: CNavItem,
        },
    manager
      ? {
          component: CNavItem,
          name: "Manage Manager",
          to: "/dispatcher/manageManager",
          icon: <CIcon icon={cilCommand} customClassName="nav-icon" />,
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
