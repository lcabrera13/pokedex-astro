import {pokemons as allPokemons} from "@/lib/data"

export async function GET({request}) {
  const {url} = request
  const urlObject = new URL(url)
  const name = urlObject.searchParams.get('name')
  
  const pokemon = allPokemons.find(p => p.name === name)

  if (!pokemon) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    })
  }

  const prevPokemon = allPokemons.find(p => p.id === pokemon.id - 1)
  const nextPokemon = allPokemons.find(p => p.id === pokemon.id + 1)

  return new Response(JSON.stringify({prevPokemon, pokemon, nextPokemon}), {
    status: 200,
    headers: { "content-type": "application/json" }
  })
}