import React from 'react'
import { TETROMINOS } from '../tetrominos'


const Cell = ({type}) => {
  return (
    <div className='cell' style={{backgroundColor: TETROMINOS[type].color}}>
      
    </div>
  )
}

export default Cell