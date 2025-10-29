import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WorldMap.css";

const locations = [
  { name: "India", lat: 22.5744, lng: 88.3629 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },      
  { name: "USA", lat: 39.8283, lng: -98.5795 }         
];


const WorldMap = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markers = useRef([]);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyBQpw01AAjaNxDwYAtNSidRZr5QfhWp6SA", // Replace with your API Key
      version: "weekly",
    });

    loader.load().then(() => {
      if (!mapInstance.current) {
        mapInstance.current = new window.google.maps.Map(mapRef.current, {
          center: locations[0], // Default center: India
          zoom: 2.2,
        });

        locations.forEach((location) => {
          const marker = new window.google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: mapInstance.current,
            title: location.name,
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 5,
              fillColor: "red",
              fillOpacity: 1,
              strokeWeight: 0,
            },
          });

          markers.current.push(marker);

          // Add blinking effect
          let visible = true;
          setInterval(() => {
            marker.setVisible(visible);
            visible = !visible;
          }, 1000);
        });
      }
    });

    return () => {
      markers.current.forEach((marker) => marker.setMap(null));
    };
  }, []);

  return (
    <div className="container text-center my-5">
      <h2 className="map-heading">Our Global Presence</h2>
      <div ref={mapRef} className="map-container"></div>
    </div>
  );
};

export default WorldMap;
