"use client";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useState } from "react";

export default function GoogleMap({ center, zoom = 10 }) {
  const defaultCenter = { lng: 106.660172, lat: 10.762622 };
  const [cameraProps, setCameraProps] = useState({
    center: center ?? defaultCenter,
    zoom,
  });

  const handleCameraChange = (event) => {
    setCameraProps(event.detail);
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}>
      <Map disableDefaultUI center={center || defaultCenter} defaultZoom={zoom}>
        <Marker position={center || defaultCenter} />
      </Map>
    </APIProvider>
  );
}
