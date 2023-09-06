import { CFormInput } from "@coreui/react";
import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
const AutuCompleteCity = ({ setAdress, address, setCenter, disabled }) => {

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    setAdress(value);
    const lat = ll?.lat;
    const lng = ll?.lng;
    setCenter([lat, lng]);
  };
  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={setAdress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (
            <div>
              <CFormInput
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input-addgeofence",
                })}
                className="addGeoFence-geofencing_name"
                disabled={disabled !== undefined ? true : false}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </PlacesAutocomplete>
    </>
  );
};

export default AutuCompleteCity;
