import styled from "styled-components"
import { IStyled } from "../../type"

interface DotListProps extends IStyled {}

const RawDotList = (props: DotListProps) => {
	return <li className={props.className}>{props.children}</li>
}

const DotList = styled(RawDotList)`
	position: absolute;
	bottom: 5%;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	column-gap: 30px;
`

export { DotList }
