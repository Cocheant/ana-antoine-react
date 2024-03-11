import {
    MapContainer,
    TileLayer,
    // eslint-disable-next-line no-unused-vars
    useMap,
} from 'https://cdn.esm.sh/react-leaflet'

import { Marker, Popup } from 'leaflet'

const LeafletMap = () => {


    return (
        <div className="w-full h-1 relative ">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default LeafletMap
