import React from 'react'
import Cell from './Cell'

const PlayArea = ({ area }) => {

  const rows = `repeat(${area.length}, 1fr)`
  const columns = `repeat(${area[0].length}, 1fr)`

  return (
    <section
      className='play-area'
      style={{
        gridTemplateRows: rows,
        gridTemplateColumns: columns
        }}>
      {
        area.map(row => row.map((cell, key) => <Cell key={key} type={cell[0]} />))
      }
    </section>
  )
}

export default PlayArea