import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import CharScene from '../assets/3d/untitled.glb';
import * as THREE from 'three';

export default function Character({ isMoving }) {
  const meshRef = useRef();
  const mixer = useRef();
  const runAction = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(CharScene, (gltf) => {
      const model = gltf.scene;
      meshRef.current.add(model);
  
      const animations = gltf.animations;
      const modelAnimations = animations.length ? animations : [];
  
      mixer.current = new THREE.AnimationMixer(model);
  
      if (modelAnimations.length > 0) {
        const runClip = THREE.AnimationClip.findByName(modelAnimations, 'walk');
        const idleClip = THREE.AnimationClip.findByName(modelAnimations, 'idle');
        if (runClip && idleClip) {
          runAction.current = mixer.current.clipAction(runClip);
          const idleAction = mixer.current.clipAction(idleClip);
  
          idleAction.play();
        }
      }
    });
  
    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
      }
      meshRef.current.remove(meshRef.current.children[0]);
    };
  }, []);

  useEffect(() => {
    if (runAction.current) {
      if (isMoving) {
        runAction.current.play();
      } else {
        runAction.current.stop();
      }
    }
  }, [isMoving]);

  useFrame((_, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return <group ref={meshRef} />;
}
