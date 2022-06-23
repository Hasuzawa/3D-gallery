import styled from "styled-components"
import { IStyled } from "../../type"

interface LinkProps extends IStyled {}

const RawLink = (props: LinkProps) => {
	return (
		<a
			href=""
			className={props.className}
			target="_blank"
			rel="noopener noreferrer"
		>
			Hasuzawa@GitHub
		</a>
	)
}

const Link = styled(RawLink)`
	font-size: 20px;
	color: #ffffff;
`

export default Link
