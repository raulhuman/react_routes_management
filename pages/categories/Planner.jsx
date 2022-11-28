import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Areas from "../data/countries.geojson";



const containerStyle = {
  width: "100%",
  height: "90vh",
};
const GOOGLE_API_KEY= "AIzaSyAG4aZEW8z6Ju3s3Tcj5Uz7O1Zgq-v0Z8A"

function Planner() {
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
    map.data.addGeoJson(Areas);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const center = {
    lat: -25.274398,
    lng: 133.775136,
  };

  const onClick = (e) => {
    console.log("clickk", e);
  };

  
  return (
    <React.Fragment>
      <LoadScript
        id="script-loader"
        googleMapsApiKey={GOOGLE_API_KEY}
        language="en"
        region="us"
        libraries={["drawing", "visualization", "geometry", "places"]}
      >
        <GoogleMap
          mapContainerClassName="App-map"
          zoom={5}
          version="weekly"
          on
          mapContainerStyle={containerStyle}
          center={center}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={onClick}
        ></GoogleMap>
      </LoadScript>
    </React.Fragment>
  );
}

export default React.memo(Planner);
