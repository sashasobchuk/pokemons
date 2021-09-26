
export const DOWNLOAD_POKEMONS = 'DOWNLOAD_POKEMONS'
export const SET_STORE_POKEMONS = 'SET_STORE_POKEMONS'
export const SET_OTHER_DATA = 'SET_OTHER_DATA'

export const DOWNLOAD_POKEMON = 'DOWNLOAD_POKEMON'
export const SET_STORE_POKEMON = 'SET_STORE_POKEMON'


let initState = {
    count: 12,
    next: '"https://pokeapi.co/api/v2/pokemon/?offset=12&limit=12',
    previous: null,
    pokemons: [
        {
            name: 'baltazar',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',

            stats: [
                {
                    base_stat: 60,
                    effort: 0,
                    stat: {
                        name: "hp",
                        url: "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    base_stat: 62,
                    effort: 0,
                    stat: {
                        name: "attack",
                        url: "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    base_stat: 63,
                    effort: 0,
                    stat: {
                        name: "defense",
                        url: "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    base_stat: 80,
                    effort: 1,
                    stat: {
                        name: "special-attack",
                        url: "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    base_stat: 80,
                    effort: 1,
                    stat: {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    base_stat: 60,
                    effort: 0,
                    stat: {
                        name: "speed",
                        url: "https://pokeapi.co/api/v2/stat/6/"
                    }
                }
            ],
            types: [
                {
                    slot: 1,
                    type: {
                        name: "grass",
                        url: "https://pokeapi.co/api/v2/type/12/"
                    }
                },
                {
                    slot: 2,
                    type: {
                        name: "poison",
                        url: "https://pokeapi.co/api/v2/type/4/"
                    }
                }
            ],

        },
    ]
}
const pokemonReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_STORE_POKEMONS:
            return {...state, pokemons: action.pokemons}
        case SET_OTHER_DATA:
            return {...state, count: action.payload.count, next: action.payload.next, previous: action.payload.count}
        case SET_STORE_POKEMON:
            return {
                ...state,
                pokemons: [...state.pokemons.map((pokemon) => {
                    return (
                        pokemon.name !== action.payload.name
                            ? pokemon
                            : {
                                ...pokemon,
                                types: action.payload.types,
                                stats: action.payload.stats,
                                weight: action.payload.weight
                            }
                    )

                })],
            }
        default :
            return state

    }
}


export const downloadPokemons = (limit) => ({type: DOWNLOAD_POKEMONS, limit})
export const setStorePokemons = (pokemons) => ({type: SET_STORE_POKEMONS, pokemons})
export const setStoreOtherData = (payload) => ({type: SET_OTHER_DATA, payload})

export const downloadPokemon = (url) => ({type: DOWNLOAD_POKEMON, url})
export const setStoragePokemon = (payload) => ({type: SET_STORE_POKEMON, payload})

export default pokemonReducer




