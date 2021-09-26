import {all} from 'redux-saga/effects'
import {watchDownloadPokemon, watchDownloadPokemons} from "./pokemonSaga";

export function* allWatchers() {
    yield all([
        watchDownloadPokemons(),
        watchDownloadPokemon()

        ]

    )
}








