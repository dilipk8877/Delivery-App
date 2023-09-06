import React, { useEffect } from "react";
import {
  CAvatar,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImage,
} from "@coreui/react";
import { cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "src/features/Login/loginSlice";
import { getProfile } from "src/features/profile/ProfileSlice";
import avatar from "../../assets/images/avatars/2.jpg"

const AppHeaderDropdown = () => {
  const { profileList } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const logoutHandler = () => {
    dispatch(logOutUser());
  };

  const profileImage = localStorage.getItem("profileImage")

  const UserFirstName = localStorage.getItem("userFirst");
  const UserLastName = localStorage.getItem("userLast");
  const userType = localStorage.getItem("userType")

  useEffect(() => {
    // if(userType ==="admin"){
    // }
    dispatch(getProfile());
  }, []);
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        {userType === "admin" || "sub_admin" ?(
          <CImage
            src={`https://delivery-app.softprodigyphp.in/upload/${profileImage}`}
            className="profile-image"
          />
        ): <CImage src={avatar} className="profile-image" />}
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Account
        </CDropdownHeader>
        <CDropdownItem className="text-decoration-none cursor" onClick={()=>navigate("/profile")}>
          <CIcon icon={cilUser} className="me-2" />
          {UserFirstName} {UserLastName}
        </CDropdownItem>
        <CDropdownItem href="#">
          <button
            style={{
              border: "none",
              background: "skyblue",
              borderRadius: "5px",
              width: "150px",
              color: "white",
            }}
            onClick={logoutHandler}
          >
            {" "}
            Logout{" "}
          </button>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
