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
	const [selectedIndex, setSelectedIndex] = useState<number>(0)
	const effectOnSelect = (n: number) => {
		setSelectedIndex(n)
	}

	const [selectedModel, setSelectedModel] = useState<React.ReactNode>(
		model[selectedIndex]
	)

	const changeSelectedIndex = (n: number) => {
		setSelectedIndex(rotate(n, 0, numberOfModel - 1))
	}

	const changeSelectedIndexHOF = (n: number) => () => {
		changeSelectedIndex(selectedIndex + n)
	}
	const increaseSelectedIndex = changeSelectedIndexHOF(1)
	const decreaseSelectedIndex = changeSelectedIndexHOF(-1)

	const effectOnKeyDown = <T = HTMLElement,>(e: React.KeyboardEvent<T>) => {
		switch (e.key) {
			case "ArrowLeft":
				decreaseSelectedIndex()
				break
			case "ArrowRight":
				increaseSelectedIndex()
				break
		}
	}

	useEffect(() => {
		setSelectedModel(model[selectedIndex])
	}, [selectedIndex])

	return (
		<div className={props.className}>
			<Scene model={selectedModel} effectOnKeyDown={effectOnKeyDown} />
			<Hud
				itemCount={numberOfModel}
				selectedIndex={selectedIndex}
				effectOnSelectLeft={decreaseSelectedIndex}
				effectOnSelectRight={increaseSelectedIndex}
				effectOnSelect={effectOnSelect}
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
