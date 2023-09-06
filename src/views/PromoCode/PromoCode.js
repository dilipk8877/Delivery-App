import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  editIds,
  getPromo,
  OpenConfirmMessage,
  openEditModel,
  openModal,
  setDeleteId,
  setInitialValue,
  setTogglePromo,
} from "src/features/Promocode/PromocodeSlice";
import { FaEdit, FaTrash } from "react-icons/fa";

import { CCard, CButton, CContainer } from "@coreui/react";
import Add from "./modal/Add";
import moment from "moment";
import { BsFillPlusCircleFill } from "react-icons/bs";
import ReactTable from "src/views/ReactTable/ReactTable";
import ConfirmationModel from "./modal/ConfirmationModel";
import Spinner from "src/spinner/Spinner";
import { BiRupee } from "react-icons/bi";

const PromoCode = () => {
  const { promos, isLoader } = useSelector((store) => store.promo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPromo());
  }, []);

  const handleEdit = (promo) => {
    dispatch(openEditModel());
    dispatch(editIds(promo.id));
    dispatch(setTogglePromo(false));
    dispatch(setInitialValue(promo));
  };

  const deleteProcode = (id) => {
    dispatch(setDeleteId(id));
    dispatch(OpenConfirmMessage());
  };
  const columns = useMemo(
    () => [
      {
        Header: "Promo Code",
        accessor: "promo_code",
      },
      {
        Header: "Title",
        accessor: "Title",
      },
      {
        Header: "Description",
        accessor: "Description",
      },
      {
        Header: "Promo Types",
        accessor: "Promo_Type",
      },
      {
        Header: "Discount(%)",
        accessor: (d) => {
          return <span>{Number(d.discount.toLocaleString("en-US"))}</span>;
        },
      },
      {
        Header: "Expiry Date",
        accessor: (d) => {
          return moment(d.ExpiryDate).local().format("DD-MM-YYYY");
        },
      },
      {
        Header: "Action",
        disableSortBy: true,
        accessor: (d) => {
          return (
            <CContainer className="d-flex justify-content-start align-items-center ps-0 gap-1">
              <FaEdit
                className="cursor"
                title="Update Promocode"
                onClick={() => handleEdit(d)}
              />{" "}
              <FaTrash
                className="ms-2 cursor"
                title="Delete Promocode"
                onClick={() => deleteProcode(d.id)}
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
      <CCard className="p-3">
        {isLoader ? (
          <Spinner color="primary" className="modal-spinner" />
        ) : null}{" "}
        <CContainer className="d-flex justify-content-end mb-2">
          <CButton
            className="button-size d-flex justify-content-center align-items-center text-white"
            color="info"
            onClick={() => dispatch(openModal())}
          >
            <BsFillPlusCircleFill className="me-1 button-icon" />
            Add
          </CButton>
        </CContainer>
        <CCard className="mt-3">
          {promos && (
            <ReactTable data={promos?.promoList || []} columns={columns} />
          )}
        </CCard>
        <Add />
        <ConfirmationModel />
      </CCard>
    </>
  );
};

export default PromoCode;
