import styled from "styled-components"
import { IStyled } from "../../type"

interface DotProps extends IStyled {
	effectOnClick: () => void
}

const RawDot = (props: DotProps) => {
	return <span className={props.className} />
}

const Dot = styled(RawDot)`
	display: inline-block;
	width: 6px;
	height: 6px;
	background-color: white;
	border-radius: 9999px;
`

export { Dot }
