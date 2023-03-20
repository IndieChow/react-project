import React from 'react'
import Pokemon from './Pokemon'
import { v4 as uuidv4 } from 'uuid'

// CUSTOM COMPONENT ('1a' - 2)
export default function Team({ pokemon }) {
  return (
    pokemon.map(pokemon => 
      <Pokemon 
        id={pokemon.id}
        name={pokemon.name}
        key={uuidv4()}
        image={pokemon.image}
        ability={pokemon.ability}
        base_hp={pokemon.base_hp}
        base_attack={pokemon.base_attack}
        base_defense={pokemon.base_defense}
      />
    )
  )
}
