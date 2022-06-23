import styled from "styled-components"
import { IStyled } from "../../type"

interface TipProps extends IStyled {}

const RawTip = (props: TipProps) => {
	return <span className={props.className}>toggle the HUD with [P]</span>
}

const Tip = styled(RawTip)`
	font-size: 12px;
	color: #999999;
	user-select: none;
`

export default Tip
