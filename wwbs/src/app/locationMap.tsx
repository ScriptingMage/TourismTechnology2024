"use client";
// components/Map.jsx
import React, {useEffect, useRef, useState} from "react";
import {Map, Marker, Source, Layer, MapRef} from "react-map-gl";
import DeckGL from "@deck.gl/react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import {INITIAL_VIEW_STATE} from "../lib/mapconfig.js";

const markerColors = "red";

export default function LocationAggregatorMap() {

    const mapRef = useRef<MapRef>(null);
    const [activeMarkers, setActiveMarkers] = useState([{longitude: 11.391, latitude: 47.2675, name: "Location"}]);

    function addRandomMarker() {
        const lastMarker = activeMarkers[activeMarkers.length - 1];
        // Random marker close to the last marker
        const newMarker = {longitude: lastMarker.longitude + 0.1, latitude: lastMarker.latitude + 0.1, name: "Location"};
        const newMarkers = [...activeMarkers, newMarker];

        setActiveMarkers(newMarkers);
        console.log("Adding marker", mapRef.current);
        if (mapRef.current) {
            const map = mapRef.current.getMap();
            console.log("Map", map);
            let minLat = 90;
            let maxLat = -90;
            let minLng = 180;
            let maxLng = -180;
            activeMarkers.forEach((marker) => {
                if (marker.latitude < minLat) minLat = marker.latitude;
                if (marker.latitude > maxLat) maxLat = marker.latitude;
                if (marker.longitude < minLng) minLng = marker.longitude;
                if (marker.longitude > maxLng) maxLng = marker.longitude;
            });

            map.fitBounds([
                [minLng, minLat],
                [maxLng, maxLat],
            ]);
        }
    }


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
        <div className="h-full flex flex-col">
            <div className="relative flex-grow">
                <Map
                    initialViewState={INITIAL_VIEW_STATE}
                    ref={mapRef}
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
            </div>
            <button onClick={addRandomMarker}>Add Marker</button>
        </div>
    );
}
