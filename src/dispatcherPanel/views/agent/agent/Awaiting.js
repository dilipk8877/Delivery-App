import React, { useEffect, useMemo } from "react";
import {
  CCard,
  CContainer,
} from "@coreui/react";
import ReactTable from "src/views/ReactTable/ReactTable";
import { FaTrash } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getAgents, getChangeState, openConfirmationModal, setCurrentAgentPage, setCurrentSTs, setDeleteId } from "src/features/agents/AgentSlice";
const Awaiting = () => {
  const agent = useSelector((state) => state.agent.agentList);

  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getAgents("isAwaiting=0"));
    dispacth(setCurrentSTs("isAwaiting=0"))
    dispacth(setCurrentAgentPage("awaiting"))
  }, []);
  const handleApprove = (id) =>{
    dispacth(getChangeState({status:"agents/approve",id,currentStatus:"isAwaiting=0"}))
  }
  const handleDelete = (id) =>{
    dispacth(setDeleteId(id))
    dispacth(openConfirmationModal())
  }
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
            <CContainer className="d-flex justify-content-start ps-0 align-items-center gap-2">
              <FaTrash
                className="cursor"
                title="Delete Agent"
                onClick={() => handleDelete(d.user.id)}
              />
              <IoMdCheckmarkCircleOutline
                title="Approve"
                className="fs-5 text-warning cursor"
                onClick={() => handleApprove(d.user.id)}
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
export default Awaiting;
