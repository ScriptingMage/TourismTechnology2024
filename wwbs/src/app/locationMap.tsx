"use client";
// components/Map.jsx
import React, { useState } from "react";
import Map from "react-map-gl";
import DeckGL from "@deck.gl/react";
import "mapbox-gl/dist/mapbox-gl.css";
// import map config
import { INITIAL_VIEW_STATE } from "../lib/mapconfig.js";

export default function LocationAggregatorMap() {
  return (
    <div className="">
      <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true}>
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          mapStyle="mapbox://styles/mapbox/outdoors-v12"
        ></Map>
      </DeckGL>
    </div>
  );
}
