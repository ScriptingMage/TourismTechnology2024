"use client";
// components/Map.jsx
import React, {useMemo, useRef} from "react";
import {Layer, Map, MapRef, Marker, Source} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import {LngLatBoundsLike} from "mapbox-gl";
import {INITIAL_VIEW_STATE} from "../lib/mapconfig.js";
import {useAtom} from "jotai";
import {bookingStagesAtom} from "@/lib/atoms";
import {trackPoints} from "@/features/hiking-trails/trackPoints";

const markerColors = "red";

function getMapBounds(markers: { latitude: number; longitude: number; name: string }[]): LngLatBoundsLike {
    let minLat = 90;
    let maxLat = -90;
    let minLng = 180;
    let maxLng = -180;
    markers.forEach((marker) => {
        if (marker.latitude < minLat) minLat = marker.latitude;
        if (marker.latitude > maxLat) maxLat = marker.latitude;
        if (marker.longitude < minLng) minLng = marker.longitude;
        if (marker.longitude > maxLng) maxLng = marker.longitude;
    });

    // Add a bit of padding
    minLat -= 0.05;
    maxLat += 0.05;
    minLng -= 0.05;
    maxLng += 0.05;

    return [
        [minLng, minLat],
        [maxLng, maxLat],
    ];
}

export default function LocationAggregatorMap() {

    const mapRef = useRef<MapRef>(null);
    const [accomodations, setAccomodations] = useAtom(bookingStagesAtom)

    const activeMarkers = useMemo(() => {
        const newMarkers = accomodations.filter(a => a.endLatitude !== null && a.endLongitude !== null).map(accomodation => {
            return {
                longitude: accomodation.endLongitude!,
                latitude: accomodation.endLatitude!,
                name: accomodation.accommodationTitle!
            }
        })

        if (mapRef.current) {
            const map = mapRef.current.getMap();
            const mapBounds = getMapBounds(newMarkers);
            map.fitBounds(mapBounds);
        }
        return newMarkers;
    }, [accomodations]);

    const lineData = {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                geometry: {
                    type: "LineString",
                    coordinates: trackPoints,
                },
            },
        ],
    };

    const Markers = activeMarkers.map((marker, index) => {
        const shouldBeGreen = index === activeMarkers.length - 1;
        const color = shouldBeGreen ? "#4CAF50" : "red";
        return (
            <>
                <Marker
                    color={color}
                    key={`${marker.longitude}_${marker.latitude}_${color}`}
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
        );
    });

    return (
        <div className="h-full flex flex-col">
            <div className="relative flex-grow">
                <Map
                    initialViewState={INITIAL_VIEW_STATE}
                    ref={mapRef}
                    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                    mapStyle="mapbox://styles/mapbox/outdoors-v12"
                >
                    {...Markers}
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
            {/*<button onClick={addRandomMarker}>Add Marker</button>*/}
        </div>
    );
}
