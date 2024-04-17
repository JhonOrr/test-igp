import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

import { useState } from "react";

export function ChangeView({ coords }) {
    const map = useMap();
    map.setView(coords, 12);
    return null;
  }
  
  export default function Map() {
    const [geoData, setGeoData] = useState({ lat: 64.536634, lng: 16.779852 });
  
    const center = [geoData.lat, geoData.lng];
  
    return (
      <MapContainer center={center} zoom={12} style={{ height: '100vh' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoData.lat && geoData.lng && (
          <Marker position={[geoData.lat, geoData.lng]} />
        )}
        <ChangeView coords={center} />
      </MapContainer>
    );
  }