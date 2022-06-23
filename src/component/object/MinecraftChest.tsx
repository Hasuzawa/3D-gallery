/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three"
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
	nodes: {
		chest: THREE.Mesh
		Cube001: THREE.Mesh
		Cube001_1: THREE.Mesh
	}
	materials: {
		chest: THREE.MeshStandardMaterial
		lock: THREE.MeshStandardMaterial
	}
}

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
	const group = useRef<THREE.Group>()
	const { nodes, materials } = useGLTF("/minecraft_chest.glb") as GLTFResult
	return (
		<group ref={group as any} {...props} dispose={null}>
			<mesh geometry={nodes.chest.geometry} material={materials.chest} />
			<mesh
				geometry={nodes.Cube001.geometry}
				material={materials.chest}
			/>
			<mesh
				geometry={nodes.Cube001_1.geometry}
				material={materials.lock}
			/>
		</group>
	)
}

useGLTF.preload("/minecraft_chest.glb")
