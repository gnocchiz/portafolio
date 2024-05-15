  import React, { useState, Suspense,useMemo } from "react";
  import { Canvas } from "@react-three/fiber";
  import { EffectComposer, Bloom, DepthOfField } from "@react-three/postprocessing";
  import Loader from "../components/Loader";
  import IMac from "../models/imac";
  import { CharacterController }  from "../models/CharacterController";
  import { OrbitControls, KeyboardControls } from "@react-three/drei";
  import { Physics } from "@react-three/rapier";
  import Room from "../models/room.jsx";

  import { CuboidCollider, RigidBody } from "@react-three/rapier";

  import PlaySound from "../components/sound.jsx"

  export const Controls = {
    forward: "forward",
    back: "back",
    left: "left",
    right: "right",
    jump: "jump",
  };
  
  const Home = () => {
    const adjustIMacForScreenSize = () => {
      let screenScale = [5, 5, 5];
      let screenPosition = [0, -4.5, 1];

      if (window.innerWidth < 768) {
        screenScale = [5, 5, 5]; 
      }

      return [screenScale, screenPosition];
    };
    
    const [imacScale, imacPosition] = adjustIMacForScreenSize();
    

    const map = useMemo(
        () => [
          { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
          { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
          { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
          { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
          { name: Controls.jump, keys: ["Space"] },
        ],
        []
      );

    const [showInfoWindow, setShowInfoWindow] = useState(false);

    const handleCollision = () => {
  
      setShowInfoWindow(true);
    };
    const handleCollisionExit = () => {
  
      setShowInfoWindow(false);
    };

    const [ventanaVisible, setVentanaVisible] = useState(true);
  
    const handleBotonClick = () => {
      setVentanaVisible(false);
    };
    
    return (
      
      <section className="w-full h-screen relative z-[0]">
        {showInfoWindow && (
        <div className="info-window-container">
        <div className="info-window">
          
          <h1>Hello, I'm Luka, a web developer from de netherlands</h1>
          <p>Ik ben een enthousiaste student die
onlangs naar Nederland ben gekomen
om als persoon te groeien en om het
land leren kennen. Nu ben ik bezig met
de opleiding mbo4
softwareontwikkelaar.
Ik kijk ernaar uit om in de toekomst te
werken als programmeur in een
uitdagende en inspirerende omgeving.</p>
        </div>
      </div>
      )}
      
      {ventanaVisible && (
        <div className="start-background">
        <div className="start-window-container">
      
          <h1>Welkom bij mijn portfolio (het is nog niet klaar)</h1>
          <p>Met WASD loop je door de omgeving en heb interactie met elementen</p>
          
        <div className="start-window">
          
          <button className="btn" onClick={handleBotonClick}>Begrepen</button>
        </div>
        </div>
      
    </div>
  )}
        <KeyboardControls map={map}>

        <Canvas style={{ zIndex: -1 }}

        
        
          
          className={`w-full h-screen bg-[#f2f2f2]`}
        >
          <Suspense fallback={<Loader />}>
        
            <Physics debug broadphase="SweepAndPrune">
            <directionalLight position={[0, 1, 1]} intensity={3} castShadow />
            <ambientLight intensity={1.5} />

            <OrbitControls
              enablePan={false} 
              enableZoom={false} 
              enableRotate={false} 
              position={[0, 30, 30]} />


            <IMac
              imacPosition={imacPosition}
              imacScale={imacScale}
              rotation={[0, -6.1, 0]}
            />
            <CharacterController
              
          
            />

            <RigidBody
            colliders={false}
            type="fixed"
            position-y={-1.9}
            friction={3}
            rotation={[0,-6.1,0]}
            
            >
            <CuboidCollider args={[4.5, 0.5, 4]} />
        
            </RigidBody>


            
            <Room/>

            <RigidBody position={[-1.8, -.8, 2.9]} rotation={[0,-3,0]}>
          <CuboidCollider
            args={[.3, .05, .4]} 
            onCollisionEnter={({other}) => {
              if (other.rigidBodyObject.name == "char"){
              handleCollision();
              }
            }}
            onCollisionExit={({other}) => {
              if (other.rigidBodyObject.name == "char"){
              console.log("Colisión detectada");
              handleCollisionExit();
              }
            }}
            isSensor={true} 
          />
        </RigidBody>
          
            
            </Physics>

            
          </Suspense>
         

        </Canvas>
        </KeyboardControls>
        <PlaySound/>

      

      </section>
    );
  };

  export default Home;
