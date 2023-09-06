import { useEffect, useMemo } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CFormInput,
  CLink,
  CRow,
} from "@coreui/react";
import { MdHomeWork } from "react-icons/md";
import { RiBriefcase2Fill } from "react-icons/ri";
import { TiBusinessCard } from "react-icons/ti";
import { BiImport, BiExport } from "react-icons/bi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  openConfirmModal,
  openEditModal,
  openImportModal,
  openModal,
  searchCustomer,
  setEditUser,
  setSearchField,
} from "src/features/customer/CustomerSlice";
import { activeUsers, userDeleteId } from "src/features/customer/CustomerSlice";
import Switch from "@mui/material/Switch";
import { FaEdit, FaTrash } from "react-icons/fa";
import Add from "./model/Add";
import EditModel from "./model/EditModel";
import ReactTable from "../ReactTable/ReactTable";
import ImportModel from "./model/ImportModel";
import Spinner from "src/spinner/Spinner";
import ConfirmationModel from "./model/ConfirmationModel";
import { useNavigate } from "react-router-dom";
import { sidebarPermissionForSubAdmin } from "src/features/manageManager/ManagerSlice";
import { toast } from "react-toastify";

const customer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((store) => store.users.users);
  const { isLoader } = useSelector((store) => store.users);
  const { sidebarPerm } = useSelector((state) => state.manager);

  const customer = sidebarPerm?.permissions?.some(
    (ele) => ele.entity_name === "Customers"
  );

  useEffect(() => {
    if (!customer) {
      navigate("/dashboard");
    }
    dispatch(sidebarPermissionForSubAdmin());
  }, []);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleEdit = (user) => {
    dispatch(setEditUser(user));
    dispatch(openEditModal());
  };
  const handleDelete = (id) => {
    dispatch(openConfirmModal());
    dispatch(userDeleteId(id));
  };
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: (d) => {
          return (
            <span>
              {d.first_name} {d.last_name}
            </span>
          );
        },
      },
      {
        Header: "Email",
        accessor: (d) => {
          return <span>{d.email == "" ? "--" : <span>{d.email}</span>}</span>;
        },
      },
      {
        Header: "Phone",
        accessor: (d) => {
          return <span>{d.mobile == "" ? "--" : <span>{d.mobile}</span>}</span>;
        },
      },
      {
        Header: "Status",
        disableSortBy: true,
        accessor: (d) => {
          return (
            <Switch
              onChange={() => dispatch(activeUsers(d.id))}
              checked={d.isActive}
            />
          );
        },
      },
      {
        Header: "Action",
        disableSortBy: true,
        accessor: (user) => {
          return (
            <CCardBody className="d-flex justify-content-start align-items-center ps-0 gap-2">
              <FaEdit className="cursor" title="Update Customer" onClick={() => handleEdit(user)} />

              <FaTrash
                className="cursor"
                title="Delete Customer"
                onClick={() => handleDelete(user.id)}
              />
            </CCardBody>
          );
        },
      },
    ],
    []
  );
  const noDataMessage = () => toast.error(`No Customer`);
  return (
    <>
      <CCard className="mb-4">
        {isLoader ? (
          <Spinner color="primary" className="modal-spinner" />
        ) : null}

        <CCardBody>
          <CContainer className="d-flex justify-content-end gap-3 mb-4">
              {users?.users?.length ? (
                <CButton color="info" className="button-size d-flex justify-content-center align-items-center">
                <CLink
                  className="text-decoration-none text-white"
                  href={`https://delivery-app.softprodigyphp.in/exportCSV`}
                  download="filename.csv"
                >
                  <BiExport className="me-1 button-icon" />
                  Export
                </CLink>
                </CButton>
              ) : (
                <CButton color="info" className="button-size" onClick={() => noDataMessage()}>
                <CLink className="text-decoration-none text-white">
                  <BiExport className="me-1 button-icon" />
                  Export
                </CLink>
                </CButton>
              )}
            <CButton
              className="button-size d-flex justify-content-center align-items-center text-white"
              color="info"
              onClick={() => dispatch(openImportModal())}
            >
              <BiImport className="me-1 button-icon" />
              Import
            </CButton>
            <CButton
              className="button-size d-flex justify-content-center align-items-center text-white"
              color="info"
              onClick={() => dispatch(openModal())}
            >
              <BsFillPlusCircleFill className="me-1 button-icon" />
              Add
            </CButton>
          </CContainer>
          <CContainer className="d-flex justify-content-between align-items-center w-100 text-center fs-6">
            <CContainer className="upperData-section">
              {users ? (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <MdHomeWork className="text-dark fs-5 me-2" />{" "}
                    {users?.activeUsers}
                  </span>
                  <p className="text-black">Active User</p>
                </>
              ) : (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <MdHomeWork className="text-dark fs-5 me-2" /> 0
                  </span>
                  <p className="text-black">Active User</p>
                </>
              )}
            </CContainer>
            <CContainer className="upperData-section">
              {users ? (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <RiBriefcase2Fill className="text-dark fs-5 me-2" />{" "}
                    {users?.inActiveUsers}
                  </span>
                  <p className="text-black">Inactive User</p>
                </>
              ) : (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <RiBriefcase2Fill className="text-dark fs-5 me-2" /> 0
                  </span>
                  <p className="text-black">Inactive User</p>
                </>
              )}
            </CContainer>
            <CContainer className="upperData-section">
              {users ? (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <TiBusinessCard className="text-dark fs-5 me-2" />{" "}
                    {users?.socialLogin}
                  </span>
                  <p className="text-black">Social Login Account</p>
                </>
              ) : (
                <>
                  <span className="text-dark fs-6 ms-1 d-flex align-items-center justify-content-center">
                    <TiBusinessCard className="text-dark fs-5 me-2" /> 0
                  </span>
                  <p className="text-black">Social Login Account</p>
                </>
              )}
            </CContainer>
          </CContainer>
          <CRow>
            <CCol sm={7}></CCol>
            <CCol sm={5} className="d-flex justify-content-end">
              <CFormInput
                type="search"
                maxLength={100}
                className="w-75 mt-4 mb-3 border border-dark"
                placeholder="Search by Name..."
                onChange={(e) => {
                  dispatch(searchCustomer({ search: e.target.value.trim() }));
                  dispatch(setSearchField(e.target.value));
                }}
              />
            </CCol>
          </CRow>
          <CCard>
            {true && <ReactTable data={users?.users || []} columns={columns} />}
          </CCard>
          <Add />
          <EditModel />
          <ImportModel />
          <ConfirmationModel />
        </CCardBody>
      </CCard>
    </>
  );
};

export default customer;
