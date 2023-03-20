import React from 'react'
import './Styles.css'

// CUSTOM COMPONENT ('1a' - 1)
// COMPONENT WITH PROPS ('1c')
export default function Pokemon(props) {
  return (
    <div className="container">
      <div className="pokemon-card"> 
        <div>
          #0{props.id}
        </div>
        <img className="img" src={props.image} alt={props.name} /> {/* LOAD IMAGES OF EACH POKEMON ('1g') */}
        <div>
          <h3>{props.name.toUpperCase()}</h3>
          <div> 
            <ul> 
              <li> Ability: {props.ability} </li>
              <li> Base HP: {props.base_hp} </li>
              <li> Attack HP: {props.base_attack}  </li>
              <li> Defense HP: {props.base_defense} </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
