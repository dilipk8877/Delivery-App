import { CCard } from "@coreui/react";
import React, { useMemo } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, setCurrentManageOrderPage } from "src/features/Orders/OrderSlice";
import ReactTable from "src/views/ReactTable/ReactTable";
import moment from "moment";
import { BiRupee } from "react-icons/bi";
const Active = () => {
  const active = useSelector((store) => store.orders);
  const { searchInput, startDate, endDate } = useSelector(
    (state) => state.orders
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getAllOrders({ status: "active", searchInput, startDate, endDate })
    );
    dispatch(setCurrentManageOrderPage("active"))
  }, [searchInput, startDate, endDate]);
  const columns = useMemo(
    () => [
      {
        Header: "Order Number",
        accessor: "orderNumber",
      },
      {
        Header: "Date",
        accessor: (d) => {
          return moment(d.createdAt).local().format("DD-MM-YYYY");
        },
      },
      {
        Header:"Vendor Name",
        accessor:d=>{
          return(
            <span>{d.merchantName === null ? "--": (<span>{d.merchantName}</span>)}</span>
          )
        }
      },
      {
        Header: "Customer Name",
        accessor: (d) => {
          return (
            <span>
              {d.user.first_name === null ? (
                "--"
              ) : (
                <span>
                  {d.user.first_name} {d.user.last_name}
                </span>
              )}
            </span>
          );
        },
      },
      {
        Header: "Product Name",
        accessor: "productName",
      },
      {
        Header: "Size",
        accessor: "boxType",
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
    ],
    []
  );
  return (
    <CCard className="mt-2">
      {active?.Allorders && (
        <ReactTable data={active?.Allorders?.data || []} columns={columns} />
      )}
    </CCard>
  );
};

export default Active;
