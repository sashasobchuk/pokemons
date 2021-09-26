import React from 'react';
import clas from './pokemon.module.css'

const Pokemon = ({pokemon, setNumberPokemon,index}) => {
    const checkCollor = (type) => {
        switch (type) {
            case 'grass':
                return '#4aff29'
            case 'poison':
                return '#ca5cff'
            case 'fire':
                return '#ff211c'
            case 'electric':
                return '#ffac27'
            case 'water':
                return '#858fff'
            case 'flying':
                return '#f1e1d6'
            case 'ground':
                return '#522d16'
             case 'rock':
                return '#36261c'
             case 'psychic':
                return '#8bffb0'
            case 'steel':
                return '#17f5ff'
            case 'ice':
                return '#a4e7ff'
            case 'bug':
                return '#61ffd4'
            default :
                return 'white'

        }
    }
    let changePokemonHandler =()=>{
        setNumberPokemon(index)
    }
    // debugger
    return (
        <div  className={clas.pokemon} onClick={() => {changePokemonHandler()}}>
            <div className={clas.imgContainer}>
                <svg height="100%" width="100%">
                    <line className={clas.line} x1="0" y1="0" x2="100%" y2="100%"/>
                    <line className={clas.line} x1="0" y1="100%" x2="100%" y2="0"/>
                </svg>
            </div>
            <div className={clas.boottomSide}>
                <h3 className={clas.tittle}>
                    {pokemon.name}
                </h3>
                <div className={clas.typeContainer}>
                    {pokemon.types &&
                    pokemon.types.map((type,index) => (
                        <div key={type.name || index} style={{backgroundColor: checkCollor(type.type.name)}} className={clas.type}>
                            {type.type.name}
                        </div>))}
                </div>


            </div>

        </div>
    );
};

export default Pokemon;
