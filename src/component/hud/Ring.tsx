import styled from "styled-components"
import { IStyled } from "../../type"
import { motion } from "framer-motion"

interface RingProps extends IStyled {}

const RawRing = (props: RingProps) => {
	const { className } = props
	return <motion.span layoutId="ring" className={className}></motion.span>
}

const Ring = styled(RawRing)`
	position: absolute;
	inset: -10px;
	border: 2px solid #ffffff;
	border-radius: 50%;
`

export { Ring }
