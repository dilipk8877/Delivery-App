import React, { useEffect, useMemo } from "react";
import {
  CCard,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { getReturnRequest } from "src/features/ReturnRequest/ReturnRequest";
import moment from "moment-timezone";
import ReactTable from "src/views/ReactTable/ReactTable";
import {BiRupee} from "react-icons/bi"
import { setCurrentReturnOrderPage } from "src/features/Orders/OrderSlice";
const PendingRequest = () => {
  const PendingRequest = useSelector((store) => store.returnRequest.returnRequest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReturnRequest("pending"));
    dispatch(setCurrentReturnOrderPage("pending_request"))
  }, [dispatch]);
  const columns = useMemo(
    () => [
      {
        Header: "Vendor",
        accessor: "vendor",
      },
      {
        Header: "Customer Name",
        accessor: "customerName",
      },
      {
        Header: "Product Name",
        accessor: "product",
      },
      {
        Header: "Amount",
        accessor:d=>{
          return(
            <span><BiRupee/>{d.price.toLocaleString("en-US")}</span>
          )
        }
      },
      {
        Header: "Date&Time",
        accessor: d => {
          return moment(d.dateTime)
            .local()
            .format("DD-MM-YYYY hh:mm")
        }
      },
      {
        Header: "Request Date",
        accessor: d => {
          return moment(d.requestDateTime)
            .local()
            .format("DD-MM-YYYY")
        }
      },
    ],
    []
  );
  return (
    <CCard>
      {PendingRequest && (<ReactTable data ={PendingRequest?.data || []} columns = {columns}/>)}
    </CCard>
  );
};

export default PendingRequest;
