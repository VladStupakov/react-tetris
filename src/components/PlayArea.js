import React from 'react'
import Cell from './Cell'

const PlayArea = ({area}) => {

  return (
    <section>
      {
        area.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))
      }
    </section>
  )
}

export default PlayArea