import React from 'react'
import StartGame from './StartGame.jsx'
import PlayGame from './PlayGame.jsx'
import pikachu from '../assets/images/pikachu.gif';
import bulb from '../assets/images/bulbasaur.gif';
import char from '../assets/images/charmander.gif';
import squirt from '../assets/images/squirtle.gif';
import { Switch, Route, Router } from 'react-router-dom';

class Pokemon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          selectedPokemon:'',  
          pokemonList: [
            {
                name:'',
                image: pikachu,   
                species: 'Pikachu',
                type: 'Electric',
                description:'When several of these Pokémon gather, their electricity could build and cause lightning storms.',
                key: 1
            },

            {
                name:'',    
                image: char,  
                species: 'Charmander',
                type: 'Fire',
                description:'A flame burns on the tip of its tail from birth. It is said that a Charmander dies if its flame ever goes out.',
                key: 2
            },

            {
                name:'',  
                image: squirt, 
                species: 'Squirtle',
                type: 'Water',
                description:'After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.',
                key: 3
            },
            {
                name:'',    
                species: 'Bulbasaur',
                image: bulb, 
                type: 'Grass/Poison',
                description:'Solar Beam, Bulbasaurs strongest attack. Light is collected and formed into a powerful beam with intensive force.',
                key: 4
            },

          ]

        }
    }    
render() {
    return (
    <div>
        <Switch >
            <Route exact path='/' component={StartGame} render={(props) =>< Array {...props} pokemon={this.state.pokemonList} />} 
            />
            <Route path='/playGame' component={PlayGame} render={(props) =>(< Array {...props} pokemon={this.state.pokemonList} />)} 
            />
        </Switch>
    </div>
    )
  }
}

export default Pokemon