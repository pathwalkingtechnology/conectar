import { Card, Image, Text } from '@mantine/core';
import { FaMapMarkerAlt } from 'react-icons/fa';

type Property = {
  id: number;
  title: string;
  price: number;
  image: string;
  location: string;
};

export const PropertyCard = ({ property }: { property: Property }) => (
  <Card shadow="sm" padding="lg">
    <Image 
      src={property.image} 
      height={160} 
      alt={property.title || 'Imagen de propiedad'}
    />
    {/* Cambiar 'weight' por 'fw' (prop de Mantine) */}
    <Text fw={500}>{property.title}</Text>
    <Text c="blue">${property.price}</Text>
    <Text size="sm" c="dimmed">
      <FaMapMarkerAlt /> {property.location}
    </Text>
  </Card>
);
