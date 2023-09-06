import {
  CButton,
  CHeader,
  CModal,
  CModalBody,
  CModalFooter,
  CModalTitle,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import {
    closeAssignDriverModel, getAssignDriver, getAvailbleDriver,
} from "src/features/Route/RouteSlice";

const AssignDriver = () => {
  const dispatch = useDispatch();
  const { openAssignDriver,orderNumber,availbleDriver } = useSelector((state) => state.route);

  const [selectedOption, setSelectedOption] = useState(null);

  const userId = selectedOption?.value

  const testArray = [];
  const data = availbleDriver?.data?.all_avaialable_drivers;
  data?.forEach((item) => {
    testArray.push({
      value: `${item.user.first_name} ${item.user.last_name}`,
      label: `${item.user.first_name} ${item.user.last_name}`,
      value:item.userId,
    });
  });


  useEffect(() => {
    dispatch(getAvailbleDriver());
  }, []);
  const confirmButton = () => {
    dispatch(getAssignDriver({orderNumber,userId}));
    if(userId){
      dispatch(closeAssignDriverModel());
    }
  };
  const closeModal = () => {
    dispatch(closeAssignDriverModel());
  };

  return (
    <CModal alignment="center" visible={openAssignDriver}>
      <CHeader className="rounded-top">
        <CModalTitle>Select Driver</CModalTitle>
        <ImCross className="text-danger cursor fs-5 me-2" onClick={closeModal} />
      </CHeader>
      <CModalBody className="confirmCardText fs-6 w-100 d-flex justify-content-center">
        <Select
          className="assignDriver-dropdown"
          classNamePrefix="Select"
          isClearable
          name="color"
          onChange={setSelectedOption}
          options={testArray}
        />
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
          Assign
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default AssignDriver;
