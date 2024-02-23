import { useEffect, useReducer, useState } from "react"
import { Loading } from "./Loading"
import { PokemonsGrid } from "./PokemonsGrid"
import {CheckCircle } from "./Icons"

const HEIGHTS = [
  {id: 1, name: 'small', abbreviation: 'S'}, 
  {id: 2, name: 'medium', abbreviation: 'M'}, 
  {id: 3, name: 'large', abbreviation: 'L'}
]
const WEIGHTS = [
  {id: 1, name: 'light', abbreviation: 'L'}, 
  {id: 2, name: 'medium', abbreviation: 'M'}, 
  {id: 3, name: 'heavy', abbreviation: 'H'}
]

const TYPES = ["bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"]

export function SearchForm({defaultValues, handleSearchForm}) {
  const [filter, setFilter] = useState(defaultValues.filter)
  const [debouncedFilter, setDebouncedFilter] = useState(defaultValues.filter)
  const [sort, setSort] = useState(defaultValues.sort)

  useEffect(() => {
    handleSearchForm({newSort: sort, newFilter: debouncedFilter})
  }, [sort, debouncedFilter])

  useEffect(() => {
    const delayTimeoutId = setTimeout(() => {
      setDebouncedFilter(filter)
    }, 500)

    return () => clearTimeout(delayTimeoutId)
  }, [filter, 500])

  return (
    <div className="bg-white max-w-4xl w-full flex flex-col gap-4 px-4 pt-10 pb-4">
      <div className="flex flex-col sm:flex-row gap-2 justify-between">
        <div className="group relative w-full sm:w-96">
          <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-slate-900" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
          </svg>
          <input value={filter} onChange={(event) => setFilter(event.target.value)} type="text" className="appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 pr-3 ring-1 ring-slate-200" aria-label="Filter pokemons" placeholder="Filter pokemons..." />
        </div>
        <div className="group relative w-full sm:w-96 inline-flex">
          <label className="w-1/4 self-center text-zinc-400 font-semibold">Sort by</label>
          <select onChange={(event) => setSort(event.target.value)} value={sort} className="appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-3 pr-10 ring-1 ring-slate-200 w-3/4">
            <option value="1">Lower number</option>
            <option value="2">Upper number</option>
            <option value="3">A-Z</option>
            <option value="4">Z-A</option>
          </select>
          <svg width="20" height="20" fill="none" className="absolute right-1 top-1/2 -mt-1 text-slate-400 pointer-events-none group-focus-within:text-slate-900" aria-hidden="true">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export function AdvancedSearchForm({handleAdvancedSearchForm}) {
  const [isActive, setIsActive] = useState(false)
  const [types, setTypes] = useState([])
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)

  const handleType = (typeSelected) => {
    if(types.some(type => type === typeSelected)) {
      setTypes(types.filter(type => type !== typeSelected))
    } else {
      setTypes([...types, typeSelected])
    }
  }

  const handleRestore = () => {
    setTypes([])
    setHeight(null)
    setWeight(null)
  }

  const handleSearch = () => {
    handleAdvancedSearchForm({newTypes: types, newHeight: height, newWeight: weight})
  }

  return (
    <div className="bg-zinc-600 w-full">
      <div className="max-w-4xl m-auto min-h-10 text-center relative z-10">
        {
          isActive && (
            <div className="flex flex-col md:flex-row gap-4 px-4 pt-4 pb-8">
              <div className="md:basis-2/3">
                <h3 className="text-slate-300 text-left font-semibold pb-2">Type</h3>
                <ul className="flex flex-wrap gap-y-1 [&>*:nth-child(even)]:justify-end md:[&>*:nth-child(even)]:justify-start">
                  {
                    TYPES.map(typeDefault => {
                      const isSelected = types.some(type => type === typeDefault)

                      let className = 'block border-slate-400 border-2 capitalize px-2 py-0.5 relative rounded w-[98%] sm:w-10/12 md:w-4/5'
                      if(isSelected) {
                        className += ` bg-${typeDefault}`
                      } else {
                        className += ` bg-${typeDefault}/40 hover:bg-${typeDefault}`
                      }

                      return (
                        <li key={typeDefault} className="basis-1/2 flex text-sm">
                          <button onClick={() => handleType(typeDefault)} className={className}>
                            <span>{typeDefault}</span>
                            {
                              isSelected && <CheckCircle className={"absolute h-4 top-1 right-1 w-4"} />
                            }
                          </button>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className="md:basis-1/3 flex flex-col gap-2">
                <h3 className="text-slate-300 text-left font-semibold">Height</h3>
                <div className="flex flex-row gap-2">
                  {
                    HEIGHTS.map(heightDefault => {
                      const className = height === heightDefault.abbreviation ? 'basis-1/3 capitalize bg-orange-500 h-20 rounded-lg p-4 text-white' : 'basis-1/3 capitalize bg-slate-300 hover:bg-slate-300/90 h-20 rounded-lg p-4'
                      return (<button key={heightDefault.id} onClick={() => setHeight(heightDefault.abbreviation)} className={className}>{heightDefault.name}</button>)
                    })
                  }
                </div>
                <h3 className="text-slate-300 text-left font-semibold">Weight</h3>
                <div className="flex flex-row gap-2">
                  {
                    WEIGHTS.map(weightDefault => {
                      const className = weight === weightDefault.abbreviation ? 'basis-1/3 capitalize bg-orange-500 h-20 rounded-lg p-4 text-white' : 'basis-1/3 capitalize bg-slate-300 hover:bg-slate-300/90 h-20 rounded-lg p-4'
                      return (<button key={weightDefault.id} onClick={() => setWeight(weightDefault.abbreviation)} className={className}>{weightDefault.name}</button>)
                    })
                  }
                </div>
                <div className="flex flex-row justify-between mt-auto">
                  <button onClick={() => handleRestore()} className="bg-gray-400 hover:bg-gray-500 font-semibold text-white px-8 py-2 rounded-md">Restore</button>
                  <button onClick={() => handleSearch()} className="bg-orange-500 hover:bg-orange-600 font-semibold text-white px-8 py-2 rounded-md">Search</button>
                </div>
              </div>
            </div>
          )
        }
        <button onClick={() => setIsActive(prev => !prev)} className="absolute bg-zinc-600 -bottom-5 px-3 md:px-20 py-3 text-white transform -translate-x-1/2 translate-y-0 w-4/5 md:w-auto [clip-path:polygon(10%_0,90%_0,100%_50%,90%_100%,10%_100%,0%_50%)]">Show advanced search</button>
      </div>
    </div>
  )
}

const initialState = {
  isLoading: true,
  pokemons: [],
  page: 0,
  sort: 1,
  filter: '',
  types: [],
  height: null,
  weight: null
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, ...action.payload }
    case 'INCREMENT_PAGE':
      return { ...state, page: state.page + 1 }
    default:
      return state;
  }
}

export function PokemonsContainer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const { page, sort, filter, types, height, weight } = state

    let url = `/api/get-pokemons.json?page=${page}&sort=${sort}`
    if(filter) url += `&search=${filter}`
    if(types.length > 0) url += `&types=${types}`
    if(height) url += `&height=${height}`
    if(weight) url += `&weight=${weight}`

    fetchPokemons(url, page === 0)
  }, [state.page, state.sort, state.filter, state.types, state.height, state.weight])

  const fetchPokemons = (url, reset = true) => {
    dispatch({ type: 'SET_DATA', payload: { isLoading: true } })
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SET_DATA', payload: { pokemons: reset ? data : [...state.pokemons, ...data], isLoading: false } })
      })
  }

  const handleClick = () => {
    dispatch({ type: 'INCREMENT_PAGE' })
  }

  const handleSearchForm = ({newSort, newFilter}) => {
    dispatch({ type: 'SET_DATA', payload: { page: 0, sort: newSort, filter: newFilter } })
  }

  const handleAdvancedSearchForm = ({newTypes, newHeight, newWeight}) => {
    dispatch({ type: 'SET_DATA', payload: { page: 0, types: newTypes, height: newHeight, weight: newWeight } })
  }

  return (
    <>
      <AdvancedSearchForm handleAdvancedSearchForm={handleAdvancedSearchForm} />
      <SearchForm defaultValues={{sort: state.sort, filter: state.filter}} handleSearchForm={handleSearchForm} />
      <div className="bg-white max-w-4xl w-full flex flex-col gap-4 p-4">
        {(!state.isLoading && state.pokemons.length === 0 && state.page === 0) && (
          <div className="border-2 border-red-500 font-semibold py-5 text-center text-red-500 rounded-md">
            <p>No Pokemon matches your search</p>
          </div>
        )}
        {state.pokemons.length > 0 && <PokemonsGrid pokemons={state.pokemons} />}
        {!state.isLoading && state.pokemons.length > 0 && (
          <div className="flex justify-center">
            <button onClick={handleClick} className="bg-sky-600 rounded text-white px-6 py-2">Load more</button>
          </div>
        )}
        {state.isLoading && <Loading />}
      </div>
    </>
  )
}