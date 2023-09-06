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
// import { getAvailbleDriver } from "src/features/availableDiver/DriverSlice";
import { assignTeamsToDriver, closeAssignDriverModel } from "src/features/agents/AgentSlice";
import { getAvailbleDriver } from "src/features/Route/RouteSlice";

const AssignTeam = () => {
  const dispatch = useDispatch();
  const { assignDriverModel,driverId } = useSelector((state) => state.agent);
  const team = useSelector((state)=>state.team.teamsList)
  const [selectedOption, setSelectedOption] = useState(null);


  const teamId = selectedOption?.value
  const testArray = [];
  const data = team?.teamList;
  data?.forEach((item) => {
    testArray.push({
      value: `${item.team_name}`,
      label: `${item.team_name}`,
      value:item.id,
    });
  });


  useEffect(() => {
    dispatch(getAvailbleDriver());
  }, []);

  const confirmButton = () => {
    dispatch(assignTeamsToDriver({driverId,teamId}));
    if(teamId){
      dispatch(closeAssignDriverModel());
    }
  };

  const closeModal = () => {
    dispatch(closeAssignDriverModel());
  };

  return (
    <CModal alignment="center" visible={assignDriverModel}>
      <CHeader className="rounded-top">
        <CModalTitle>Select Team</CModalTitle>
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

export default AssignTeam;
