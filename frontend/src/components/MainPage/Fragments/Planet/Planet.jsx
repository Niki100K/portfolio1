import React, { useRef } from 'react';
import './Planet.css'
import { Canvas, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useDrag } from 'react-use-gesture';
import venus_surface from '../../../../assets/8k_venus_surface.jpg'

const RotatingPlanet = () => {
    const planetRef = useRef();
  
    useFrame(() => {
      planetRef.current.rotation.y += 0.001;
    });
  
    const bind = useDrag(({ offset: [x, y] }) => {
      planetRef.current.rotation.y = x * 0.003;
    });
  
    return (
      <mesh ref={planetRef} {...bind()}>
        <sphereGeometry args={[2.5, 40, 40]} />
        <meshStandardMaterial map={new TextureLoader().load(venus_surface)} />
      </mesh>
    );
  };

export const Planet = () => {
    return (
        <div className='card planet c f'>
            <div className='planet3d c'>
                <Canvas>
                  <ambientLight />
                  <pointLight position={[10, 10, 10]} />
                  <RotatingPlanet />
                </Canvas>
            </div>
            <div className='text c f'>
              <h2>Every project is like a star</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iure praesentium debitis voluptatum nisi non optio. Iste, rerum tempore! Harum, eos! Id, aperiam quis!</p>
            </div>
        </div>
    )
}