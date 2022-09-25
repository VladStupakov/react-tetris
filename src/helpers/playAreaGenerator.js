export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 24;

export const createPlayArea = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )