"use client";
import goongJs from "@goongmaps/goong-js";
import { useEffect, useRef } from "react";

goongJs.accessToken = process.env.NEXT_PUBLIC_GOONG_MAPTILES_KEY;

export function createMarker(map, lngLat, options) {
  if (!map instanceof goongJs.Map) return;
  const marker = new goongJs.Marker(options)
    .setLngLat(lngLat ?? [107.6416527, 11.295036])
    .addTo(map);

  return marker;
}

export function createPopup() {
  const popup = new goongJs.Popup();
  return popup;
}

export function createMap(config) {
  const map = new goongJs.Map({
    container: "map",
    style: "https://tiles.goong.io/assets/goong_light_v2.json",
    zoom: 20,
    center: [107.6416527, 11.295036],
    ...config,
  });

  return map;
}

export default function Map({ center = [107.6416527, 11.295036], zoom = 10 }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = createMap({
        center,
      });
    }

    mapRef.current.flyTo({ center, zoom: 15 });
    const marker = createMarker(mapRef.current, center);

    return () => {
      marker.remove();
    };
  }, [center]);

  return <div id="map" style={{ height: "500px" }}></div>;
}
