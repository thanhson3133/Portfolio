import React, { useMemo } from "react";
import { Line, OrbitControls, Sphere } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// You can draw the shape in this way if do not want to import a ready-to-use 3D model.
const Shape = () => {
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 2, 1, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );
  return (
    <group>
      <Line worldUnits points={points} color="#cae6f1" lineWidth={0.2} />
      <Line
        worldUnits
        points={points}
        color="#cae6f1"
        lineWidth={0.2}
        rotation={[0, 0, 1]}
      />
      <Line
        worldUnits
        points={points}
        color="#cae6f1"
        lineWidth={0.2}
        rotation={[0, 0, -1]}
      />
      <OrbitControls enableZoom={false} autoRotate />
      <Sphere args={[0.2, 64, 64]}>
        <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
      </Sphere>
    </group>
  );
};

const Atom = () => {
  return (
    <>
      <Shape />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
      </EffectComposer>
    </>
  );
};

export default Atom;
