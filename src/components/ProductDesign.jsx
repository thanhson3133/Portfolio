import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Atom from "./Atom";

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Atom />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="w-52 h-20 bg-white rounded-lg absolute bottom-52 right-24 text-black font-normal text-sm">
        We design products with a strong focus on both world class design and
        ensuring your product is a market success
      </div>
    </>
  );
};

export default ProductDesign;
