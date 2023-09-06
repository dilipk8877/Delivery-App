import React from "react";
import { CFooter } from "@coreui/react";

const AppFooter = () => {
  const date = new Date().getFullYear()
  return (
    <CFooter className="bg-white">
      <div>
        <p><strong>Copyright © {date} Delivery App. </strong> All rights reserved</p>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
