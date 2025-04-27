import React, { useState } from 'react';
import ReactMapGL, { Marker, ViewportProps } from 'react-map-gl';
import { FaHome } from 'react-icons/fa';

type Property = {
  id: number;
  latitude: number;
  longitude: number;
};

type Viewport = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export const PropertyMap = ({ properties }: { properties: Property[] }) => {
  const [viewport, setViewport] = useState<Viewport>({
    latitude: -34.6132,
    longitude: -58.3772,
    zoom: 12,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%" // ← Agregar width como prop directo
      height="500px" // ← Agregar height como prop directo
      onViewportChange={(nextViewport: ViewportProps) => 
        setViewport(nextViewport as Viewport)
      }
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN!}
    >
      {properties.map((property) => (
        <Marker
          key={property.id}
          latitude={property.latitude}
          longitude={property.longitude}
        >
          <FaHome color="red" size={24} />
        </Marker>
      ))}
    </ReactMapGL>
  );
};
