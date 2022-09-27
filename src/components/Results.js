import React from 'react'
import ResultPiece from './ResultPiece'
import {StartButton} from './StartButton'

const Results = ({startGame, score, level, rows}) => {
  return (
    <aside className='results'>
      <ResultPiece name='Score' text={score}/>
      <ResultPiece name='Level' text={level}/>
      <ResultPiece name='Rows' text={rows}/>
      <StartButton startGame={startGame}/>
    </aside>
  )
}

export default Results