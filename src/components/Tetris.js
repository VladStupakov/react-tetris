import React from 'react'
import PlayArea from './PlayArea'
import Results from './Results'
import { StartButton } from './StartButton'
import { createPlayArea } from '../helpers/playAreaGenerator'


const Tetris = () => {
  return (
    <div className='tetris'>
      <PlayArea area={createPlayArea()} />
      <Results />
      <StartButton />
    </div>
  )
}

export default Tetris