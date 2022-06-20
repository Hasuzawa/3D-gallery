import styled from "styled-components"
import { IStyled } from "../../type"
import { Ring } from "./Ring"

interface DotRingProps extends IStyled {
	selected: boolean
}

const RawDotRing = (props: DotRingProps) => {
	const { className, selected } = props
	return <span className={className}>{selected || <Ring />}</span>
}

const DotRing = styled(RawDotRing)`
	display: inline-block;
	width: 10px;
	height: 10px;
	background-color: white;
	border-radius: 100%;

	position: relative;
`

export { DotRing }
