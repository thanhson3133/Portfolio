import React from "react";
import Navbar from "./Navbar";
import line from "../assests/imgs/line.png";
import moon from "../assests/imgs/moon.png";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
const Hero = () => {
  return (
    <div className="h-screen snap-center flex justify-between flex-col items-center">
      <Navbar />
      <div className="h-screen snap-center container flex justify-between">
        <div
          className=" flex flex-col justify-center gap-5"
          style={{
            flex: 2,
          }}
        >
          <h1 className="font-bold text-7xl">Think. Make. Solve.</h1>
          <div className="flex items-center gap-3">
            <img src={line} alt="" className="h-1" />
            <h2 className="font-bold text-2xl text-violet-500">What we do</h2>
          </div>
          <p className="text-lg text-gray-400">
            we enjoy creating delightful, human-created digital experiences.
          </p>
          <button className="bg-violet-500 rounded text-white font-medium w-24 p-1 border-none cursor-pointer">
            Learn More
          </button>
        </div>
        <div
          className=" relative"
          style={{
            flex: 3,
          }}
        >
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color={"#4c216d"}
                attach={"material"}
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img
            src={moon}
            alt=""
            className="hero_animate object-contain absolute top-0 bottom-0 left-0 right-0 m-auto"
            style={{
              width: "800px",
              height: "600px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
