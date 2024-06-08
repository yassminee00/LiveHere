import React from "react";
import Map from "./map/Map";

const location = {
  address: "143, avenue Hassan II Casablanca Morocco.",
  lat: 5.45674,
  lng: 7.10273,
};

function GoogleMap() {
  return (
    <div className="GoogleMap bg-zinc-600 h-[500px] overflow-hidden">
      <Map location={location} zoomLevel={17} />
    </div>
  );
}

export default GoogleMap;
