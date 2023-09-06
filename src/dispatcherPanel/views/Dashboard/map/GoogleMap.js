import React from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import { useSelector } from "react-redux";

const PolyLineMap = ({ directionResponse }) => {
  const { resetRoute } = useSelector(
    (state) => state.dashboardDeatils
  );
  
  const mapContainerStyle = {
    height: "450px",
    width: "100%",
  };

  const center = {
    lat: 30.682421,
    lng: 76.727631,
  };

  return (
    <>
      <GoogleMap
        id="marker-example"
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
      >
          {resetRoute===false ? (directionResponse && <DirectionsRenderer
            directions={directionResponse}
            options={{
              polylineOptions: {
                strokeColor: "#2986ce",
                strokeOpacity: 1,
                strokeWeight: 5,
              },
            }}
          />) : null}
        
      </GoogleMap>
    </>
  );
};

export default PolyLineMap;
