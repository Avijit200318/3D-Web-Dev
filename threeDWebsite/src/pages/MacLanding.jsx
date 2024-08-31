import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContiner from '../components/MacContiner'

export default function MacLanding() {
    return (
        // if the prenet did not have width and height then canvas did not woking.
        <div className="w-full h-screen">
            <div className="absolute py-2 flex flex-col items-center text-white top-28 left-1/2 -translate-x-1/2">
                <h3 id='heading' className="text-4xl font-semibold">MackBook Pro</h3>
                <h5 className="">Oh so pro!</h5>
                <p className="text-center w-3/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt est quaerat officiis. Minus, quia.</p>
            </div>
            <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
                {/* <mesh>
            <boxGeometry />
            </mesh> */}
                <Environment files={'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_08_4k.exr'} />
                <ScrollControls pages={3}>
                    <MacContiner />
                </ScrollControls>
            </Canvas>
        </div>
    )
}
