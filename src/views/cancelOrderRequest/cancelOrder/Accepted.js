import React, { useEffect, useMemo } from "react";
import { CCard } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { getCancelOrderRequest } from "src/features/CancelRequest/CancelRequest";
import moment from "moment-timezone";

import { BiRupee } from "react-icons/bi";
import ReactTable from "src/views/ReactTable/ReactTable";
import { setCurrentCancelOrderPage } from "src/features/Orders/OrderSlice";
const Accepted = () => {
  const cancelOrder = useSelector((state) => state.cancelOrder);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCancelOrderRequest("accepted"));
    dispatch(setCurrentCancelOrderPage("accepted"))
  }, [dispatch]);

  const columns = useMemo(
    () => [
      {
        Header: "Vendor",
        accessor: (d) => {
          return <>{d.vendor_name === null ? "--" : d.vendor_name}</>;
        },
      },
      {
        Header: "Customer Name",
        accessor: "user.first_name",
      },
      {
        Header: "Product Name",
        accessor: "productName",
      },
      {
        Header: "Amount",
        accessor: (d) => {
          return (
            <span>
              <BiRupee />
              {d.price.toLocaleString("en-US")}
            </span>
          );
        },
      },
      {
        Header: "Cancel Date",
        accessor: (d) => {
          return moment(d.cancel_date).local().format("DD-MM-YYYY");
        },
      },
      {
        Header: "Update Date&Time",
        accessor: (d) => {
          return moment(d.updatedAt).local().format("DD-MM-YYYY hh:mm");
        },
      },
    ],
    []
  );
  return (
    <CCard className="p-3">
      <CCard>
        {cancelOrder && (
          <ReactTable
            data={cancelOrder?.cancelOrder?.data || []}
            columns={columns}
          />
        )}
      </CCard>
    </CCard>
  );
};

export default Accepted;
