import styled from "styled-components"
import { IStyled, Url } from "../../type"
import Link from "./Link"
import Tip from "./Tip"

interface CreditProps extends IStyled {}

const RawCredit = (props: CreditProps) => {
	const { className } = props
	return (
		<div className={className}>
			<Link />
			<Tip />
		</div>
	)
}

const Credit = styled(RawCredit)`
	position: absolute;
	top: 2%;
	left: 50%;
	transform: translateX(-50%);
	color: #ffffff;
	font-family: sans-serif;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	row-gap: 4px;
`

export { Credit }
