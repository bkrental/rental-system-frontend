import calculateBoundsForRoute from "@/utils/getRouteBoundary";
import polyline from "@mapbox/polyline";
import { useEffect } from "react";

export default function useRenderRoute(mapInstance, originCoord, destinationCoord) {
  useEffect(() => {
    if (!mapInstance || !originCoord || !destinationCoord) return;

    const getRouteData = async () => {
      const url = `/api/direction?origin=${originCoord}&destination=${destinationCoord}`;
      const res = await fetch(url);
      return await res.json();
    };

    getRouteData()
      .then((data) => {
        console.log(data);
        const polylineStr = data.routes[0].overview_polyline.points;
        const decoded = polyline.decode(polylineStr);
        const routeBoundary = calculateBoundsForRoute(decoded);

        mapInstance.fitBounds(routeBoundary, {
          padding: { top: 80, bottom: 80, left: 80, right: 80 },
        });

        // if (mapInstance.getLayer("route-layer")) {
        //   mapInstance.removeLayer("route-layer");
        // }

        // if (mapInstance.getSource("route")) {
        //   mapInstance.removeSource("route");
        // }

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
      })
      .catch((error) => console.error(error));

    return () => {
      if (mapInstance.getLayer("route-layer")) {
        mapInstance.removeLayer("route-layer");
      }

      if (mapInstance.getSource("route")) {
        mapInstance.removeSource("route");
      }
    };
  }, [mapInstance, originCoord, destinationCoord]);
}
