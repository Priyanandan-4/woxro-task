'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Cube({ size = 300, photos, rotationSpeed = 0.01 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !photos || photos.length !== 6) return;

    // Scene setup
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      antialias: true,
      alpha: true // Transparent background
    });
    
    renderer.setSize(size, size);
    
    // Camera with 1:1 aspect ratio
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    // Cube geometry
    const geometry = new THREE.BoxGeometry(2, 2, 2);

    // Load textures
    const textureLoader = new THREE.TextureLoader();
    const materials = photos.map(photo => 
      new THREE.MeshBasicMaterial({ 
        map: textureLoader.load(photo),
        side: THREE.DoubleSide
      })
    );

    // Create cube
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += rotationSpeed;
      cube.rotation.y += rotationSpeed;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
    };
  }, [size, photos, rotationSpeed]);

  return (
    <canvas 
      ref={canvasRef} 
      width={size} 
      height={size}
      className="block"
    />
  );
}