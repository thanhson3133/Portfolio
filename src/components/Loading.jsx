import * as THREE from "three";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import "./styles.css";
import star from "../assests/imgs/star.png";

const Stars = (size) => {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];

  const sprite = new THREE.TextureLoader().load(star);

  for (let count = 0; count < 10000; count++) {
    const x = 2000 * Math.random() - 1000;
    const y = 2000 * Math.random() - 1000;
    const z = 2000 * Math.random() - 1000;

    vertices.push(x, y, z);
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );

  return (
    <points args={[geometry]} frustumCulled>
      <pointsMaterial
        size={size}
        sizeAttenuation={true}
        map={sprite}
        alphaTest={0.5}
        transparent={true}
      />
    </points>
  );
};

const Loading = ({ height, width, zIndex, size }) => {
  return (
    <Canvas style={{ height: height, width: width, zIndex: zIndex }}>
      <Stars size={size} />
      <OrbitControls autoRotate />
      <Stats />
    </Canvas>
  );
};

export default Loading;
