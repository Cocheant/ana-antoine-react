import React, { useState } from 'react'
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';






const LeafletMap = () => {

    return (
        <div className='w-full'>

            <MapContainer className='h-96 w-3/6 ml-12 pr-12' center={[39.4338, -0.7138]} zoom={11} >
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
