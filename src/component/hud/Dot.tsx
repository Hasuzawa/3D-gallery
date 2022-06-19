import styled from "styled-components"
import { IStyled } from "../../type"

interface DotProps extends IStyled {}

const RawDot = (props: DotProps) => {
	return <span className={props.className} />
}

const Dot = styled(RawDot)`
	display: inline-block;
	width: 20px;
	height: 20px;
	background-color: coral;
	border-radius: 9999px;
`

export { Dot }
