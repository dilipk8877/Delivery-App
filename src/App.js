import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import customFetch from "./utils/axiosGet";
import "./App.css";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
const DefaultLayoutD = React.lazy(() =>
  import("./dispatcherPanel/layout/DefaultLayout")
);

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));
import { logOutUser } from "./features/Login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./utils/authHeader";
import PrivateRoute from "./utils/ProtectedRoute";

const App = () => {
  const { isLogin } = useSelector((state) => state.logins);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  // customFetch.interceptors.response.use(undefined, function axiosR(err){
  //   if(err.response.status === 401 ) {
  //     dispatch(logOutUser());
  //   }
  // })

  customFetch.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        dispatch(logOutUser());
      }
      return Promise.reject(error);
    }
  );

  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          {/* <Route exact path="/" name="Login Page" element={<Login />} />
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
          <Route path="/dispatcher/*" name="Home" element={<DefaultLayoutD />} /> */}
          <Route exact path="/" name="Login Page" element={<Login />} />
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="*" element={<DefaultLayout />} />
            <Route path="/dispatcher/*" name="Home" element={<DefaultLayoutD />} /> 
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
