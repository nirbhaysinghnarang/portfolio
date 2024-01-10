import { useSphere } from "@react-three/cannon";
function PhysicsSphere({ position, onClick, matcap, mass=1 }) {
    const [ref] = useSphere(() => ({
        mass:mass, // assign mass
        position,
    }));

    return (
        <mesh ref={ref} onClick={onClick}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshMatcapMaterial matcap={matcap} />
        </mesh>
    );
}

export default PhysicsSphere