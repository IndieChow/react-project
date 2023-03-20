import React, { useState, useRef } from 'react';
import Team from './Components/Team';
import './Components/Styles.css'

function App() {
  const [pokemon, setTeam] = useState([]) // COMPONENT WITH STATE ('1b')
  const pokemonNameRef = useRef()
  
  // CALLBACK FUNCTION ('2a')
  function getPokeData(promise) {
    promise  // UTILIZE PROMISES ('2a')
      .then( (resp) => {return resp.json()})
      .then( (resp) => {  // ARROW FUNCTION ('2c' - 1)
        const apiData = resp
        const name = apiData.name
        const image = apiData.sprites.other["official-artwork"].front_default
        const ability = apiData.abilities[0].ability.name
        const base_hp = apiData.stats[0].base_stat
        const base_attack = apiData.stats[1].base_stat
        const base_defense = apiData.stats[2].base_stat
        
        setTeam( (prevPokemon) => { // ARROW FUNCTION ('2c' - 2)
            return [...prevPokemon, {id: apiData.id, name: name, image: image, ability: ability, base_hp: base_hp, base_attack: base_attack, base_defense: base_defense}]
        })
      })
      .catch((error) => {  // ARROW FUNCTION ('2c' - 3)
        console.log("USER ERROR:" + error)
        alert("ERROR: Check Spelling")
      })    
  }

  function handleAddPokemon(myCallback) {
    if(pokemonNameRef.current.value === ''){
      alert("ERROR: No Input Provided")
      return
    } 
    if(pokemon.length === 6) {
      alert("ERROR: No Space On Deck")
      return
    }
    const promise = fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNameRef.current.value.toLowerCase()) // API CALL ('1d')
    myCallback(promise);
    
    pokemonNameRef.current.value = null
  }
  function refreshPage(){
    window.location.reload();
  } 
  return (
  <>
    <div> 
      <title>REACT PROJECT</title>
      <h1 className="header"> <strong>POKEMON TEAM BUILDER</strong></h1>
      <div>
        <p className="text-container"> <strong>Lets Build Our First Pokemon Deck! Choose Any Pokemon of Your Desire but Choose Wisely As You Only Get 6 Picks. </strong></p>
        <div>
          <input ref={pokemonNameRef} className="search" placeholder="Search" type="text"/> 
          <button className="btn" onClick={() => handleAddPokemon(getPokeData)}> <strong>Add Pokemon</strong></button>  {/* USER INTERACTIVE BUTTON ('1f') - 1*/}
          <button className="btn" onClick={refreshPage}><strong>Reset</strong></button>                                 {/* USER INTERACTIVE BUTTON ('1f') - 2*/}
        </div>
        
      </div>  
      <div className="grid-box"> 
        <Team pokemon={pokemon} />
      </div>
    </div>
  </>
  );
}
export default App;
