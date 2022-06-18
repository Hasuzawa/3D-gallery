import styled from "styled-components"
import { IStyled } from "../type"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import Dice from "./object/Dice"


const canvasStyle = {
	background: "#000000"
}


interface SceneProps extends IStyled {}


const RawScene = (props: SceneProps) => {
	return (
		<Canvas style={canvasStyle}>
			<ambientLight intensity={1} />
			<OrbitControls minDistance={5} maxDistance={80}/>
			<PerspectiveCamera makeDefault position={[10,10,5]}/>
			<Dice />
		</Canvas>
	)
}


const Scene = styled(RawScene)`
`


export { Scene }
