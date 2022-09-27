import React from 'react'

export const StartButton = ({startGame}) => {
  return (
    <button className='result-piece start-button' onClick={() => startGame()}>
      StartButton
    </button>
  )
}
