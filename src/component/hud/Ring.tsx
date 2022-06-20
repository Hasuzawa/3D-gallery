import styled from "styled-components"
import { IStyled } from "../../type"

interface RingProps extends IStyled {}

const RawRing = (props: RingProps) => {
	const { className } = props
	return <span className={className}></span>
}

const Ring = styled(RawRing)`
	position: absolute;
	inset: -10px;
	border: 2px solid #ffffff;
	border-radius: 50%;
`

export { Ring }
