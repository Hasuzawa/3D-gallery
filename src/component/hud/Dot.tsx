import styled from "styled-components"
import { IStyled } from "../../type"
import { Button } from "../Button"
import { Ring } from "./Ring"

interface DotProps extends IStyled {
	effectOnClick: () => void
	selected: boolean
}

const RawDot = (props: DotProps) => {
	const { className, effectOnClick, selected } = props
	return (
		<Button className={className} effectOnClick={effectOnClick}>
			{selected || <Ring />}
		</Button>
	)
}

const Dot = styled(RawDot)`
	display: inline-block;
	width: 10px;
	height: 10px;
	background-color: white;
	border-radius: 100%;

	position: relative;
`

export { Dot }
