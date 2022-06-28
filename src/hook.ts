import { useState } from "react"
import { rotate } from "./util"

export const useRotateIndex = (init: number, min: number, max: number) => {
	const [index, setIndex] = useState<number>(init)

	const changeIndex = (n: number, min: number, max: number) =>
		setIndex(rotate(n, min, max))
	const changeIndexHOF = (n: number) => () => changeIndex(index + n, min, max)

	const increaseIndex = changeIndexHOF(1)
	const decreaseIndex = changeIndexHOF(-1)
	return {
		index,
		increaseIndex,
		decreaseIndex,
		changeIndex,
	}
}
