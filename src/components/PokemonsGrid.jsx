import { PokemonCard } from "./PokemonCard"

export function PokemonsGrid({pokemons}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {
      pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
    }
    </div>
  )
}