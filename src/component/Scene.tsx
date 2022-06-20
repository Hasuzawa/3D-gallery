import styled from "styled-components"
import { IStyled } from "../type"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"

const canvasStyle = {
	background: "#000000",
}

interface SceneProps extends IStyled {
	model?: React.ReactNode
}

const RawScene = (props: SceneProps) => {
	return (
		<Canvas style={canvasStyle}>
			<ambientLight intensity={0.5} />
			<spotLight intensity={1} position={[5, 5, 5]} />
			<OrbitControls minDistance={5} maxDistance={80} />
			<PerspectiveCamera makeDefault position={[10, 10, 5]} />
			{props.model}
		</Canvas>
	)
}

const Scene = styled(RawScene)`
	position: absolute;
`

export { Scene }
