import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { PropertyCard } from '../components/PropertyCard';
import YouTube from 'react-youtube';
import styles from '../styles/Home.module.css';


      {/* Listado de propiedades */}
type Property = {
  id: number;
  title: string;
  price: number;
  image: string;
  location: string;
};

const Home = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const { data } = await supabase.from('properties').select('*');
      setProperties(data || []);
    };
    fetchProperties();
  }, []);

  const videoOpts = {
    height: '390',
    width: '100%',
    playerVars: { autoplay: 1, loop: 1, controls: 0, mute: 1 },
  };

  return (
    <div className={styles.container}>
      {/* Video de presentación */}
      <div className={styles.videoSection}>
        <YouTube
          videoId="VlmZMeqoADI"
          opts={videoOpts}
          onEnd={(e) => e.target.playVideo()}
        />
      </div>

      {/* Listado de propiedades */}
      <section className={styles.propertiesSection}>
        <h2>Propiedades Destacadas</h2>
        <div className={styles.propertiesGrid}>
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
