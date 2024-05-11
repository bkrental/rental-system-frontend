import goongJs from "@goongmaps/goong-js"; // Import GoongJS
import "@goongmaps/goong-js/dist/goong-js.css"; // Import GoongJS CSS
import { useCallback, useEffect, useRef, useState } from "react";
import { circle } from "@turf/turf";
import polyline from "@mapbox/polyline";
import calculateBoundsForRoute from "@/utils/getRouteBoundary";
import getPopupContent from "@/utils/getPopupContent";

const Map = ({ center = [107.6416527, 11.295036], markerList = [] }) => {
  const [lng, lat] = center;
  const mapContainerRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);

  const removeRoute = useCallback(() => {
    if (!mapInstance) return;

    if (mapInstance.getLayer("route-layer")) {
      mapInstance.removeLayer("route-layer");
    }

    if (mapInstance.getSource("route")) {
      mapInstance.removeSource("route");
    }
  }, [mapInstance]);

  useEffect(() => {
    if (!selected) return;

    console.log(selected);
    const destinationCoordinates = `${selected.coordinates[1]},${selected.coordinates[0]}`;
    const url = `/api/direction?origin=${lat},${lng}&destination=${destinationCoordinates}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const polylineStr = data.routes[0].overview_polyline.points;
        const decoded = polyline.decode(polylineStr);

        const bounds = calculateBoundsForRoute(decoded);
        mapInstance.fitBounds(bounds, {
          padding: { top: 80, bottom: 80, left: 80, right: 80 },
        });

        removeRoute();
        mapInstance.addSource("route", {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: decoded.map((point) => [point[1], point[0]]),
            },
          },
        });

        mapInstance.addLayer({
          id: "route-layer",
          type: "line",
          source: "route",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "red",
            "line-width": 8,
            "line-opacity": 0.3,
          },
        });
      });
  }, [selected]);

  useEffect(() => {
    goongJs.accessToken = process.env.NEXT_PUBLIC_GOONG_MAPTILES_KEY; // Set Goong Maps key

    const map = new goongJs.Map({
      container: mapContainerRef.current,
      style: "https://tiles.goong.io/assets/goong_light_v2.json",
      center: [lng, lat],
      zoom: 12,
    });
    setMapInstance(map);

    const markers = markerList.map((property) => {
      let hovered = false;
      const popup = new goongJs.Popup({ closeButton: false }).setHTML(getPopupContent(property));
      const marker = new goongJs.Marker().setPopup(popup).setLngLat(property.coordinates).addTo(map);
      const markerElement = marker.getElement();

      markerElement.addEventListener("click", () => {
        setSelected(property);
      });
      markerElement.addEventListener("mouseenter", () => {
        hovered = true;
        popup.addTo(map);
      });
      markerElement.addEventListener("mouseleave", () => {
        hovered = false;
        setTimeout(() => hovered || popup.remove(), 500);
      });

      popup.on("open", () => {
        const popupElement = popup.getElement();
        popupElement.addEventListener("mouseenter", () => (hovered = true));
        popupElement.addEventListener("mouseleave", () => {
          hovered = false;
          popup.remove();
        });
      });
      return marker;
    });

    // Add controls, markers, layers, etc. as needed
    new goongJs.Marker({ color: "red" }).setLngLat([lng, lat]).addTo(map);

    map.on("load", function () {
      const center = [lng, lat]; // Replace with the center coordinates for your circle
      const radius = 5; // radius of the circle in kilometers
      const options = { steps: 80, units: "kilometers" };
      const circleGeoJSON = circle(center, radius, options);

      map.addSource("boundary", {
        type: "geojson",
        data: circleGeoJSON,
      });
      map.addLayer({
        id: "maine",
        type: "fill",
        source: "boundary",
        layout: {},
        paint: {
          "fill-color": "#088",
          "fill-opacity": 0.4,
        },
      });
    });

    return () => {
      map.remove(); // Clean up map on unmount
      markers.forEach((m) => m.remove());
    };
  }, [lng, lat, markerList]);

  return <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />;
};

export default Map;
