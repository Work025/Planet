import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import planetModel from "../Assets/planet.glb"

function Model() {
    const { scene } = useGLTF(planetModel)

    const tiltRef = useRef()   // Egilish uchun
    const rotateRef = useRef() // Aylanish uchun

    useFrame(() => {
        if (rotateRef.current) {
            rotateRef.current.rotation.y += 0.003
        }
    })

    return (
        <group ref={tiltRef} rotation={[0.5, 0, 0.5]}>
            <primitive
                ref={rotateRef}
                object={scene}
                scale={0.3}
            />
        </group>
    )
}

function Planet() {
    return (
        <Canvas camera={{ position: [0, 1, 7], fov: 50 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} />
            <Model />
        </Canvas>
    )
}

export default Planet