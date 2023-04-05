import {useMemo} from 'react';
import './Map.css';
import { GoogleMap , useLoadScript, Marker } from '@react-google-maps/api';

export default function Map() {
    const {isloaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (!isloaded) return <div>Loading...</div>;
    return <Maps />;
}


function Maps(){
    const center = useMemo(() => ({ lat: 44, lng: -80}), []);

    return (
        <GoogleMap zoom = {10} center = {center} mapContainerClassName = "map-container">
            <Marker position ={center} />
        </GoogleMap>
    );
}