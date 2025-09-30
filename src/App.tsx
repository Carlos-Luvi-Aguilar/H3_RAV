import React from "react";
import { Entity, Scene } from "aframe-react";
import HelloName from "./components/HelloName";
import Imagenes from "./components/Imagenes";

const App: React.FC = () => {
  const handleBoxClick = () => {
    const box = document.querySelector("a-box");
    if (box) {
      box.setAttribute(
        "color",
        "#" + Math.floor(Math.random() * 16777215).toString(16)
      );
    }
  };

  return (
    <Scene>
      <Entity primitive="a-sky" src="360.jpg" rotation="0 -90 0" />

      <Entity primitive="a-camera" position="0 1.6 0">
        <Entity 
          primitive="a-cursor" 
          animation__click="property: scale; from: 1 1 1; to: 0.8 0.8 0.8; dur: 150; startEvents: click"
          raycaster="objects: .clickable"
        />
      </Entity>

      {/* <Entity 
        primitive="a-box" 
        position="0 1.5 -3" 
        width={1} 
        height={1} 
        depth={1} 
        color="tomato" 
        class="clickable"
        events={{
          click: handleBoxClick
        }}
      /> */}

      <HelloName name="Carlos" />
      
      <Imagenes />

    </Scene>
  );
};

export default App;