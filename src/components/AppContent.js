import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CContainer } from "@coreui/react";

// routes config
import { modify_routes } from "../routes";
import Spinner from "src/spinner/Spinner";

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<Spinner color="primary" />}>
        <Routes>
          {modify_routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                >
                  {route.child &&
                    route.child.map((childRoute, idx) => {
                      return (
                        <Route
                          key={idx}
                          path={childRoute.path}
                          exact={childRoute.exact}
                          name={childRoute.name}
                          element={<childRoute.element />}
                        />
                      )
                    })}
                </Route>
              )
            );
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  );
};

export default React.memo(AppContent);
