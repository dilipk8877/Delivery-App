import React from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

const EditModal = ({ visibleEdit, setVisibleEdit }) => {
  return (
    <CModal visibleEdit={visibleEdit} onClose={() => setVisibleEdit(false)}>
      <CModalHeader>
        <CModalTitle>Modal title</CModalTitle>
      </CModalHeader>
      <CModalBody>
        I will not close if you click outside me. Don't even try to press escape
        key.
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisibleEdit(false)}>
          Close
        </CButton>
        <CButton color="primary">Save changes</CButton>
      </CModalFooter>
    </CModal>
  );
};

export default EditModal;
