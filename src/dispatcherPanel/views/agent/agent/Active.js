import React, { useEffect, useMemo } from "react";
import { CCard, CContainer } from "@coreui/react";
import { CgUnblock } from "react-icons/cg";
import ReactTable from "src/views/ReactTable/ReactTable";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  getAgents,
  getChangeState,
  openAssignDriverModel,
  openConfirmationModal,
  setCurrentAgentPage,
  setCurrentSTs,
  setDeleteId,
  setDriverId,
} from "src/features/agents/AgentSlice";
const Active = () => {
  const agent = useSelector((state) => state.agent.agentList);
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getAgents("isActive=1"));
    dispacth(setCurrentSTs("isActive=1"));
    dispacth(setCurrentAgentPage("active"))
  }, []);

  const handleBlock = (id) => {
    dispacth(
      getChangeState({ status: "blockAgents", id, currentStatus: "isActive=1" })
    );
  };
  const handleDelete = (id) => {
    dispacth(setDeleteId(id));
    dispacth(openConfirmationModal());
  };

  const handleAssignDriver = (id) => {
    dispacth(setDriverId(id));
    dispacth(openAssignDriverModel());
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
        Header: "Type",
        // accessor: "type",
        accessor:d=>{
          return(
            <span>{d.type == null ? "--" : d.type}</span>
          )
        }
      },
      {
        Header: "Team Name",
        accessor:d=>{
          return(
            <span>{d.teamName == null ? "--" : d.teamName}</span>
          )
        }
      },
      {
        Header: "Cash Collected",
        accessor: "cash_collected",
      },
      {
        Header: "Order Earning",
        accessor: "walletBalance",
      },
      {
        Header: "Action",
        disableSortBy: true,
        accessor: (d) => {
          return (
            <CContainer className="d-flex justify-content-start align-items-center ps-0 gap-2">
              <FaEdit
                className="cursor"
                title="Assign Team"
                onClick={() => handleAssignDriver(d.user.id)}
              />
              <FaTrash
                className="cursor"
                title="Delete Agent"
                onClick={() => handleDelete(d.user.id)}
              />
              <CgUnblock
                title="Block"
                className="fs-5 text-danger cursor"
                onClick={() => handleBlock(d.user.id)}
              />
            </CContainer>
          );
        },
      },
    ],
    []
  );
  return (
    <CCard>
      <ReactTable data={agent?.agents || []} columns={columns} />
    </CCard>
  );
};

export default Active;
