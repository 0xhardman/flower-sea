"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";

export default function MainBody() {
  const boxRef = useRef();
  const boxRef2 = useRef();
  // const animate = () => {
  //   boxRef.current.rotation.x += 0.01;
  //   boxRef.current.rotation.y += 0.01;
  // };
  // useEffect(() => {
  //   const animate = () => {
  //     boxRef.current.rotation.x += 0.01;
  //     boxRef.current.rotation.y += 0.01;
  //   };
  //   const frame = requestAnimationFrame(animate);
  //   return () => cancelAnimationFrame(frame);
  // }, []);
  // useEffect(() => {
  //   const animate = () => {
  //     boxRef.current.rotation.x += 0.01;
  //     boxRef.current.rotation.y += 0.01;
  //   };
  //   const frame = requestAnimationFrame(animate);
  //   return () => cancelAnimationFrame(frame);
  // }, []);
  return (
    <div className="w-screen h-screen">
      <Canvas
        // dpr={[1, 20]}
        camera={{
          position: [4, 4, 10],
          fov: 65,
          // aspect: window.innerWidth / window.innerHeight,
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[2, 1, 5]} />
        <mesh>
          <boxGeometry args={[4, 4, 4]} />
          <meshNormalMaterial />
        </mesh>
        <mesh position={new Vector3(3, 3, 4)}>
          <capsuleGeometry args={[1, 1, 4, 8]} />
          <meshNormalMaterial />
        </mesh>

        <OrbitControls />
      </Canvas>
    </div>
  );
}
