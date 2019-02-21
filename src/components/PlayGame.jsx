import React from 'react'

function PlayGame() {
  return (
    <div>
      <style jsx>{`
      .selectedPokemon{
        border: 2px solid black;
        height: 500px;
        width: 500px;
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
          <h1>Name:</h1>
          <div className="selectedPokemon">
          </div>
        </div>
        <div className='stats'>
          <h2>Level</h2>
          <h2>Level</h2>
          <h2>Level</h2>
          <h2>Level</h2>
        </div>
      </div>
    </div>  
  )
}

export default PlayGame