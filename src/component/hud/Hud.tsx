import styled from "styled-components"
import { IStyled } from "../../type"
import { Dot } from "./Dot"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { DotList } from "./DotList"
import { Button } from "../Button"

interface HudProps extends IStyled {
	itemCount: number
	selectedIndex: number
	effectOnLeftAngle: () => void
	effectOnRightAngle: () => void
	effectOnSelect: (n: number) => void
}

const arrowProps = {
	color: "#FFFFFF",
	size: 20,
}

const RawHud = (props: HudProps) => {
	const {
		itemCount,
		selectedIndex,
		effectOnLeftAngle,
		effectOnRightAngle,
		effectOnSelect,
	} = props
	if (itemCount <= 1) return <></>

	const dots: React.ReactNode[] = []

	for (let i = 0; i < itemCount; i++) {
		dots.push(
			<Dot
				key={i}
				effectOnClick={() => effectOnSelect(i)}
				selected={i === selectedIndex}
			/>
		)
	}
	return (
		<>
			<DotList>
				<Button effectOnClick={effectOnLeftAngle}>
					<FaAngleLeft {...arrowProps} />
				</Button>
				{dots}
				<Button effectOnClick={effectOnRightAngle}>
					<FaAngleRight {...arrowProps} />
				</Button>
				<span style={{ color: "coral" }}>{selectedIndex}</span>
			</DotList>
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
