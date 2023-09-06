import {
  CButton,
  CCardBody,
  CCardFooter,
  CCardText,
  CHeader,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import { closeConfirmationMessage, deletePricingRule, setDeleteId } from "src/features/pricingRule/PricingSLice";

const ConfirmationModel = () => {
  const dispatch = useDispatch();
  const { confirmationMessage, deleteId } = useSelector((state) => state.pricingRule);

  const confirmButton = () => {
    dispatch(deletePricingRule(deleteId));
    dispatch(closeConfirmationMessage());
  };
  const closeModal = () => {
    dispatch(closeConfirmationMessage());
    dispatch(setDeleteId(null));
  };
  return (
    <CModal alignment="center" visible={confirmationMessage}>
      <CHeader className="rounded-top">
        <CModalTitle></CModalTitle>
        <ImCross className="text-danger cursor fs-5 me-2" onClick={closeModal} />
      </CHeader>
      <CModalBody className="confirmCardText fs-6 w-100 d-flex justify-content-center">
        Do you really want to delete this record?
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={closeModal}>
          No
        </CButton>
        <CButton
          color="info"
          className="text-white"
          type="submit"
          onClick={confirmButton}
        >
          Yes
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ConfirmationModel;
