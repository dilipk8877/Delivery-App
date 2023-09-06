import { CButton, CCard, CCardBody, CContainer } from "@coreui/react";
import React, { useEffect, useMemo } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  getPricingRule,
  openAddModal,
  openConfirmationMessage,
  setDeleteId,
  setPrefieldValue,
  toggleSubmitButton,
  toggleUpdateButton,
} from "src/features/pricingRule/PricingSLice";
import Spinner from "src/spinner/Spinner";
import ReactTable from "src/views/ReactTable/ReactTable";
import Add from "./modal/Add";
import ConfirmationModel from "./modal/ConfirmationModel";

const PricingRule = () => {
  const { isLoader, pricingList } = useSelector((state) => state.pricingRule);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPricingRule());
  }, []);

  const handleDelete = (id) => {
    dispatch(setDeleteId(id));
    dispatch(openConfirmationMessage());
  };

  const handleEdit = (user) => {
    dispatch(setPrefieldValue(user));
    dispatch(openAddModal());
    dispatch(toggleUpdateButton());
  };

  const handleAdd = () => {
    dispatch(openAddModal());
    dispatch(setPrefieldValue(null));
    dispatch(toggleSubmitButton());
  };
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: (d) => {
          return <span>{d.Name === "" ? "--" : <span>{d.Name}</span>}</span>;
        },
      },
      {
        Header: "Base Price",
        accessor: (d) => {
          return (
            <span>
              {d.base_price === "" ? "--" : <span>{d.base_price}</span>}
            </span>
          );
        },
      },
      {
        Header: "Base Duration",
        accessor: (d) => {
          return (
            <span>
              {d.base_duration === "" ? "--" : <span>{d.base_duration}</span>}
            </span>
          );
        },
      },
      {
        Header: "Base Distance",
        accessor: (d) => {
          return (
            <span>
              {d.base_distance === "" ? "--" : <span>{d.base_distance}</span>}
            </span>
          );
        },
      },
      {
        Header: "Action",
        disableSortBy: true,
        accessor: (user) => {
          return (
            <CCardBody className="d-flex justify-content-start align-items-center ps-0 gap-2">
              <FaEdit className="cursor" title="Update Pricing Rule" onClick={() => handleEdit(user)} />

              <FaTrash
                className="cursor"
                title="Delete Pricing Rule"
                onClick={() => handleDelete(user.id)}
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
      <CCard className="mb-4">
      {isLoader ? <Spinner className="modal-spinner" /> : null}
          <CCardBody>
            <CContainer className="d-flex justify-content-end gap-3 mb-4">
              <CButton
                color="info"
                className="button-size text-white d-flex justify-content-center align-items-center"
                onClick={handleAdd}
              >
                <BsFillPlusCircleFill className="me-1 button-icon" />
                Add
              </CButton>
            </CContainer>
            <CCard>
              {true && (
                <ReactTable
                  data={pricingList?.thePricingDetails || []}
                  columns={columns}
                />
              )}
            </CCard>
          </CCardBody>
        </CCard>
      <Add />
      <ConfirmationModel />
    </>
  );
};

export default PricingRule;
