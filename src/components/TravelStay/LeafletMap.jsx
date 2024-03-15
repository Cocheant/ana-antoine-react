import React from 'react'
import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'
import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'


import "leaflet/dist/leaflet.css";


import { Marker, Popup } from 'leaflet'
const ComponentResize = () => {
    const map = useMap();

    setTimeout(() => {
        map.invalidateSize();
    }, 0);

    return null;
};
const LeafletMap = () => {

    const position = [36.0339, 1.6596];

    return (
        <MapContainer
            style={{
                height: "100%",
                width: "100%",
            }}
            center={position}
            attributionControl={true}
            zoom={8}
            minZoom={3}
            scrollWheelZoom={true}
        >
            <ComponentResize />
            <TileLayer
                // className={'ion-hide'}
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default LeafletMap
