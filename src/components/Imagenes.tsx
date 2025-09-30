import React, { useState } from "react";
import { Entity } from "aframe-react";
import ImagenDesc from "./ImagenDesc";

interface ImageData {
  id: number;
  position: string;
  src: string;
  title: string;
  description: string;
}

const Imagenes: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const images: ImageData[] = [
    {
      id: 1,
      position: "-2 1.5 -3",
      src: "gioconda.jpeg",
      title: "La Gioconda",
      description: "La pintura de la Gioconda, obra maestra de Leonardo da Vinci, más conocidad como la Monalisa. Es famosa por su enigmática sonrisa y su técnica de sfumato."
    },
    {
      id: 2,
      position: "2 1.5 -3",
      src: "viejo.jpeg",
      title: "El viejo guitarrista",
      description: "El viejo guitarrista, obra maestra de Pablo Picasso, creada en 1903. Representa a un anciano ciego tocando la guitarra. Es una obra emblemática del período azul de Picasso."
    }
  ];

  const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
  };

  const closeDescription = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {images.map((image) => (
        <Entity
          key={image.id}
          primitive="a-image"
          position={image.position}
          src={image.src}
          width="1"
          height="1"
          class="clickable"
          events={{
            click: () => handleImageClick(image)
          }}
        />
      ))}
      
      {selectedImage && (
        <ImagenDesc 
          image={selectedImage} 
          onClose={closeDescription} 
        />
      )}
    </>
  );
};

export default Imagenes;