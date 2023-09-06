import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, FeatureGroup, useMap, Polygon } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { useDispatch, useSelector } from "react-redux";
import {  setCoordinates } from "src/features/geoFence/GeoFenceSlice";
function SetViewOnClick({ center }) {
  const map = useMap();
  map.flyTo(center,11);
  return null;
}
const PolygonMap = ({ center,polygonCoords }) => {
  const [mapLayers, setMapLayers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCoordinates(mapLayers));
  }, [mapLayers]);

  const mapRef = useRef();

  const handleCreate = (e) => {
    const { layerType, layer } = e;
    if (layerType === "polygon") {
      const { _leaflet_id } = layer;

      setMapLayers((layers) => [
        ...layers,
        { id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
      ]);
    }
  };

  const handleDelete = (e) => {
    const {
      layers: { _layers },
    } = e;

    Object.values(_layers).map(({ _leaflet_id }) => {
      setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id));
    });
  };
  return (
    <>
      <div className="col">
        <MapContainer
          center={center}
          zoom={4}
          style={{ height: "60vh", width: "100%" }}
          ref={mapRef}
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          <FeatureGroup>
            <EditControl
              position="topright"
              onCreated={handleCreate}
              onDeleted={handleDelete}
              edit={{
                remove: true,
                edit: false
              }}
              draw={{
                rectangle: false,
                circle: false,
                circlemarker: false,
                marker: false,
                polyline: false,
              }}
            />
          </FeatureGroup>
         <Polygon positions={polygonCoords ? polygonCoords : []} />
          <SetViewOnClick center={center} />
        </MapContainer>
      </div>
    </>
  );
};

export default PolygonMap;
