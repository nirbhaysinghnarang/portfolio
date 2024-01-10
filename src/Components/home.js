import React, { useRef, Suspense, useState } from 'react';
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
import { Physics } from "@react-three/cannon";
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { options } from '../Utils/menuOptions';


function Home() {
    const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
    return (
        <>
            <Center scale={[0.9, 1, 1]}>

                    <Physics gravity={10}>
                        <Float speed={1}>
                            <Text3D
                                position={[0, 0, 0]}
                                scale={[-1, 1, 1]}
                                font={"/gt.json"}
                                curveSegments={24}
                                brevelSegments={1}
                                bevelEnabled
                                bevelSize={0.08}
                                bevelThickness={0.03}
                                height={1}
                                lineHeight={0.9}
                                letterSpacing={0.3}
                            >
                                {`Nirbhay\nSingh\nNarang`}
                                <meshMatcapMaterial color="white" matcap={matcapTexture} />
                                <ambientLight intensity={0.6} color={"#dee2ff"} />

                            </Text3D>
                            <Text3D
                                position={[0, -5, 0]}
                                scale={[-1, 1, 1]}
                                font={"/gt.json"}
                                curveSegments={24}
                                brevelSegments={1}
                                bevelEnabled
                                bevelSize={0.08}
                                bevelThickness={0.005}
                                height={1}
                                lineHeight={0.9}
                                letterSpacing={0.3}
                            >
                                {"CS@Cornell"}
                                <meshMatcapMaterial color="white" matcap={matcapTexture} />
                                <ambientLight intensity={0.6} color={"#dee2ff"} />

                           

                            </Text3D>
                        </Float>
                    </Physics>

            </Center>
        </>
    );
}

export default Home;



