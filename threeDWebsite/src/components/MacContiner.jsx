import { ScrollControls, useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React from 'react'
import * as THREE from "three";

export default function MacContiner() {
    let model = useGLTF('./images/mac.glb');
    let tex = useTexture('./images/red.jpg');

    let meshes = {};
    model.scene.traverse((e) => {
        // if(e instanceof THREE.Mesh || e instanceof THREE.Group){
        //     meshes[e.name] = e;
        // }
        // this line or this because we want to screen
        meshes[e.name] = e;
    })

    console.log(meshes);

    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map = tex;
    // set the texture to the screen. but it will show very lightly
    meshes.matte.material.emissiveIntensity = 0;
    // it solve the previous problem. but still we get a white light

    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;


    const data = useScroll();
    // this give us scroll value 0 to 1. we will use it inside the useFrame

    useFrame((state, delta) => {
        // console.log(data.offset);
        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
    })

    return (
            <group position={[0, -10, 20]}>
                <primitive object={model.scene} />
            </group>
        // primitive help us to show the laptop
    )
}
