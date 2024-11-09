"use client";
// components/Map.jsx
import React, { useEffect, useRef, useState } from "react";
import { Map, Marker } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { INITIAL_VIEW_STATE } from "../lib/mapconfig.js";

export default function LocationAggregatorMap() {
  const map = useRef();
  //   const marker = new mapboxgl.Marker({
  //     color: "#FFFFFF",
  //     draggable: false,
  //   }).setLngLat([47.2675, 11.391]);

  //   useEffect(() => {
  //     marker.addTo(map.current!);
  //     console.log(map.current);
  //   }, [map.current]);

  const activeMarkers = [
    { longitude: 11.391, latitude: 47.2675 },
    { longitude: 12.391, latitude: 47.2675 },
    { longitude: 13.391, latitude: 47.2675 },
    { longitude: 14.391, latitude: 47.2675 },
    { longitude: 15.391, latitude: 47.2675 },
  ];

  const Markers = activeMarkers.map((marker) => (
    <Marker
      key={`${marker.longitude}_${marker.latitude}`}
      longitude={marker.longitude}
      latitude={marker.latitude}
    ></Marker>
  ));

  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true}>
      <Map
        ref={map as any}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/outdoors-v12"
      >
        {Markers}
      </Map>
    </DeckGL>
  );
}
