import Dice from "./Dice"
import ItemBox from "./ItemBox"
import PokemonBall from "./PokemonBall"
import MinecraftChest from "./MinecraftChest"
import Shuriken from "./Shuriken"
import Rupee from "./Rupee"

export const model: readonly React.ReactNode[] = [
	<Dice />,
	<ItemBox />,
	<PokemonBall />,
	<MinecraftChest />,
	<Shuriken />,
	<Rupee />,
]

export const numberOfModel = model.length
