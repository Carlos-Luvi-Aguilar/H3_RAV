import React from "react";
import { Entity } from "aframe-react";

interface HelloNameProps {
  name: string;
}

const HelloName: React.FC<HelloNameProps> = ({ name }) => {
  return (
    <Entity
      text={{
        value: `Hola, ${name}!`,
        align: "center",
        width: 6,
        color: "yellow",
      }}
      position={{ x: 0, y: 2, z: -3 }}
    />
  );
};

export default HelloName;
