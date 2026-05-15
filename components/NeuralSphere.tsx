'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function SphereMesh() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <sphereGeometry args={[2, 64, 64]} />

      <meshStandardMaterial
        color="#22D3EE"
        wireframe
      />
    </mesh>
  )
}

export default function NeuralSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>

      <ambientLight intensity={1.5} />

      <directionalLight position={[2, 2, 5]} />

      <SphereMesh />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={2}
      />

    </Canvas>
  )
}