import { Physics } from "@react-three/cannon";
import { MenuOptions } from "../Utils/menuOptions";
import { Center, Float } from "@react-three/drei";
import { Text3D, meshStandardMaterial, useMatcapTexture } from "@react-three/drei";
function Menu(){
    const [matcapTexture] = useMatcapTexture("04CC77_0CF7CA_04E9A7_04AB54");

    return <>
    <Center scale={[0.9, 1, 1]}>
        <Physics gravity={10}>
                {MenuOptions.map((option, index)=> {
                    return <Text3D
                    position={[-45, (-1*index), 0]}
                    scale={[-0.5, 0.5, 0.5]}                         
                    font={"/gt.json"}
                >
                    {option.name}
                    <meshMatcapMaterial  matcap={matcapTexture} />
                    <ambientLight intensity={0.6} color={"#dee2ff"} />

                </Text3D>
                })}
        </Physics>

    </Center>
    </>
}

export default Menu;