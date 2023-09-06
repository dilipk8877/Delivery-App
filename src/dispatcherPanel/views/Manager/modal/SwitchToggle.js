import Switch from "@mui/material/Switch";
import React, { useEffect, useState } from "react";

const SwitchToggle = ({ isChecked, setPermission, id }) => {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    setCheck(isChecked);
  }, [isChecked]);

  const handleToggle = (userID) => {
    setPermission((prevUserIDs) => {
      const index = prevUserIDs.indexOf(userID);
      
      if (index > -1) {
        return prevUserIDs.filter((id) => id !== userID);
      } else {
        return [...prevUserIDs, userID];
      }
    });
  };
  
  return (
    <Switch
      name={id}
      onChange={(e) => {
        setCheck(!check);
        // setPermission((prev) => [...prev, e.target.name]);
        handleToggle(e.target.name)
      }}
      inputProps={{ "aria-label": "controlled" }}
      checked={check}
    />
  );
};

export default SwitchToggle;
