import React, { useRef, Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import {
    OrbitControls,
    Stars,
} from "@react-three/drei";
import Home from './home';
import Experience from './experience';
import { Bloom, Noise, Vignette } from '@react-three/postprocessing';
import { EffectComposer } from '@react-three/postprocessing';


export function CameraSetup() {
    const { camera } = useThree();
    useEffect(() => {
        camera.position.set(0, 0, -100);
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();
    }, [camera]);
    return null;
}

function Index() {
    const { camera, gl } = useThree();
    const controlsRef = useRef();
    return (
        <>
            <CameraSetup></CameraSetup>
            <EffectComposer>
                <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
                <Noise opacity={0.02} />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
                <OrbitControls
                    enableZoom={true}
                    autoRotate={true}
                    ref={controlsRef}
                    args={[camera, gl.domElement]}
                    autoRotateSpeed={-0.1}
                    enablePan={true}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}
                    zoomSpeed={0.15}
                    dampingFactor={0.05}
                />
                <ambientLight intensity={0.5} />
                <pointLight position={[5, 5, 5]} />
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
                    {/* <Home /> */}
                    <Experience ref={controlsRef} camera={camera} gl={gl}></Experience>
                </Suspense>


            </EffectComposer>

        </>
    );
}

export default Index;
