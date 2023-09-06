import {
  CCard,
  CContainer,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import {
  blockMerchant,
  getMerchant,
  setCurrentStatus,
  openConfirmModal,
  merchantDeleteId,
  setCurrentMerchantPage,
} from "src/features/Merchants/merchantSlice";
import { useEffect } from "react";
import { useMemo } from "react";
import ReactTable from "../ReactTable/ReactTable";
import {CgUnblock} from 'react-icons/cg'
const Active = () => {
  const { merchant, searchInput } = useSelector(
    (state) => state.merchants
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMerchant({ status: "isActive=1", searchInput }));
    dispatch(setCurrentStatus({ status: "isActive=1" }));
    dispatch(setCurrentMerchantPage("active"))
  }, [searchInput]);

  const handleBlock = (id) => {
    dispatch(blockMerchant({ id, status: "isActive=1" }));
  };
  const handleDelete = (id) => {
    dispatch(setCurrentStatus("isActive=1"));
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
        accessor: (d) => {
          return (
            <CContainer className="d-flex justify-content-start align-items-center ps-0 gap-2">
              <FaTrash
                className="cursor"
                title="Delete Merchant"
                onClick={() => handleDelete(d.userId)}
              />
              <CgUnblock
                title="Block"
                className="fs-5 text-danger cursor"
                onClick={() => handleBlock(d.userId)}
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

export default Active;
