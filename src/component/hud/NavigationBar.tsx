import styled from "styled-components"
import { IStyled } from "../../type"

interface NavigationBarProps extends IStyled {}

const RawNavigationBar = (props: NavigationBarProps) => {
	return <li className={props.className}>{props.children}</li>
}

const NavigationBar = styled(RawNavigationBar)`
	position: absolute;
	bottom: 5%;
	left: 0%;
	right: 0%;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	column-gap: 15px;
`

export { NavigationBar }
