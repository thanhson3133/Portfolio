import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Cube from "./Cube";

const Test = () => {
  return (
    <div className="h-screen w-full snap-center">
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Cube />
      </Canvas>
    </div>
  );
};

export default Test;
