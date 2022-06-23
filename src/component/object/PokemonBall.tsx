/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three"
import { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
	nodes: {
		Sphere002: THREE.Mesh
		Sphere002_1: THREE.Mesh
		Sphere002_2: THREE.Mesh
	}
	materials: {
		["white plastic"]: THREE.MeshStandardMaterial
		["black rubber"]: THREE.MeshStandardMaterial
		["red plastic"]: THREE.MeshStandardMaterial
	}
}

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
	const group = useRef<THREE.Group>()
	const { nodes, materials } = useGLTF(
		"/3D-gallery/pokemon_ball.glb"
	) as GLTFResult
	return (
		<group ref={group as any} {...props} dispose={null}>
			<group name="Scene">
				<group name="poker_ball">
					<mesh
						name="Sphere002"
						geometry={nodes.Sphere002.geometry}
						material={materials["white plastic"]}
					/>
					<mesh
						name="Sphere002_1"
						geometry={nodes.Sphere002_1.geometry}
						material={materials["black rubber"]}
					/>
					<mesh
						name="Sphere002_2"
						geometry={nodes.Sphere002_2.geometry}
						material={materials["red plastic"]}
					/>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload("/3D-gallery/pokemon_ball.glb")
