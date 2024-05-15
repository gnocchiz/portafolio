import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import RoomScene from '../assets/3d/lroom.glb';


export default function Room(props) {
  const meshRef = useRef();
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(RoomScene, (gltf) => {
      const model = gltf.scene;

      

      model.scale.set(5, 5, 5);
      model.position.set(11, -5, 13);
      model.rotation.set(0, 30, 0);
      meshRef.current.add(model);
      setModelLoaded(true);
    });

    return () => {
      loader.dispose();
    };
  }, []);

  

  return <group ref={meshRef} />;
}