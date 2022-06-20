import styled from "styled-components"
import { IStyled, Url } from "../../type"

interface CreditProps extends IStyled {
	text: string
	url: Url
}

const RawCredit = (props: CreditProps) => {
	const { text, url, className } = props
	return (
		<a href={url} className={className}>
			{text}
		</a>
	)
}

const Credit = styled(RawCredit)`
	position: absolute;
	bottom: 2%;
	left: 50%;
	transform: translateX(-50%);
	color: #666666;
	font-size: 1em;
	font-family: sans-serif;
`

export { Credit }
