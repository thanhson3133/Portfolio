import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
const Cube = () => {
  const textRef = useRef();

  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach={"map"}>
          <PerspectiveCamera makeDefault position={[0, 0, 3]} />
          <color attach={"background"} args={["#4c216d"]} />
          <Text ref={textRef} fontSize={1} color={"white"}>
            Developer
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
