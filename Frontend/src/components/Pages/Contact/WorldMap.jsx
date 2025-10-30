import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./WorldMap.css"; // responsive styles

// Custom red marker icon
const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const WorldMap = () => {
  useEffect(() => {
    // Create map
    const map = L.map("map");

    // Add tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // Markers
    const markers = [
      L.marker([22.5744, 88.3629], { icon: redIcon }).bindPopup("India"),
      L.marker([1.3521, 103.8198], { icon: redIcon }).bindPopup("Singapore"),
      L.marker([39.8283, -98.5795], { icon: redIcon }).bindPopup("USA"),
    ];

    // Add markers to map
    const group = L.featureGroup(markers).addTo(map);

    // ✅ Auto fit map to show all markers
    map.fitBounds(group.getBounds(), { padding: [50, 50] });

    // ✅ Handle responsiveness
    window.addEventListener("resize", () => {
      map.invalidateSize();
      map.fitBounds(group.getBounds(), { padding: [50, 50] });
    });

    // Cleanup
    return () => {
      map.remove();
      window.removeEventListener("resize", () => map.invalidateSize());
    };
  }, []);

  return (
    <div className="map-wrapper">
      <div id="map" className="map-container"></div>
    </div>
  );
};

export default WorldMap;
