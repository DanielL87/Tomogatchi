import React from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom';
import Pokemon from './Pokemon'

var GifPlayer = require('react-gif-player');

class StartGame extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show1: true,
      show2: false,
      show3: false,
      show4: false,
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className='startGame'>
        <style jsx>{`
        .startGame {
          text-align: center;
        }

        .pokemon{
          border: 2px solid black;
          border-radius: 50%;
          height: 220px;
          width: 220px;
          background-image: linear-gradient(red, white);
          padding-right: 5px;
        }

        .pokemon:hover {
          border: 3px solid yellow;
        }
        .pick{
         display: grid;
         grid-Template-Columns: 3fr 3fr 3fr 3fr;
        }

        .species {
          font-weight: bold;
        }

        .pokemon ul {
          list-style: none;
        }

        #name {
          margin-top: 15%;
        }

        .description {
          display: none;
        }

        .pokemon:hover > .description {
          display: initial;
        }

      `}</style>
        <h1>Choose a Starter!</h1>
        <div className="pick">
          <div className="pokemon">
            <GifPlayer autoplay='true' gif={this.props.pokemon[0].image} width='200' />
            <br />
            <ul className='description'>
              <li className='species'>Species: {this.props.pokemon[0].species}</li>

              <li>Type: {this.props.pokemon[0].type}</li>
              <li>Description: {this.props.pokemon[0].description}</li>
            </ul>
          </div>
          <div className="pokemon">
            <GifPlayer autoplay='true' gif={this.props.pokemon[1].image} width='200' />
            <br />
            <ul className='description'>
              <li className='species'>Species: {this.props.pokemon[1].species}</li>

              <li>Type: {this.props.pokemon[1].type}</li>
              <li>Description: {this.props.pokemon[1].description}</li>
            </ul>
          </div>
          <div className="pokemon">
            <GifPlayer autoplay='true' gif={this.props.pokemon[2].image} width='200' />
            <br />
            <ul className='description'>
              <li className='species'>Species: {this.props.pokemon[2].species}</li>

              <li>Type: {this.props.pokemon[2].type}</li>
              <li>Description: {this.props.pokemon[2].description}</li>
            </ul>
          </div>
          <div className="pokemon">
            <GifPlayer autoplay='true' gif={this.props.pokemon[3].image} width='200' />
            <br />
            <ul className='description'>
              <li className='species'>Species: {this.props.pokemon[3].species}</li>

              <li>Type: {this.props.pokemon[3].type}</li>
              <li>Description: {this.props.pokemon[3].description}</li>
            </ul>
          </div>
        </div>
        <br />
        <form id='name'>
          <input type="text" placeholder="Choose Pokemon's Name" />
          <Link to='/playgame'><button type="">Start Game</button></Link>
        </form>
      </div>

    )
  }
}
export default StartGame