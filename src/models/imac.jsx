import React, { useRef, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import IMacScene from '../assets/3d/Sketchfab_Scene.glb';

const IMac = ({ isRotating, imacPosition, imacScale, rotation, ...props }) => {
  const meshRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(IMacScene, (gltf) => {
      const model = gltf.scene;
      // Configurar sombras en el modelo
      model.traverse(function (child) {
        if (child.isMesh) 
          child.castShadow = true; // Permitir que el modelo arroje sombras
          child.receiveShadow = true;
        
      });
      meshRef.current.add(model);
    });

    return () => {
      loader.dispose();
    };
  }, []);

  return (
    <mesh ref={meshRef} position={imacPosition} scale={imacScale} rotation={rotation} {...props} />
  );
};

export default IMac;

