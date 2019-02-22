import React from 'react'
import Button from './Button'

function Header(props) {
  return (
    <div>
      <Button battle={props.battle} pokemon={props.pokemon} />
    </div>
  )
}

export default Header