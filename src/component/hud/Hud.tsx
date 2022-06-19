import styled from "styled-components"
import { IStyled } from "../../type"
import { Dot } from "./Dot"
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi"

interface HudProps extends IStyled {}

const RawHud = (props: HudProps) => {
	return (
		<>
			{/* <div style={{position: "absolute", }}>
		
			</div> */}
			<li
				style={{
					display: "flex",
					columnGap: 30,
					position: "absolute",
					top: 0,
					left: 0,
				}}
			>
				<HiOutlineArrowLeft />
				<Dot />
				<Dot />
				<Dot />
				<HiOutlineArrowRight />
			</li>
			<h1
				style={{
					color: "red",
					position: "absolute",
					left: 0,
					bottom: 0,
				}}
			>
				hello world
			</h1>
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
