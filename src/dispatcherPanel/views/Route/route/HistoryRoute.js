import React, { useMemo } from "react";
import {
  CCard,
  CCardBody,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BiRupee } from "react-icons/bi";
import ReactTable from "../../../../views/ReactTable/ReactTable";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {FaTrash} from "react-icons/fa"
import {
  getRoutes,
  openConfirmModal,
  setCurrentPage,
  setCurrentStatus,
  userDeleteId,
} from "src/features/Route/RouteSlice";
const HistoryRoute = () => {
  const route = useSelector((state) => state.route.route);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoutes("delivered"));
    dispatch(setCurrentStatus("delivered"));
    dispatch(setCurrentPage("history"))
  }, []);
  const handleDelete = (id) => {
    dispatch(openConfirmModal());
    dispatch(userDeleteId(id));
  };
  const navigate = useNavigate();
  const handleRouteId = (id) => {
    navigate(`/dispatcher/viewRoute/${id}`);
  };

  const columns = useMemo(
    () => [
      {
        Header: "Order Number",
        accessor: "orderNumber",
      },
      {
        Header: "Customer Name",
       
        accessor:d=>{
          return(
            <span>
              {d.user.first_name === "" ? "--" : <span>{d.user.first_name} {d.user.last_name}</span>}
            </span>
          )
        }
      },
      {
        Header: "Phone",
        accessor:d=>{
          return(
            <span>
              {d.user.mobile === "" ? "--" : <span>{d.user.mobile}</span>}
            </span>
          )
        }
      },
      {
        Header: "Driver",
        accessor: (d) => {
          return (
            <span>{d.driver === null ? "--" : <span>{d.driver}</span>}</span>
          );
        },
      },
      {
        Header: "Due time",
        accessor: (d) => {
          return (
            <span>
              {d.pickupDate === null ? "--" : <span>{d.pickupDate}</span>}
            </span>
          );
        },
      },
      {
        Header: "Amount",
        accessor: (d) => {
          return (
            <span>
              <BiRupee />
              {d?.price.toLocaleString("en-US")}
            </span>
          );
        },
      },
      {
        Header: "Action",
        disableSortBy: true,
        accessor: (d) => {
          return (
            <CCardBody className="d-flex justify-content-start align-items-center ps-0 gap-2">
              <FaTrash className="cursor" onClick={() => handleDelete(d.id)} />
              <MdOutlineRemoveRedEye
                className="cursor fs-6"
                title="Preview History Route"
                onClick={() => handleRouteId(d.id)}
              />
            </CCardBody>
          );
        },
      },
    ],
    []
  );
  return (
    <>
      <CCard className="mt-4">
        {true && (
          <ReactTable data={route?.orderDetails || []} columns={columns} />
        )}
      </CCard>
    </>
  );
};

export default HistoryRoute;
