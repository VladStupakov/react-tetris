import React, { useState } from 'react'
import PlayArea from './PlayArea'
import Results from './Results'
import { createPlayArea, checkCollision } from '../helpers/playAreaGenerator'

import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { usePlayArea } from '../hooks/usePlayArea';
import { useGameStatus } from '../hooks/useGameStatus';



const Tetris = () => {

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = usePlayArea(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  const moveTetromino = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const keyUp = ({ key }) => {
    if (!gameOver) {
      if (key === 'ArrowDown') {
        setDropTime(1000 / (level + 1));
      }
    }
  };

  const startGame = () => {
    setStage(createPlayArea());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
  };

  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        console.log('GAME OVER!!!');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropTetromino = () => {
    setDropTime(null);
    drop();
  };

  useInterval(() => {
    drop();
  }, dropTime);

  const move = (key) => {
    if (!gameOver) {
      switch (key) {
        case 'ArrowLeft':
          moveTetromino(-1)
          break
        case 'ArrowRight':
          moveTetromino(1)
          break
        case 'ArrowDown':
          dropTetromino()
          break
      }
    }
  }

  return (
    <div className='tetris' tabIndex='-1' onKeyDown={(e) => move(e.key)} onKeyUp={keyUp}>
      <PlayArea area={stage} />
      <Results gameOver={gameOver} startGame={startGame} score={score} level={level} rows={rows}/>
    </div>
  )
}

export default Tetris