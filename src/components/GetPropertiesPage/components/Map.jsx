import useCreateMarkers from "@/hooks/useCreateMakers";
import useRenderRoute from "@/hooks/useRenderRoute";
import getBoundary from "@/utils/getBoundary";
import goongJs from "@goongmaps/goong-js"; // Import GoongJS
import "@goongmaps/goong-js/dist/goong-js.css"; // Import GoongJS CSS
import { useEffect, useRef, useState } from "react";
import { StringParam, useQueryParam } from "use-query-params";

const Map = ({ center = [107.6416527, 11.295036], markerList = [] }) => {
  const [location, setLocation] = useQueryParam("center", StringParam);
  const [boundary, setBoundary] = useQueryParam("boundary", StringParam);
  const [lng, lat] = center;
  const mapContainerRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);

  const selectedMarkerCoordinates = selected ? `${selected.coordinates[1]},${selected.coordinates[0]}` : "";
  useRenderRoute(mapInstance, `${lat},${lng}`, selectedMarkerCoordinates);
  useCreateMarkers(mapInstance, markerList, (marker) => setSelected(marker));

  useEffect(() => {
    goongJs.accessToken = process.env.NEXT_PUBLIC_GOONG_MAPTILES_KEY; // Set Goong Maps key

    const map = new goongJs.Map({
      container: mapContainerRef.current,
      style: "https://tiles.goong.io/assets/goong_light_v2.json",
      center: [lng, lat],
    });
    setMapInstance(map);

    // Add controls, markers, layers, etc. as needed
    new goongJs.Marker({ color: "red" }).setLngLat([lng, lat]).addTo(map);

    map.on("load", function () {
      const center = location ? location.split(",").map((v) => parseFloat(v)) : [106.660172, 10.762622];
      const { polygon, convex } = getBoundary(center, boundary);

      const coordinates = convex.geometry.coordinates[0];
      const bounds = coordinates.reduce(function (bounds, coord) {
        return bounds.extend(coord);
      }, new goongJs.LngLatBounds(coordinates[0], coordinates[0]));

      map.fitBounds(bounds, { padding: 20, duration: 0 });

      map.addSource("boundary", {
        type: "geojson",
        data: polygon,
        // data: boundary,
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

      map.addSource("outerbox", {
        type: "geojson",
        data: convex,
      });
      map.addLayer({
        id: "maine2",
        type: "line",
        source: "outerbox",
        layout: {},
        paint: {
          "line-color": "#888",
          "line-width": 3,
        },
      });
    });

    return () => {
      map.remove(); // Clean up map on unmount
    };
  }, [lng, lat, markerList]);

  return <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />;
};

export default Map;
