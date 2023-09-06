import {
  CButton,
  CHeader,
  CModal,
  CModalBody,
  CModalFooter,
  CModalTitle,
} from "@coreui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ImCross } from "react-icons/im";
import { closeConfirmMessage, deleteMobileBanner, setDeleteID } from "src/features/mobileBanner/MobileBannerSlice";
const ConfirmationModel = () => {
  const dispatch = useDispatch();
  const { confirmMessage, deleteId } = useSelector((state) => state.mobileBanner);


  const confirmButton = () => {
    dispatch(deleteMobileBanner(deleteId));
    dispatch(closeConfirmMessage());
  };
  const closeModal = () => {
    dispatch(closeConfirmMessage());
    dispatch(setDeleteID(null));
  };
  return (
    <CModal alignment="center" visible={confirmMessage}>
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
