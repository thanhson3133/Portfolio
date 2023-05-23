import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import line from "../assests/imgs/line.png";
import Cube from "./Cube";
const Who = () => {
  return (
    <div className="h-screen snap-center flex justify-between flex-col items-center">
      <div className="h-screen snap-center container flex justify-between">
        <div
          className=" "
          style={{
            flex: 1,
          }}
        >
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </div>
        <div
          className="flex flex-col justify-center gap-5"
          style={{
            flex: 1,
          }}
        >
          <h1 className="font-bold text-7xl">Think outside the square space</h1>
          <div className="flex items-center gap-3">
            <img src={line} alt="" className="h-1" />
            <h2 className="font-bold text-2xl text-violet-500">Who we are?</h2>
          </div>
          <p className="text-lg text-gray-400">
            a creative group of designers and developers with a passion for the
            arts.
          </p>
          <button className="bg-violet-500 rounded text-white font-medium w-32 p-1 border-none cursor-pointer">
            See our works
          </button>
        </div>
      </div>
    </div>
  );
};

export default Who;
