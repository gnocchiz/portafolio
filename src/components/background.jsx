import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = ({ isRotating, ...props }) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.1 })
  );

  useFrame((state, delta) => {
    
    if (isRotating ) {
      
      ref.current.rotation.y -= 1.5  * delta;
    } else {
      ref.current.rotation.y -= 0.01 * delta;
  }
  });

  return (
    <group rotation={[0, 0, 0]} ref={ref}>
      <Points positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="white"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = ({ isRotating, ...props }) => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 0.5] }}>
      <Suspense fallback={null}>
        
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
