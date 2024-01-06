import React, { useRef, Suspense, useState} from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import {
    Text3D,
    OrbitControls,
    Center,
    Stars,
    Float,
    Sparkles,
    useMatcapTexture,
    Html
} from "@react-three/drei";
import Home from './home';
import Menu from './menu';
function Index() {
    return (
        <div className='scene'>
            <Canvas>
                <OrbitControls
                    enableZoom={true}
                    autoRotate={true}
                    autoRotateSpeed={-0.1}
                    enablePan={true}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}
                    zoomSpeed={0.15}
                    dampingFactor={0.05}
                />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={"Loading"}>
                    <Stars
                        radius={100}
                        depth={100}
                        count={4000}
                        factor={4}
                        saturation={0}
                        fade
                        speed={0.2}
                    />
                    <Sparkles
                        count={300}
                        size={3}
                        speed={0.02}
                        opacity={1}
                        scale={10}
                        color="#fff3b0"
                    />
                    <Home />
                    <Menu></Menu>
           
                </Suspense>



            </Canvas>
        </div>

    );
}

export default Index;
