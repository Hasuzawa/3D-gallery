import styled from "styled-components"
import { IStyled } from "../type"

interface ButtonProps extends IStyled {
	effectOnClick: () => void
	width?: number
	height?: number
}

const RawButton = (props: ButtonProps) => {
	const { className, effectOnClick, children } = props
	return (
		<button className={className} onClick={effectOnClick}>
			{children}
		</button>
	)
}

const Button = styled(RawButton)`
	width: ${({ width }) => width ?? 40}px;
	height: ${({ height }) => height ?? 40}px;
	background-color: transparent;

	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`

export { Button }
