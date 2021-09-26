import React, {useEffect, useState} from 'react';
import clas from './pokemons.module.css'
import {useDispatch, useSelector} from "react-redux";
import {downloadPokemons} from "../redux/pokemonReducer";
import Pokemon from "./pokemon/pokemon";
import InformTable from "./informTable/informTable";

const Pokemons = () => {
    let dispatch = useDispatch()
    let [pokemonNumbers, setPokemonNumbers] = useState(12)
    let [numberPokemon, setNumberPokemon] = useState(0)

    const pokemons = useSelector(state => state.pokemonPage.pokemons)

    useEffect(() => {
        dispatch(downloadPokemons(pokemonNumbers))
    }, [dispatch, pokemonNumbers])


    let pokemon = pokemons[numberPokemon]
    const loadMoreHandler = () => {
        setPokemonNumbers(pokemonNumbers + 6)
    }
    return (
        <div  className={clas.pokemons}>
            <header className={clas.header}><h1>Pokedex</h1></header>
            <main>
                <aside className={`${clas.leftAsite} ${clas.aside}`}>
                    {pokemons.map((pokemon, index) => (
                            <Pokemon key={pokemon.name}index={index} setNumberPokemon={setNumberPokemon} pokemon={pokemon}/>
                        )
                    )}
                    <button className={clas.loadMore} onClick={loadMoreHandler}>
                        Load More
                    </button>
                </aside>
                <aside className={`${clas.rightSide} ${clas.aside}`}>
                    {pokemon && <InformTable key={pokemon.name} pokemon={pokemon}/>}
                </aside>
            </main>
        </div>
    );
};

export default Pokemons;
