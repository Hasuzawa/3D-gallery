import styled from "styled-components"
import { IStyled } from "../../type"
import Link from "./Link"
import Tip from "./Tip"

interface HeadlineProps extends IStyled {}

const RawHeadline = (props: HeadlineProps) => {
	const { className } = props
	return (
		<div className={className}>
			<Link />
			<Tip />
		</div>
	)
}

const Headline = styled(RawHeadline)`
	position: absolute;
	top: 2%;
	left: 0%;
	right: 0%;
	color: #ffffff;
	font-family: sans-serif;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	row-gap: 4px;
`

export { Headline }
