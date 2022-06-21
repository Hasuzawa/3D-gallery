import Dice from "./Dice"
import ItemBox from "./ItemBox"
import PokemonBall from "./PokemonBall"

export const model: readonly React.ReactNode[] = [
	<Dice />,
	<ItemBox />,
	<PokemonBall />,
]

export const numberOfModel = model.length
