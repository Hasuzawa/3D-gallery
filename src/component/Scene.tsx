import styled from "styled-components"
import { IStyled } from "../type"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Suspense } from "react"

const canvasStyle = {
	background: "#000000",
}

interface SceneProps<T = HTMLElement> extends IStyled {
	model?: React.ReactNode
	effectOnKeyDown: (e: React.KeyboardEvent<T>) => void
}

const RawScene = (props: SceneProps<HTMLDivElement>) => {
	return (
		<Canvas
			tabIndex={0}
			style={canvasStyle}
			onKeyDown={props.effectOnKeyDown}
		>
			<ambientLight intensity={0.5} />
			<spotLight intensity={1} position={[5, 5, 5]} />
			<OrbitControls minDistance={5} maxDistance={80} />
			<PerspectiveCamera makeDefault position={[10, 10, 5]} />
			<Suspense fallback={<></>}>{props.model}</Suspense>
		</Canvas>
	)
}

const Scene = styled(RawScene)``

export { Scene }
