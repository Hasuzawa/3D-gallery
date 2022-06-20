import styled from "styled-components"
import { IStyled } from "../../type"
import { Ring } from "./Ring"

interface DotProps extends IStyled {
	effectOnClick: () => void
	selected: boolean
}

const RawDot = (props: DotProps) => {
	const { className, effectOnClick, selected } = props
	return <span className={className}>{selected || <Ring />}</span>
}

const Dot = styled(RawDot)`
	display: inline-block;
	width: 6px;
	height: 6px;
	background-color: white;
	border-radius: 100%;

	position: relative;
`

export { Dot }
