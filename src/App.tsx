import styled from "styled-components"
import { IStyled } from "./type"
import { Scene } from "./component/Scene"

interface AppProps extends IStyled {}


const RawApp = (props: AppProps) => {
	return (
		<div className={props.className}>
			<Scene />
		</div>
	)
}


const App = styled(RawApp)`
	height: 100%;
	width: 100%;
`


export default App
