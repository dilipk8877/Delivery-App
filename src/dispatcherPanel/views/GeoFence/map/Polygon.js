import React, { useEffect } from "react";
import { GoogleMap, Marker, Polygon } from "@react-google-maps/api";
import {  useSelector } from "react-redux";
const PolygonOnMap = () => {
  const coordinateById = useSelector((state) => state.geoFen.coordinatById);

  const mapContainerStyle = {
    height: "550px",
    width: "100%",
  };
  const lat = coordinateById?.theGeoFence?.coordinates?.map((ll) => ll.lat);
  const lng = coordinateById?.theGeoFence?.coordinates?.map((ll) => ll.lng);
  const center = {
    lat: lat && lat[0] ? lat[0] : 30.682421,
    lng: lng && lng[0] ? lng[0] : 76.727631,
  };
  const paths = coordinateById?.theGeoFence?.coordinates;

  const options = {
    fillColor: "lightblue",
    fillOpacity: 0.3,
    strokeColor: "red",
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
  };


  return (
    <GoogleMap
      id="marker-example"
      mapContainerStyle={mapContainerStyle}
      zoom={12}
      center={center}
    >
      <Polygon paths={paths} options={options} />
    </GoogleMap>
  );
};

export default PolygonOnMap;
