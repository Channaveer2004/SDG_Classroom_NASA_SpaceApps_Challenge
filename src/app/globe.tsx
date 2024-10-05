"use client";

import { useEffect, useRef } from 'react';
import Globe from 'globe.gl';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';


export default function GlobePage() {
  const globeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== 'undefined' && globeRef.current) {
      const world = Globe({ animateIn: false })(globeRef.current)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png');

      // Auto-rotate
      world.controls().autoRotate = true;
      world.controls().autoRotateSpeed = 0.35;

      // Disable zoom and pan
      world.controls().enableZoom = false;
      world.controls().enablePan = false;

      // Add clouds sphere
      const CLOUDS_IMG_URL = "../public/clouds.png"; // Make sure to have the image accessible from the public folder
      const CLOUDS_ALT = 0.004;
      const CLOUDS_ROTATION_SPEED = -0.006; // deg/frame

      new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture: THREE.Texture) => {
        const clouds = new THREE.Mesh(
          new THREE.SphereGeometry(world.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
          new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
        );
        world.scene().add(clouds);

        (function rotateClouds() {
          clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
          requestAnimationFrame(rotateClouds);
        })();
      });

      // Add lights to make the text visible
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(10, 10, 10);
      world.scene().add(ambientLight);
      world.scene().add(pointLight);

      // Add 3D text "Hello World"
      const loader = new FontLoader();
      loader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
        const textGeometry = new TextGeometry('Hello World', {
          font: font,
          size: 2, // Increased size for better visibility
          height: 0.5,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.1,
          bevelSize: 0.05,
          bevelOffset: 0,
          bevelSegments: 5
        });

        const textMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);

        // Center the text
        textGeometry.computeBoundingBox();
        if (textGeometry.boundingBox) {
          const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
          textMesh.position.set(-textWidth / 2, 0, 0);
        }

        // Create a container for the text to handle rotation
        const textContainer = new THREE.Object3D();
        textContainer.add(textMesh);
        textContainer.position.set(0, world.getGlobeRadius() + 5, 0); // Adjusted position for better visibility
        world.scene().add(textContainer);

        // Rotate the text container
        (function rotateText() {
          textContainer.rotation.y += 0.01;
          requestAnimationFrame(rotateText);
        })();
      });

      // Ensure the scene is rendered
      world.renderer().setAnimationLoop(() => {
        world.renderer().render(world.scene(), world.camera());
      });
    }
  }, []);

  return (
    <div ref={globeRef} style={{ width: '80vw', height: '100vh' }} />
  );
}
