"use client";
// components/Map.jsx
import React, { useEffect, useRef, useState } from "react";
import { Map, Marker, Source, Layer } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { INITIAL_VIEW_STATE } from "../lib/mapconfig.js";

const markerColors = "red";

export default function LocationAggregatorMap() {
  const activeMarkers = [
    { longitude: 11.391, latitude: 47.2675, name: "Location" },
    { longitude: 12.391, latitude: 48.2675, name: "Location Nr. 2" },
    { longitude: 13.391, latitude: 49.2675, name: "Location Nr. 3" },
    { longitude: 14.391, latitude: 50.2675, name: "Location Mambo Number 5" },
    { longitude: 15.391, latitude: 46.2675, name: "Location 6" },
  ];

  const lineData = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: activeMarkers.map((location) => [
            location.longitude,
            location.latitude,
          ]),
        },
      },
    ],
  };

  const Markers = activeMarkers.map((marker) => (
    <>
      <Marker
        color={markerColors}
        key={`${marker.longitude}_${marker.latitude}`}
        longitude={marker.longitude}
        latitude={marker.latitude}
      ></Marker>
      <Marker
        offset={[0, -50]}
        key={`${marker.longitude}_${marker.latitude}text`}
        longitude={marker.longitude}
        latitude={marker.latitude}
      >
        <div className="text-xl text-white drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">
          {marker.name}
        </div>
      </Marker>
    </>
  ));

  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true}>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/outdoors-v12"
      >
        {Markers}
        <Source id="line-source" type="geojson" data={lineData}>
          <Layer
            id="line-layer"
            type="line"
            paint={{
              "line-color": markerColors, // Line color
              "line-width": 2, // Line width
            }}
          />
        </Source>
      </Map>
    </DeckGL>
  );
}
