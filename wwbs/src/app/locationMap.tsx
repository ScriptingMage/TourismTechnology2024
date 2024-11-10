"use client";
// components/Map.jsx
import React, {useEffect, useMemo, useRef, useState} from "react";
import {Map, Marker, Source, Layer, MapRef} from "react-map-gl";
import DeckGL from "@deck.gl/react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl, {LngLatBoundsLike} from "mapbox-gl";
import {INITIAL_VIEW_STATE} from "../lib/mapconfig.js";
import {atom} from "jotai";
import {fetchAccommodationsForHikingTrail} from "@/features/accommodations/database/actions";
import {useAtom} from "jotai";
import {BookingStage} from "@/features/bookings/database/types";

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
    minLat -= 0.1;
    maxLat += 0.1;
    minLng -= 0.1;
    maxLng += 0.1;

    return [
        [minLng, minLat],
        [maxLng, maxLat],
    ];
}

export const bookingStagesAtom = atom<BookingStage[]>([])

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
                    coordinates: activeMarkers.map((location) => [
                        location.longitude,
                        location.latitude,
                    ]),
                },
            },
        ],
    };

    const Markers = activeMarkers.map((marker, index) => (
        <>
            <Marker
                color={index === activeMarkers.length - 1 ? "red" : "green"}
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
            {/*<button onClick={addRandomMarker}>Add Marker</button>*/}
        </div>
    );
}
