import React, { useEffect } from "react";
import { CCard, CContainer } from "@coreui/react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  getMerchant,
  setCurrentStatus,
  unBlockMerchant,
  merchantDeleteId,
  openConfirmModal,
  setCurrentMerchantPage,
} from "src/features/Merchants/merchantSlice";
import { useMemo } from "react";
import ReactTable from "../ReactTable/ReactTable";
import { BiBlock } from "react-icons/bi";
const Blocked = () => {
  const { merchant, page, searchInput } = useSelector(
    (state) => state.merchants
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMerchant({ status: "isBlocked=1", searchInput }));
    dispatch(setCurrentStatus({ status: "isBlocked=1" }));
    dispatch(setCurrentMerchantPage("blocked"))
  }, [dispatch, searchInput]);

  const handleDelete = (id) => {
    dispatch(setCurrentStatus("isBlocked=1"));
    dispatch(merchantDeleteId(id));
    dispatch(openConfirmModal());
  };

  const handleUnBlock = (id) => {
    dispatch(unBlockMerchant({ page, id, status: "isBlocked=1" }));
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
              <BiBlock
                title="Unblock"
                className="fs-5 text-success cursor"
                onClick={() => handleUnBlock(d.userId)}
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

export default Blocked;
