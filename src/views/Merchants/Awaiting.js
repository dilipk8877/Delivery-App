import React, { useEffect } from "react";
import { CCard, CContainer } from "@coreui/react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  activeMerchant,
  getMerchant,
  setCurrentStatus,
  merchantDeleteId,
  openConfirmModal,
  setCurrentMerchantPage,
} from "src/features/Merchants/merchantSlice";
import { useMemo } from "react";
import ReactTable from "../ReactTable/ReactTable";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Awaiting = () => {
  const { merchant, page, searchInput } = useSelector(
    (store) => store.merchants
  );

  const handleApprove = (id) => {
    dispatch(activeMerchant({ id, status: "isAwaiting=0" }));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMerchant({ status: "isAwaiting=0", searchInput }));
    dispatch(setCurrentStatus({ status: "isAwaiting=0" }));
    dispatch(setCurrentMerchantPage("awaiting"))
  }, [dispatch, searchInput]);

  const handleDelete = (id) => {
    dispatch(setCurrentStatus("isAwaiting=0"));
    dispatch(merchantDeleteId(id));
    dispatch(openConfirmModal());
  };

  const columns = useMemo(
    () => [
      {
        Header: "Merchant Name",
        accessor: (d) => {
          return (
            <span>
              {d?.user?.first_name} {d?.user?.last_name}
            </span>
          );
        },
      },
      {
        Header: "Mobile",
        accessor: "user.mobile",
      },
      {
        Header: "Email",
        accessor: "user.email",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "District",
        accessor: "district",
      },
      {
        Header: "Pincode",
        accessor: "pincode",
      },
      {
        Header: "Action",
        disableSortBy: true,
        accessor: "price",
        accessor: (d) => {
          return (
            <CContainer className="d-flex justify-content-start align-items-center ps-0 gap-2">
              <FaTrash
                className="cursor"
                title="Delete Merchant"
                onClick={() => handleDelete(d.userId)}
              />
              <IoMdCheckmarkCircleOutline
                title="Approve"
                className="fs-5 text-warning cursor"
                onClick={() => handleApprove(d.id)}
              />
            </CContainer>
          );
        },
      },
    ],
    []
  );
  return (
    <>
      <CCard className="mb-4">
        {true && (
          <ReactTable data={merchant?.merchants || []} columns={columns} />
        )}
      </CCard>
    </>
  );
};

export default Awaiting;
