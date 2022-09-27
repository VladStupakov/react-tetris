import React from 'react'

const ResultPiece = ({name, text}) => {
  return (
    <section className='result-piece'>
      {name + '    ' + text}
    </section>
  )
}

export default ResultPiece