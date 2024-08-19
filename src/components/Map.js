import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '10px',
  marginTop: '20px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Map = ({ userLocation }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={userLocation || center}
        zoom={13}
      >
        {userLocation && <Marker position={userLocation} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;