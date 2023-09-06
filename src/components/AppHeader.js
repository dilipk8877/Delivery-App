import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
import { cilMenu } from "@coreui/icons";

import { AppBreadcrumb } from "./index";
import { AppHeaderDropdown } from "./header/index";
import { toggleSideNav } from "src/features/sideNav/sideNavSlice";

const AppHeader = () => {
  const dispatch = useDispatch();
  const [urlPath, setUrlPath] = useState();
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    const splitLocation = pathname?.split("/");
    if (splitLocation[1] === "dashboard") {
      setUrlPath("Dashboard");
    } else if (
      splitLocation[1] === "order" ||
      splitLocation[1] === "order" ||
      splitLocation[1] === "order"
    ) {
      setUrlPath("Orders");
    } else if (splitLocation[1] === "merchant") {
      setUrlPath("Merchants");
    } else if (splitLocation[1] === "customer") {
      setUrlPath("Customers");
    } else if (splitLocation[1] === "promocode") {
      setUrlPath("Promocode");
    }
    else if (splitLocation[1] === "profile") {
      setUrlPath("Profile");
    }
    else if (splitLocation[1] === "mobileBanner") {
      setUrlPath("Mobile Banner");
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
          {/* <CIcon icon={logo} height={48} alt="Logo" /> */}
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto ">
          <CNavItem>
            <CNavLink to="/dashboard" className="fs-5 text-dark text-decoration-none">
              {/* {pathname.substring(1).charAt(0).toUpperCase()+ pathname.slice(2) } */}
              {urlPath}
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem color="info">
            <CNavLink
              style={{ textDecoration: "none" }}
              to="/dispatcher/dashboard"
              component={NavLink}
              className="fs-6"
            >
              Dispatcher Panel
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
