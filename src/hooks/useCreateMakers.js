import { useEffect } from "react";
import goongJs from "@goongmaps/goong-js"; // Import GoongJS
import getPopupContent from "@/utils/getPopupContent";

export default function useCreateMarkers(mapInstance, markers = [], onMarkerClick = () => {}) {
  useEffect(() => {
    if (!mapInstance || !markers.length) return;

    const customMarkers = markers.map((property) => {
      let hovered = false;
      const popup = new goongJs.Popup({ closeButton: false }).setHTML(getPopupContent(property));
      const marker = new goongJs.Marker().setPopup(popup).setLngLat(property.coordinates).addTo(mapInstance);
      const markerElement = marker.getElement();

      markerElement.addEventListener("click", () => {
        onMarkerClick(property);
      });
      markerElement.addEventListener("mouseenter", () => {
        hovered = true;
        popup.addTo(mapInstance);
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

    return () => {
      customMarkers.forEach((marker) => marker.remove());
    };
  }, [mapInstance, markers]);
}
