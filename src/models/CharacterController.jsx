import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { Controls } from "../pages/Home.jsx";
import Character from "./character.jsx";
import * as THREE from 'three';

const JUMP_FORCE = 0.000000;
const MOVEMENT_SPEED = 0.00035;
const MAX_VEL = 0.000002;

export const CharacterController = () => {
  const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );
  const rigidbody = useRef();
  const isOnFloor = useRef(true);

  useFrame(() => {
    const impulse = { x: 0, y: 0, z: 0 };
    if (jumpPressed && isOnFloor.current) {
      impulse.y += JUMP_FORCE * 0.5;
      isOnFloor.current = false;
    }

    const direction = new THREE.Vector3();

    if (rightPressed) {
      direction.x += 1;
    }
    if (leftPressed) {
      direction.x -= 1;
    }
    if (backPressed) {
      direction.z += 1;
    }
    if (forwardPressed) {
      direction.z -= 1;
    }

    direction.normalize();

    impulse.x += direction.x * MOVEMENT_SPEED;
    impulse.z += direction.z * MOVEMENT_SPEED;

    if (rigidbody.current) {
      rigidbody.current.applyImpulse(impulse, true);
    }

    if (direction.lengthSq() > 0) {
      const angle = Math.atan2(direction.x, direction.z);
      character.current.rotation.y = angle;
    }
  });

  const character = useRef();
  return (
    <group>
      <RigidBody
        ref={rigidbody}
        colliders={false}
        scale={[0.1, 0.1, 0.1]}
        position={[-1.2,0,2]}
        enabledRotations={[false, false, false]}
        name="char"
        
      >
        <CapsuleCollider args={[0.8, 0.4]} position={[0, 1, 0]} />
        <group ref={character} scale={[0.009, 0.007, 0.009]} position={[0, 0, 0]} >
          <Character isMoving={forwardPressed || backPressed || leftPressed || rightPressed} />

        </group>
      </RigidBody>
    </group>
  );
};
