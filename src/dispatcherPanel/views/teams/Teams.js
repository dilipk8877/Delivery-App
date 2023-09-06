import { CButton, CCard, CCardBody, CContainer } from "@coreui/react";
import React, { useEffect, useMemo } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getTeams, openAddModal, openConfirmMessage, setTeamUpdatePreValue, teamDeleteId, toggleTeamModalFalse } from "src/features/teams/TeamSlice";
import ReactTable from "src/views/ReactTable/ReactTable";
import { FaEdit, FaTrash } from "react-icons/fa";
import Add from "./modal/Add";
import ConfirmationModel from "./modal/ConfirmationModel";
import Spinner from "src/spinner/Spinner";

const Teams = () => {
const {teamsList, isLoader} = useSelector((state)=>state.team)
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getTeams())
},[])

const handleOpneMadal =()=>{
  dispatch(openAddModal())
}

const handleDelete = (id)=>{
  dispatch(teamDeleteId(id))
  dispatch(openConfirmMessage())
}

const handleEdit = (user) =>{
  dispatch(openAddModal())
  dispatch(toggleTeamModalFalse())
  dispatch(setTeamUpdatePreValue(user))
}
  const columns = useMemo(
    () => [
      {
        Header: "Team Name",
        accessor:d=>{
          return(
            <span>
              {d.team_name === "" ? "--" : <span>{d.team_name}</span>}
            </span>
          )
        }
      },
      {
        Header: "Team Strength",
        accessor: (d) => {
          return <span>{d.team_strength == "" ? "0" : <span>{d.team_strength}</span>}</span>;
        },
      },
      {
        Header: "Tags",
        accessor: (d) => {
          return <span>{d.team_tag == "" ? "--" : <span>{d.team_tag}</span>}</span>;
        },
      },
      {
        Header: "Action",
        disableSortBy: true,
        accessor: (user) => {
          return (
            <CCardBody className="d-flex justify-content-start align-items-center ps-0 gap-2">
              <FaEdit className="cursor"
              title="Update Team"
                onClick={() => handleEdit(user)}
              />

              <FaTrash className="cursor" title="Delete Team" onClick={() => handleDelete(user.id)} />
            </CCardBody>
          );
        },
      },
    ],
    []
  );

  
  return (
    <CCard className="mb-4">
        {isLoader ? <Spinner className="modal-spinner" /> : null}
      <CCardBody>
        <CContainer className="d-flex justify-content-end gap-3 mb-4">
          <CButton color="info" className="button-size d-flex justify-content-center align-items-center text-white" onClick={handleOpneMadal}>
              <BsFillPlusCircleFill className="me-1 button-icon" />
              Add
          </CButton>
        </CContainer>
        <CCard>
          {true && <ReactTable data={ teamsList?.teamList || []} columns={columns} />}
        </CCard>
      </CCardBody>
      <Add />
      <ConfirmationModel/>
    </CCard>
  );
};

export default Teams;
