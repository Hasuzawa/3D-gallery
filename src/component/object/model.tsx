import Dice from "./Dice"

type ModelObject = React.ReactElement

export const model: readonly ModelObject[] = [<Dice />, <Dice />, <Dice />]

export const numberOfModel = model.length
