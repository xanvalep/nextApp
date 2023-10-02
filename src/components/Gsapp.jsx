'use client'
import React, { useLayoutEffect, useRef,useState } from "react";
import { Canvas,useLoader,useFrame  } from "@react-three/fiber";
import styles from "../styles/canva.module.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import { Environment, OrbitControls } from "@react-three/drei"

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/gaming_laptop_free/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.1} position={[2.3,-4,0]} rotation={[19.3,6,0]}/>
    </>
  );
};

function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[0.6, 0.6, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function Gsapp() {
  const root = useRef();
  

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // all your animations go in here...
      gsap.to(".xxx", { rotation: "+=360" });
    }, root); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className={styles.myCanvas}>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0,0,10], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight color="#F9F871" position={[20, 3, 5]} />
        <Box position={[2, 3, -5]} />
        <Box position={[1.2,3.4, -5]} />
         <Model/>
        </Canvas>
      <div className="box"></div>
    </div>
  );
}
