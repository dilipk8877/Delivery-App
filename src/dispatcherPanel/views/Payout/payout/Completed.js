import { CButton, CCard, CCardBody } from "@coreui/react";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPayout } from "src/features/payout/PayoutSlice";
import ReactTable from "src/views/ReactTable/ReactTable";

const Completed = () => {
  const payout = useSelector((state) => state.payout.payoutList);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPayout("1"));
  }, []);
  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: (d) => {
          return (
            <span>
              {d.requestedBy === null ? "--" : <span>{d.requestedBy}</span>}
            </span>
          );
        },
      },
      {
        Header: "Agent",
        accessor: (d) => {
          return (
            <span>
              {d.requestedBy === "" ? "--" : <span>{d.agentName}</span>}
            </span>
          );
        },
      },
      {
        Header: "Amount",
        accessor: (d) => {
          return (
            <span>
              {d.requestedBy === null ? "--" : <span>{d.amount}</span>}
            </span>
          );
        },
      },
      {
        Header: "Payout Type",
        accessor: (d) => {
          return (
            <span>
              {d.requestedBy === "" ? "--" : <span>{d.payoutType}</span>}
            </span>
          );
        },
      },
      {
        Header: "Bank Details",
        accessor: (d) => {
          return (
            <span>
              {d.requestedBy === null ? "--" : <span>{d.bankDetails}</span>}
            </span>
          );
        },
      },
    ],
    []
  );

  return (
    <CCard>
      {true && (
        <ReactTable data={payout?.detailsPayout || []} columns={columns} />
      )}
    </CCard>
  );
};

export default Completed;
