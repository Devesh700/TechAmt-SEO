import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Spinning Sphere Component
const Sphere: React.FC = () => {
  const sphereRef = useRef<THREE.Mesh>(null); // Create a reference for the sphere

  // Animation frame to rotate the sphere
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01; // Adjust rotation speed here
      sphereRef.current.rotation.x += 0.005; // Adjust for a slight 3D effect
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial wireframe color="#3498db" />
    </mesh>
  );
};

// Main Spinning Web Sphere Component
const SpinningWebSphere: React.FC = () => {
  return (
    <Canvas style={{ width: '100%', height: '100vh' }} className='absolute right-0'>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      
      {/* Render the sphere */}
      <Sphere />
    </Canvas>
  );
};

export default SpinningWebSphere;
