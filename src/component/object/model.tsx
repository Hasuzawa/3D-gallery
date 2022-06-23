import Dice from "./Dice"
import ItemBox from "./ItemBox"
import PokemonBall from "./PokemonBall"
import MinecraftChest from "./MinecraftChest"
import Shuriken from "./Shuriken"

export const model: readonly React.ReactNode[] = [
	<Dice />,
	<ItemBox />,
	<PokemonBall />,
	<MinecraftChest />,
	<Shuriken />,
]

export const numberOfModel = model.length
