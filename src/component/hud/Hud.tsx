import styled from "styled-components"
import { IStyled } from "../../type"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { NavigationBar } from "./NavigationBar"
import { Button } from "../Button"
import { DotRing } from "./DotRing"
import { Headline } from "./Headline"

interface HudProps extends IStyled {
	itemCount: number
	selectedIndex: number
	effectOnSelectLeft: () => void
	effectOnSelectRight: () => void
	effectOnSelect: (n: number) => void
	displayHud: boolean
}

const arrowProps = {
	color: "#FFFFFF",
	size: 20,
}

const RawHud = (props: HudProps) => {
	const {
		itemCount,
		selectedIndex,
		effectOnSelectLeft,
		effectOnSelectRight,
		effectOnSelect,
		displayHud,
	} = props

	if (!displayHud || itemCount <= 1) return <></>

	const buttons: React.ReactNode[] = []

	buttons.push(
		<Button key={itemCount} effectOnClick={effectOnSelectLeft}>
			<FaAngleLeft {...arrowProps} />
		</Button>
	)
	for (let i = 0; i < itemCount; i++) {
		buttons.push(
			<Button key={i} effectOnClick={() => effectOnSelect(i)}>
				<DotRing selected={i === selectedIndex} />
			</Button>
		)
	}
	buttons.push(
		<Button key={itemCount + 1} effectOnClick={effectOnSelectRight}>
			<FaAngleRight {...arrowProps} />
		</Button>
	)
	return (
		<>
			<Headline />
			<NavigationBar>{buttons}</NavigationBar>
		</>
	)
}

const Hud = styled(RawHud)`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background-color: "red";
`

export { Hud }
