import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormInput,
  CImage,
  CRow,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "src/features/profile/ProfileSlice";
import { useFormik } from "formik";
import Spinner from "src/spinner/Spinner";
import PhoneInput from "react-phone-number-input";
import { ProfileSchema } from "src/validateSchema/Schema";
import { toast } from "react-toastify";
import { isValidPhoneNumber } from "react-phone-number-input";
import { isPossiblePhoneNumber } from "react-phone-number-input";

const Profile = () => {
  const { profileList, isLoader } = useSelector((state) => state.profile);
  const [logoImage, setLogoImage] = useState();
  const [mobileNumber, setMobileNumber] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      profileImage: profileList?.profileImage ? profileList?.profileImage : "",
      first_name: profileList?.data?.first_name
        ? profileList?.data?.first_name
        : "",
      last_name: profileList?.data?.last_name
        ? profileList?.data?.last_name
        : "",
      mobile:
        profileList?.data && profileList?.data?.mobile
          ? profileList?.data?.mobile
          : "",
      company_address: profileList?.data?.company_address
        ? profileList?.data?.company_address
        : "",
      company_name: profileList?.data?.company_name
        ? profileList?.data?.company_name
        : "",
      short_code: profileList?.data?.short_code
        ? profileList?.data?.short_code
        : "",
      country: profileList?.data?.country ? profileList?.data?.country : "",
    },
    enableReinitialize: true,
    validationSchema: ProfileSchema,
    onSubmit: (data) => {
      console.log(data)
      dispatch(updateProfile({ data, id: profileList?.data?.userId }));
    },
  });

  // const handlerMobile = () => {
  //   if (mobileNumber === undefined) {
  //     toast.error("Please enter a valid mobile number");
  //   }
  // };

  return (
    <>
      <CCard className="mb-4">
        {isLoader ? (
          <Spinner color="primary" className="modal-spinner" />
        ) : null}
        <CCardBody>
          <CForm onSubmit={handleSubmit}>
            <CRow>
              <CCol md={12}>
                <label>
                  Upload Profile<span className="text-danger">*</span>
                </label>
                <CCol md={6} className="d-flex align-items-end mb-2">
                  {profileList?.data && (
                    <CImage
                      src={
                        logoImage
                          ? logoImage
                          : `https://delivery-app.softprodigyphp.in/upload/${profileList?.data?.thumbnail}`
                      }
                      alt="Logo"
                      width={150}
                      height={100}
                      className="profile-upload"
                    />
                  )}
                  <CFormInput
                    type="file"
                    className="w-50 ms-4 "
                    name="profileImage"
                    accept=".png, .jpg, .jpeg"
                    onBlur={handleBlur}
                    // value={values.profileImage}
                    onChange={(e) => {
                      setLogoImage(URL.createObjectURL(e.target.files[0]));
                      setFieldValue("profileImage", e.currentTarget.files[0]);
                    }}
                  />
                </CCol>
                <div className="error-container">
                  {touched.profileImage && errors.profileImage ? (
                    <span className="validtion-error">
                      {errors.profileImage}
                    </span>
                  ) : null}
                </div>
              </CCol>
              <CCol md={4} className="mt-2">
                <label className="">
                  Short Code <span className="text-danger">*</span>
                </label>
                <CFormInput
                  type="text"
                  value={values.short_code || ""}
                  name="short_code"
                  maxLength={6}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="error-container">
                  {touched.short_code && errors.short_code ? (
                    <span className="validtion-error">{errors.short_code}</span>
                  ) : null}
                </div>
              </CCol>
              <CCol md={4} className="mt-2">
                <label className="mb-2">
                  First Name<span className="text-danger">*</span>
                </label>
                <CFormInput
                  type="text"
                  value={values.first_name}
                  name="first_name"
                  maxLength={30}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="error-container">
                  {touched.first_name && errors.first_name ? (
                    <span className="validtion-error">{errors.first_name}</span>
                  ) : null}
                </div>
              </CCol>{" "}
              <CCol md={4} className="mt-2">
                <label className="mb-2">
                  Last Name<span className="text-danger">*</span>
                </label>
                <CFormInput
                  type="text"
                  value={values.last_name}
                  name="last_name"
                  maxLength={30}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="error-container">
                  {touched.last_name && errors.last_name ? (
                    <span className="validtion-error">{errors.last_name}</span>
                  ) : null}
                </div>
              </CCol>{" "}
              <CCol md={4} className="mt-2">
                <label className="mb-2">
                  Email<span className="text-danger">*</span>
                </label>
                <CFormInput
                  type="text"
                  value={profileList?.data?.email || ""}
                  readOnly
                />
              </CCol>
              <CCol md={4} className="mt-2">
                <label className="mb-2">
                  Contact Number<span className="text-danger">*</span>
                </label>
                <PhoneInput
                  international
                  defaultCountry="IN"
                  id="validationServer03"
                  name="mobile"
                  value={values.mobile || ""}
                  onChange={(e) => {
                    setFieldValue("mobile", e);
                    setMobileNumber(e);
                  }}

                  // onBlur={handleBlur}
                />
                <div className="error-container">
                  <span className="validtion-error">
                    {values.mobile
                      ? isValidPhoneNumber(values.mobile)
                        ? undefined
                        : "Invalid phone number"
                      : "Phone number required"}
                  </span>
                </div>
                {/* <div className="error-container">
                  {touched.mobile && errors.mobile ? (
                    <span className="validtion-error">{errors.mobile}</span>
                  ) : null}
                </div> */}
              </CCol>{" "}
              <CCol md={4} className="mt-2">
                <label className="mb-2">
                  Company Address<span className="text-danger">*</span>
                </label>
                <CFormInput
                  type="text"
                  value={values.company_address || ""}
                  name="company_address"
                  maxLength={100}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="error-container">
                  {touched.company_address && errors.company_address ? (
                    <span className="validtion-error">
                      {errors.company_address}
                    </span>
                  ) : null}
                </div>
              </CCol>
              <CCol md={4} className="mt-2">
                <label className="mb-2">
                  Company Name<span className="text-danger">*</span>
                </label>
                <CFormInput
                  type="text"
                  value={values.company_name || ""}
                  name="company_name"
                  maxLength={100}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="error-container">
                  {touched.company_name && errors.company_name ? (
                    <span className="validtion-error">
                      {errors.company_name}
                    </span>
                  ) : null}
                </div>
              </CCol>{" "}
              <CCol md={4} className="mt-2">
                <label className="mb-2">
                  Country<span className="text-danger">*</span>
                </label>
                <CFormInput
                  type="text"
                  value={values.country || ""}
                  name="country"
                  maxLength={20}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="error-container">
                  {touched.country && errors.country ? (
                    <span className="validtion-error">{errors.country}</span>
                  ) : null}
                </div>
              </CCol>
            </CRow>
            <CCol md={12} className="d-flex justify-content-center mt-4">
              <CButton
                type="submit"
                color="info"
                className="text-white w-25"
                // onClick={handlerMobile}
              >
                Update
              </CButton>
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Profile;
