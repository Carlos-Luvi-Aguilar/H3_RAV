import React from "react";
import { Entity } from "aframe-react";

interface ImageData {
  id: number;
  position: string;
  src: string;
  title: string;
  description: string;
}

interface  ImagenDescProps {
  image: ImageData;
  onClose: () => void;
}

const ImagenDesc: React.FC< ImagenDescProps> = ({ image, onClose }) => {
  return (
    <>

      <Entity
        primitive="a-plane"
        position="0 2 -2"
        width="2.5"
        height="1.2"
        color="#222233"
        opacity="0.9"
        class="clickable"
      />
      

      <Entity
        primitive="a-text"
        value={image.title}
        position="0 2.5 -2"
        align="center"
        color="white"
        width="3"
      />
      

      <Entity
        primitive="a-text"
        value={image.description}
        position="0 2.2 -2"
        align="center"
        color="white"
        width="2.2"
        wrap-count="25"
      />
      

      <Entity
        primitive="a-plane"
        position="0 1.7 -2"
        width="0.5"
        height="0.2"
        color="#ff4444"
        class="clickable"
        events={{
          click: onClose
        }}
      />
      
      <Entity
        primitive="a-text"
        value="Cerrar"
        position="0 1.7 -2"
        align="center"
        color="white"
        width="1"
      />
    </>
  );
};

export default ImagenDesc;