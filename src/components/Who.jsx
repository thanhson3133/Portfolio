import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import line from "../assests/imgs/line.png";
import Cube from "./Cube";
import styled from "styled-components";

const Left = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Right = styled.div`
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
const Title = styled.h1`
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;
const Who = () => {
  return (
    <div
      id="who"
      className="h-screen snap-center flex justify-between flex-col items-center"
    >
      <div className="h-screen snap-center container flex justify-between">
        <Left
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
        </Left>
        <Right
          className="flex flex-col justify-center gap-5"
          style={{
            flex: 1,
          }}
        >
          <Title className="font-bold text-7xl">
            Think outside the square space
          </Title>
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
        </Right>
      </div>
    </div>
  );
};

export default Who;
