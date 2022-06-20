import styled from "styled-components"
import { IStyled } from "../../type"
import { Dot } from "./Dot"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { DotList } from "./DotList"

interface HudProps extends IStyled {
	n: number
	effectOnLeftAngle: () => void
	effectOnRightAngle: () => void
}

const arrowColor = "#ffffff"

const RawHud = (props: HudProps) => {
	return (
		<>
			<DotList>
				<button onClick={props.effectOnLeftAngle}>
					<FaAngleLeft color={arrowColor} />
				</button>
				{[0, 1, 2].map((x, idx) => (
					<Dot key={idx} effectOnClick={() => console.log("ok")} />
				))}
				<button onClick={props.effectOnRightAngle}>
					<FaAngleRight color={arrowColor} />
				</button>
				<span style={{ color: "coral" }}>{props.n}</span>
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
