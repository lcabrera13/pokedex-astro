import {pokemons as allPokemons} from "@/lib/data"

const PAGE_SIZE = 12
const HEIGHTS = {
  'S': {min: 0, max: 400 },
  'M': {min: 400, max: 800 },
  'L': {min: 800, max: 1200 },
}
const WEIGHTS = {
  'L': {min: 0, max: 400 },
  'M': {min: 400, max: 800 },
  'H': {min: 800, max: 1200 },
}

export async function GET({request}) {
  const {url} = request
  const urlObject = new URL(url)
  const page = urlObject.searchParams.get('page')
  const sort = urlObject.searchParams.get('sort')
  const search = urlObject.searchParams.get('search')
  const types = urlObject.searchParams.get('types')?.split(',') ?? []
  const height = urlObject.searchParams.get('height')
  const weight = urlObject.searchParams.get('weight')

  switch(sort) {
    case '1': allPokemons.sort((a, b) => a.id - b.id); break;
    case '2': allPokemons.sort((a, b) => b.id - a.id); break;
    case '3': allPokemons.sort((a, b) => a.name.localeCompare(b.name)); break;
    case '4': allPokemons.sort((a, b) => b.name.localeCompare(a.name)); break;
    default: allPokemons.sort((a, b) => a.id - b.id); break;
  }
  
  const startIndex = page * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const filteredPokemons = allPokemons.filter(pokemon => {
    let matchesSearch = !search || pokemon.name.includes(search);
    let matchesTypes = types.length === 0 || types.every(type => pokemon.types.includes(type));
    let matchesHeight = !height || (pokemon.height >= HEIGHTS[height].min && pokemon.height < HEIGHTS[height].max);
    let matchesWeight = !weight || (pokemon.weight >= WEIGHTS[weight].min && pokemon.weight < WEIGHTS[weight].max);
    return matchesSearch && matchesTypes && matchesHeight && matchesWeight;
  })

  // let filteredPokemons = allPokemons
  // if(search) {
  //   filteredPokemons = filteredPokemons.filter(pokemon => pokemon.name.includes(search))
  // }
  // if(types.length > 0) {
  //   filteredPokemons = filteredPokemons.filter(pokemon => types.every(type => pokemon.types.includes(type)))
  // }
  // if(height) {
  //   const {min, max} = HEIGHTS[height]
  //   filteredPokemons = filteredPokemons.filter(pokemon => min <= pokemon.height && pokemon.height < max)
  // }
  // if(weight) {
  //   const {min, max} = WEIGHTS[weight]
  //   filteredPokemons = filteredPokemons.filter(pokemon => min <= pokemon.weight && pokemon.weight < max)
  // }

  const paginatedPokemons = filteredPokemons.slice(startIndex, endIndex)

  return new Response(JSON.stringify(paginatedPokemons), {
    headers: { "content-type": "application/json" }
  })
}