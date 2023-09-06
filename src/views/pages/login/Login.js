import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import truck from "../../../assets/images/truck.jpg";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilEnvelopeClosed } from "@coreui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "src/features/Login/loginSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { LoginSchema } from "src/validateSchema/Schema";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.logins);
  const dispatch = useDispatch();
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: LoginSchema,
      onSubmit: (data) => {
        dispatch(getLogin(data));
      },
    });

  useEffect(() => {
    if (isLogin) {
      navigate("/dashboard");
    }
  }, [isLogin]);

  return (
    <CCard
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <CCard className="ps-4 w-50">
        <CRow>
          <CCol md="6">
            <CForm onSubmit={handleSubmit} className=" pt-3">
              <h1 className="fs-1 mb-2">Login</h1>
              <p className="text-medium-emphasis">Sign In to your account</p>
              <CInputGroup className="mt-4">
                <CFormInput
                  placeholder="Email"
                  autoComplete="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <CInputGroupText>
                  <CIcon icon={cilEnvelopeClosed} />
                </CInputGroupText>
              </CInputGroup>
              {touched.email && errors.email ? (
                <span className="validtion-error">
                  {errors.email}
                </span>
              ) : null}
              <CInputGroup className="pt-4">
                <CFormInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="current-password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <CInputGroupText>
                  {showPassword ? (
                    <AiFillEye
                      className="password-eye-open"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <AiFillEyeInvisible
                      className="password-eye-open"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </CInputGroupText>
              </CInputGroup>
              {touched.password && errors.password ? (
                <span className="validtion-error">
                  {errors.password}
                </span>
              ) : null}
              <CRow className="mt-3">
                <CCol
                  className="d-flex justify-content-center align-items-center "
                >
                  <CButton
                    className="text-white ps-4 pe-4 pt-2 pb-2 mb-2"
                    color="info"
                    type="submit"
                  >
                    Login
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCol>
          <CCol md="6">
            <CCard>
              <img className="login-image"
                src={truck}
                alt=""
              />
            </CCard>
          </CCol>
        </CRow>
      </CCard>
    </CCard>
  );
};

export default Login;
