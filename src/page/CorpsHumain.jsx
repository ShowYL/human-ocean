import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

// Importez vos fichiers SVG
import brain from '../ressources/brain.svg';
import blood from '../ressources/blood.svg';
import heart from '../ressources/heart.svg';
import lung from '../ressources/lung.svg';

export default function CorpsHumain() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Liste des SVG
  const svgs = [brain, blood, heart, lung];

  // Fonction pour aller à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? svgs.length - 1 : prevIndex - 1));
  };

  // Fonction pour aller à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === svgs.length - 1 ? 0 : prevIndex + 1));
  };

  // Utiliser D3 pour appliquer des animations ou styles
  useEffect(() => {
    const carousel = d3.select(carouselRef.current);

    // Ajouter une transition simple pour l'animation
    carousel
      .select('img')
      .transition()
      .duration(500)
      .style('opacity', 1)
      .transition()
      .duration(500)
      .style('opacity', 0.9);
  }, [currentIndex]);

  return (
    <div style={{ textAlign: 'center', position: 'relative', maxWidth: '600px', margin: 'auto' }}>
      <div ref={carouselRef} style={{ position: 'relative' }}>
        <img
          src={svgs[currentIndex]}
          alt={`Slide ${currentIndex}`}
          style={{
            width: '50%', // Largeur en pourcentage du conteneur parent
            height: 'auto', // Maintenir les proportions
            transition: 'opacity 0.5s ease-in-out',
            margin: 'auto',
          }}
        />
      </div>
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'none',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
        }}
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'none',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
        }}
      >
        ▶
      </button>
    </div>
  );
}
