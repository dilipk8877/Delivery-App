import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from "@coreui/icons";

import { AppBreadcrumb } from "./index";
import { AppHeaderDropdown } from "./header/index";
import { toggleSideNav } from "src/features/sideNav/sideNavSlice";
import { useDispatch } from "react-redux";

const AppHeader = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [urlPath, setUrlPath] = useState();
  const { pathname } = location;
  useEffect(() => {
    const splitLocation = pathname?.split("/");
    if (splitLocation[2] === "dashboard") {
      setUrlPath("Dashboard");
    } else if (
      splitLocation[2] === "route"
    ) {
      setUrlPath("Routes");
    } else if (splitLocation[2] === "teams") {
      setUrlPath("Teams");
    } else if (splitLocation[2] === "agent") {
      setUrlPath("Agents");
    } else if (splitLocation[2] === "payout") {
      setUrlPath("Payout");
    }else if (splitLocation[2] === "geoFence") {
      setUrlPath("Geo Fence");
    } else if (splitLocation[2] === "manageManager") {
      setUrlPath("Manage Manager");
    }else if(splitLocation[2] === "autoAllocation"){
      setUrlPath("Auto Allocation")
    }else if(splitLocation[2] === "pricingRule"){
      setUrlPath("Pricing Rule")
    }
    
  }, [pathname]);
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch(toggleSideNav())}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dispatcher"  className="fs-5 text-decoration-none text-dark ">
              {urlPath}
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem color="info">
            <CNavLink
              className="fs-6"
              style={{ textDecoration: "none" }}
              to="/dashboard"
              component={NavLink}
            >
              Admin Panel
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
