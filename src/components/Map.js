import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '10px',
  marginTop: '20px'
};

const center = {
    lat: 32.7486,
    lng: -117.1673
  };

const Map = ({ userLocation }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={userLocation || center}
        zoom={13}
        className="rounded-lg mt-4"
      >
        {userLocation && <Marker position={userLocation} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;