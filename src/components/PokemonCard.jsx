export function PokemonCard({pokemon}) {
  return (
    <a href={`/${pokemon.name}`} className="hover:animate-pulsing">
      <article className="flex flex-col">
        <picture className="bg-gray-100 rounded-md" transition:name="media-player">
          <img className="drop-shadow-[2px_4px_6px_black]" src={pokemon.image} alt={pokemon.name} />
        </picture>
        <div className="flex flex-col gap-2 px-4 py-2">
          <p className="text-gray-400 text-sm font-semibold">N.º {pokemon.id.toString().padStart(4, "0")}</p>
          <h4 className="text-black text-xl font-bold capitalize">{pokemon.name}</h4>
          <div className="flex flex-row gap-2">
            {
              pokemon.types.map(type => <span key={type} className={`bg-${type} px-2 py-0.5 rounded text-xs capitalize`}>{type}</span>)
            }
          </div>
        </div>
      </article>
    </a>
  )
}