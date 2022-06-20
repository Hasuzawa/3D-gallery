import styled from "styled-components"
import { IStyled } from "./type"
import { Scene } from "./component/Scene"
import { Hud } from "./component/hud/Hud"
import { useState, useEffect } from "react"
import { numberOfModel } from "./component/object/model"
import { rotate } from "./util"
import { model } from "./component/object/model"

interface AppProps extends IStyled {}

const RawApp = (props: AppProps) => {
	// const eventOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
	// 	if (e.code === "LeftArrow")
	// 		console.log("left arrow pressed")
	// 	else if (e.code === "RightArrow")
	// 		console.log("right arrow pressed")
	// }
	// onKeyDown={(e) => eventOnKeyDown(e)}

	// const [selectedModel, setSelectedModel] = useState<Model>()

	const [selectedIndex, setSelectedIndex] = useState<number>(0)
	const [selectedModel, setSelectedModel] = useState<any>(
		model[selectedIndex]
	)

	const changeSelectedIndex = (n: number) => {
		setSelectedIndex(rotate(n, 0, numberOfModel - 1))
	}
	const changeSelectedIndexMaker = (n: number) => {
		return changeSelectedIndex(selectedIndex + n)
	}
	// const increaseSelectedIndex = changeSelectedIndexMaker(1)
	// const decreaseSelectedIndex = changeSelectedIndexMaker(-1)
	const increaseSelectedIndex = () => {
		changeSelectedIndex(selectedIndex + 1)
	}
	const decreaseSelectedIndex = () => {
		changeSelectedIndex(selectedIndex - 1)
	}

	useEffect(() => {
		setSelectedModel(model[selectedIndex])
	}, [selectedIndex])

	return (
		<div className={props.className}>
			<Scene model={selectedModel} />
			<Hud
				itemCount={numberOfModel}
				selectedIndex={selectedIndex}
				effectOnLeftAngle={decreaseSelectedIndex}
				effectOnRightAngle={increaseSelectedIndex}
			/>
		</div>
	)
}

const App = styled(RawApp)`
	display: relative;
	height: 100%;
	width: 100%;
`

export default App
