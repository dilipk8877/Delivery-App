import React, { useEffect, useMemo } from "react";
import { CCard, CContainer } from "@coreui/react";
import { BiBlock } from "react-icons/bi";
import ReactTable from "src/views/ReactTable/ReactTable";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  getAgents,
  getChangeState,
  openConfirmationModal,
  setCurrentAgentPage,
  setCurrentSTs,
  setDeleteId,
} from "src/features/agents/AgentSlice";
const Blocked = () => {
  const agent = useSelector((state) => state.agent.agentList);

  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getAgents("isBlocked=1"));
    dispacth(setCurrentSTs("isBlocked=1"));
    dispacth(setCurrentAgentPage("blocked"));
  }, []);
  const handleUnBlock = (id) => {
    dispacth(
      getChangeState({
        status: "unblockAgents",
        id,
        currentStatus: "isBlocked=1",
      })
    );
  };
  const handleDelete = (id) => {
    dispacth(setDeleteId(id));
    dispacth(openConfirmationModal());
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
        accessor: (d) => {
          return <span>{d.type == null ? "--" : d.type}</span>;
        },
      },
      {
        Header: "Team Name",
        accessor: (d) => {
          return <span>{d.teamName == null ? "--" : d.teamName}</span>;
        },
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
              <FaTrash
                className="cursor"
                title="Delete Agent"
                onClick={() => handleDelete(d.user.id)}
              />
              <BiBlock
                title="Unblock"
                className="fs-5 text-success cursor"
                onClick={() => handleUnBlock(d.user.id)}
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

export default Blocked;
