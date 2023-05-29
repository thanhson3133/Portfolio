import React from "react";
import Navbar from "./Navbar";
import line from "../assests/imgs/line.png";
import moon from "../assests/imgs/moon.png";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import styled from "styled-components";

const Section = styled.div`
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;
const Container = styled.div`
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;
const Title = styled.h1`
  @media only screen and (max-width: 768px) {
    font-size: 60px;
    line-height: 1;
    text-align: center;
  }
`;
const Desc = styled.p`
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;
const Right = styled.div`
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    margin-top: -200px;
  }
`;
const Img = styled.img`
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
const Hero = () => {
  return (
    <Section
      id="hero"
      className="h-screen snap-center flex justify-between flex-col items-center"
    >
      <Navbar />
      <Container className="h-full snap-center container flex justify-between">
        <Left
          className=" flex flex-col justify-center gap-5"
          style={{
            flex: 2,
          }}
        >
          <Title className="font-bold text-7xl">Think. Make. Solve.</Title>
          <div className="flex items-center gap-3">
            <img src={line} alt="" className="h-1" />
            <h2 className="font-bold text-2xl text-violet-500">What we do</h2>
          </div>
          <Desc className="text-lg text-gray-400">
            we enjoy creating delightful, human-created digital experiences.
          </Desc>
          <button className="bg-violet-500 rounded text-white font-medium w-24 p-1 border-none cursor-pointer">
            Learn More
          </button>
        </Left>
        <Right
          className=" relative"
          style={{
            flex: 3,
          }}
        >
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[0.9, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color={"#4c216d"}
                attach={"material"}
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img
            src={moon}
            alt=""
            className="hero_animate object-contain absolute top-0 bottom-0 left-0 right-0 m-auto"
            style={{
              width: "800px",
              height: "600px",
            }}
          />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
