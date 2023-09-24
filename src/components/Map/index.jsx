import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import React from "react";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCT3UTXi1lFNd3JGhI-11HLvQESoe0cjag",
  });

  const center = { lat: 47.8524949949965, lng: 35.115057429259885 };

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap zoom={17} center={center} mapContainerClassName='map-container'>
      <MarkerF position={center} />
    </GoogleMap>
  );
};

export default Map;
