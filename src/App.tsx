import styled from "styled-components"
import { IStyled } from "./type"
import { Scene } from "./component/Scene"
// import { Hud } from "./component/hud/Hud"

interface AppProps extends IStyled {}

const RawApp = (props: AppProps) => {
	// const eventOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
	// 	if (e.code === "LeftArrow")
	// 		console.log("left arrow pressed")
	// 	else if (e.code === "RightArrow")
	// 		console.log("right arrow pressed")
	// }
	// onKeyDown={(e) => eventOnKeyDown(e)}
	return (
		<div className={props.className}>
			<Scene />
			{/* <Hud /> */}
		</div>
	)
}

const App = styled(RawApp)`
	display: relative;
	height: 100%;
	width: 100%;
`

export default App
