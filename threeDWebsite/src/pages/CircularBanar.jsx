import React from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Scene from '../components/Scene.jsx'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'

export default function CircularBanar() {

  return (
    <>
      <Canvas flat camera={{ fov: 35 }}>
        <OrbitControls />
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={2.0} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0}
          />
        </EffectComposer>
      </Canvas>
      <div className="w-fll my-4 bg-black">
        <h1 className="text-white">Welcome to Three Js</h1>
      </div>
    </>
  )
}
