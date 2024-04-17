"use client";

import { useState } from "react";
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 6);
  return null;
}


export default function Geovisor() {

  const [geoData, setGeoData] = useState({ lat: -9.189967, lng: -80.015152 });

  const center = [geoData.lat, geoData.lng];
  return (

    <MapContainer center={center}  style={{ height: '100vh' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeView coords={center} />
    </MapContainer>

  );
}
