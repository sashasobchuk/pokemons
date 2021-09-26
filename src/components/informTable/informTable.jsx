import React from 'react';
import clas from "./informTable.module.css";

const InformTable = ({pokemon}) => {
    return (
            <div className={clas.pokemon}>
                <div className={clas.imgContainer}>
                    <svg height="100%" width="100%">
                        <line className={clas.line} x1="0" y1="0" x2="100%" y2="100%" />
                        <line className={clas.line}  x1="0" y1="100%" x2="100%" y2="0" />
                    </svg>
                </div>
                    <h3 className={clas.tittle}>
                        {pokemon.name}
                    </h3>
                    <div className={clas.tableContainer}>
                        {pokemon.stats !==undefined  &&
                            <div className={clas.stat}>
                                <div><div>type</div><div>{pokemon.types[0].type.name}</div></div>
                                {pokemon.stats.map(stat => (
                                    <div key={ stat.stat.name}>
                                        <div>
                                            {stat.stat.name}
                                        </div>
                                        <div>
                                            {stat.base_stat}
                                        </div>
                                    </div>
                                ))}
                                <div><div>weight</div><div>{pokemon.weight}</div></div>
                            </div>
                        }
                    </div>
            </div>
    );
};

export default InformTable;
