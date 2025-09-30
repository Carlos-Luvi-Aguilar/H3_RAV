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
      src: "montañas.jpeg",
      title: "Imagen 1",
      description: "Paisaje increíble con montañas y un cielo despejado."
    },
    {
      id: 2,
      position: "2 1.5 -3",
      src: "escultura.jpeg",
      title: "Imagen 2",
      description: "Escultura moderna con formas geométricas únicas."
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