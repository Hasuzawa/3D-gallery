import styled from "styled-components"
import { IStyled } from "./type"
import { Scene } from "./component/Scene"
import { Hud } from "./component/hud/Hud"
import { useState } from "react"
import { numberOfModel } from "./component/object/model"
import { model } from "./component/object/model"
import { useRotateIndex } from "./hook"

interface AppProps extends IStyled {}

const RawApp = (props: AppProps) => {
	const { index, increaseIndex, decreaseIndex, changeIndex } = useRotateIndex(
		0,
		0,
		numberOfModel - 1
	)
	const [displayHud, setDisplayHud] = useState<boolean>(true)
	const toggleDisplayHud = () => setDisplayHud(!displayHud)

	const effectOnKeyDown = <T = HTMLElement,>(e: React.KeyboardEvent<T>) => {
		switch (e.key) {
			case "ArrowLeft":
			case "Q":
			case "q":
				decreaseIndex()
				break
			case "ArrowRight":
			case "W":
			case "w":
				increaseIndex()
				break
			case "P":
			case "p":
				toggleDisplayHud()
				break
		}
	}

	return (
		<main className={props.className}>
			<Scene model={model[index]} effectOnKeyDown={effectOnKeyDown} />
			<Hud
				itemCount={numberOfModel}
				selectedIndex={index}
				effectOnSelectLeft={decreaseIndex}
				effectOnSelectRight={increaseIndex}
				effectOnSelect={(n: number) => changeIndex(n, 0, numberOfModel)}
				displayHud={displayHud}
			/>
		</main>
	)
}

const App = styled(RawApp)`
	display: relative;
	height: 100%;
	width: 100%;
`

export default App
