import React from 'react'
import StartGame from './StartGame.jsx'
import PlayGame from './PlayGame.jsx'
import pikachu from '../assets/images/pikachu.gif';
import bulb from '../assets/images/bulbasaur.gif';
import char from '../assets/images/charmander.gif';
import squirt from '../assets/images/squirtle.gif';
import { Switch, Route, Router } from 'react-router-dom';
import PropTypes from 'prop-types'


class Pokemon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chosenPokemon:{},
            pokemonList: [
                {
                    name: '',
                    image: pikachu,
                    species: 'Pikachu',
                    type: 'Electric',
                    description: 'When several of these Pokémon gather, their electricity could build and cause lightning storms.',
                    key: 0,
                    selected: false
                },

                {
                    name: '',
                    image: char,
                    species: 'Charmander',
                    type: 'Fire',
                    description: 'A flame burns on the tip of its tail from birth. It is said that a Charmander dies if its flame ever goes out.',
                    key: 1,
                    selected: false
                },

                {
                    name: '',
                    image: squirt,
                    species: 'Squirtle',
                    type: 'Water',
                    description: 'After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.',
                    key: 2,
                    selected: false
                },
                {
                    name: '',
                    image: bulb,
                    species: 'Bulbasaur',
                    type: 'Grass/Poison',
                    description: 'Solar Beam, Bulbasaurs strongest attack. Light is collected and formed into a powerful beam with intensive force.',
                    key: 3,
                    selected: false
                },

            ],

        }, 

        this.handleSelectPokemon = this.handleSelectPokemon.bind(this)
    }

    handleSelectPokemon (id) {
        var selectedPokemon = Object.assign({}, this.state.pokemonList[id])
        this.setState({
            chosenPokemon: selectedPokemon
        })
        
    }

    render() {

  
        return (
            <div>
                <Switch >
                    <Route exact path='/' render={() => (<StartGame pokemon={this.state.pokemonList} onSelectPokemon={this.handleSelectPokemon} />)}
                    />
                    <Route exact path='/playGame' render={() => (<PlayGame pokemon={this.state.pokemonList} />)}
                    />
                </Switch>
            </div>
        )
    }
}

export default Pokemon