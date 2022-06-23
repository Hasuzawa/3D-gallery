import styled from "styled-components"
import { IStyled } from "../../type"

interface LinkProps extends IStyled {}

const RawLink = (props: LinkProps) => {
	return (
		<a
			href="https://github.com/Hasuzawa/3D-gallery"
			className={props.className}
			target="_blank"
			rel="noopener noreferrer"
		>
			Presented by Hasuzawa
		</a>
	)
}

const Link = styled(RawLink)`
	font-size: 20px;
	color: #ffffff;
`

export default Link
