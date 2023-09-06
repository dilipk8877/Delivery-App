import { CButton, CCard, CCardBody, CContainer } from "@coreui/react";
import React, { useEffect, useMemo } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ReactTable from "src/views/ReactTable/ReactTable";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  DisabledFieldtrue,
  getManagerList,
  openConfirmMessage,
  setDeleteId,
  setPreFieldValue,
  setToggleStausSubmit,
  setToggleStausUpdate,
  toggleUpdateButtonFalse,
  toggleUpdateButtonTrue,
} from "src/features/manageManager/ManagerSlice";
import ConfirmationModel from "./modal/ConfirmationModel";
import Spinner from "src/spinner/Spinner";
const Manager = () => {
  const manager = useSelector((state) => state.manager.managerList);
  const { isLoader } = useSelector((state) => state.manager);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManagerList());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleDelete = (id) => {
    dispatch(openConfirmMessage());
    dispatch(setDeleteId(id));
  };
  const handleManagerId = (id) => {
    navigate(`/dispatcher/manageManager/ViewManager/${id}`);
  };

  const handleEdit = (user) => {
    navigate(`/dispatcher/manageManager/updateManager/${user.id}`);
    dispatch(setToggleStausUpdate());
    dispatch(toggleUpdateButtonFalse());
    dispatch(DisabledFieldtrue());
  };
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: (d) => {
          return (
            <span>
              {d.user.first_name} {d.user.last_name}
            </span>
          );
        },
      },
      {
        Header: "Email",
        accessor: "user.email",
      },
      {
        Header: "Phone",
        accessor: "user.mobile",
      },
      {
        Header: "Status",
        // accessor: "status",
        accessor:d=>{
          return(
            <span>{d.status?.charAt(0).toUpperCase() + d.status?.slice(1)}</span>
          )
        }
      },
      {
        Header: "Action",
        disableSortBy: true,
        accessor: (d) => {
          return (
            <CCardBody className="d-flex justify-content-start align-items-center ps-0 gap-2">
              <FaEdit className="cursor" onClick={() => handleEdit(d.user)} title="update Manager" />
              <MdOutlineRemoveRedEye
                className="cursor fs-6"
                title="Preview Manager"
                onClick={() => handleManagerId(d.user.id)}
              />
              <FaTrash
                className="cursor"
                title="Delete Manager"
                onClick={() => handleDelete(d.user.id)}
              />
            </CCardBody>
          );
        },
      },
    ],
    []
  );
  const handleAddManager = () => {
    navigate("/dispatcher/manageManager/addManager");
    dispatch(toggleUpdateButtonTrue());
    dispatch(setToggleStausSubmit());
  };
  return (
    <>
      <CCard>
        {isLoader ? <Spinner className="modal-spinner" /> : null}
        <CCardBody>
          <CContainer className="d-flex justify-content-end gap-3 mb-4">
            <CButton
              color="info"
              className="button-size text-white d-flex justify-content-center align-items-center"
              onClick={handleAddManager}
            >
              <BsFillPlusCircleFill className="me-1 button-icon" />
              Add
            </CButton>
          </CContainer>
          <CCard>
            {true && (
              <ReactTable data={manager?.sub_admins || []} columns={columns} />
            )}
          </CCard>
        </CCardBody>
        <ConfirmationModel />
      </CCard>
    </>
  );
};

export default Manager;
