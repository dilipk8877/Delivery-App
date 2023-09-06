import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CContainer } from "@coreui/react";

import route from "../../route";
import Spinner from "src/spinner/Spinner";

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<Spinner color="primary" />}>
        <Routes>
          {route.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
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
          <Route path="/dispatcher" element={<Navigate to="dispatcher/dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  );
};

export default React.memo(AppContent);
