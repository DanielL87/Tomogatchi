import React from 'react'

function Button(props) {
  return (
    <div>
      <button onClick={props.battle}>Battle</button>
      <hr/>
    </div>
  )
}

export default Button