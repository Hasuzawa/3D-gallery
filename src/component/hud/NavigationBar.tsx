import styled from "styled-components"
import { IStyled } from "../../type"

interface NavigationBarProps extends IStyled {}

const RawNavigationBar = (props: NavigationBarProps) => {
	return <li className={props.className}>{props.children}</li>
}

const NavigationBar = styled(RawNavigationBar)`
	position: absolute;
	bottom: 5%;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	column-gap: 20px;
`

export { NavigationBar }
