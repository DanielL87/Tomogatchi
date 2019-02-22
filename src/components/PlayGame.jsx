import React from 'react'
import PropTypes from 'prop-types'

var GifPlayer = require('react-gif-player');
function PlayGame(props) {

  return (
    <div>
      <style jsx>{`
      .selectedPokemon{
        border: 2px solid black;
        height: 500px;
        width: 500px;
        background-image: linear-gradient(skyblue 40%, darkgreen 50%);
      }
      .hud{
        display: grid;
        grid-Template-Columns: 6fr  6fr;
      }

      .stats{
        margin-top: 25%;
      }
      
      `}</style>
      <div className='hud'>
        <div>
          <h1>Name:{props.pokemon.name}</h1>
          <div className="selectedPokemon">
          <GifPlayer autoplay='true' gif={props.pokemon.image} width='450' />
          </div>
          <h2>Species: {props.pokemon.species}</h2>
        </div>
        <div className='stats'>
          <h2>Level: {props.pokemon.level}</h2>
          <h2>Health: {props.pokemon.health} / {props.pokemon.maxHealth} HP</h2>
          <h2>XP: {props.pokemon.experience} / {props.pokemon.maxExperience} Points to Next Level</h2>
        </div>
      </div>
    </div>  
  )
}

export default PlayGame