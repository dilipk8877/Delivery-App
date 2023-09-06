import React,{useMemo} from 'react'
import { CCard, CCardBody } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux';
import ReactTable from "../../../../views/ReactTable/ReactTable";
import { useEffect } from 'react';
import { getRoutes, setCurrentStatus } from 'src/features/Route/RouteSlice';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {BiRupee } from "react-icons/bi"

const FailedRoute = () => {
  const route = useSelector((state) => state.route.route);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getRoutes("cancelled"))
    dispatch(setCurrentStatus("cancelled"))
  },[])

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
        accessor: "user.first_name",
      },
      {
        Header: "Phone",
        accessor: "user.mobile",
      },
      {
        Header: "Driver",
        accessor: (d) => {
          return <span>{d.driver === null ? "--" : <span>{d.driver}</span>}</span>;
        },
      },
      {
        Header: "Due time",
        accessor: (d) => {
          return <span>{d.pickupDate === null ? "--" : <span>{d.pickupDate}</span>}</span>;
        },
      },
      {
        Header: "Amount",
        accessor:d=>{
          return(
            <span><BiRupee/>{d?.price.toLocaleString("en-US")}</span>
          )
        }
      },
      {
        Header: "Action",
        disableSortBy: true,
        accessor: (d) => {
          return (
            <CCardBody className="d-flex justify-content-start align-items-center ps-0 gap-2">
                <MdOutlineRemoveRedEye
                  className="cursor fs-6"
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
  )
}

export default FailedRoute