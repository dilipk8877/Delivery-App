import { CButton,  CHeader, CModal, CModalBody, CModalFooter,  CModalTitle } from '@coreui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { closeConfirmMessage, deletePromoCodes, setDeleteId } from 'src/features/Promocode/PromocodeSlice'
import { ImCross } from "react-icons/im";
const ConfirmationModel = () => {
    const dispatch = useDispatch()
    const {isOpenConfirmMessage,deleteId} = useSelector((state)=>state.promo)

    const confirmButton =()=>{
      dispatch(deletePromoCodes(deleteId))
      dispatch(closeConfirmMessage())
    }
    const closeModal = () =>{
      dispatch(closeConfirmMessage())
      dispatch(setDeleteId(null))
    }
  return (
  <CModal alignment="center" visible={isOpenConfirmMessage}>
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
  )
}

export default ConfirmationModel