import React, { useState } from 'react'
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const LeafletMap = () => {
    return (
        <div className='max-w-7xl w-full'>

            <MapContainer className='h-96 w-3/6 ml-12 pr-12' center={[39.4338, -0.7138]} zoom={10} >
                <Marker position={[39.40332, -0.77131]}>
                    <Popup>
                        Molino Galán <br /> 46369 Alborache, Valencia, Espagne
                    </Popup>
                </Marker>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />

            </MapContainer>
        </div>
    );
}

export default LeafletMap
