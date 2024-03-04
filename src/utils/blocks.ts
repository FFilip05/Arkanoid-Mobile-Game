import { Coordinate } from "../types/types";

export const Blocks = (): Coordinate[] => {
  const blockSize = 50; 
  const rowHeight = 15; 
  const blocksPerRow = 7;
  const blocks: Coordinate[] = [];
  for (let row = 1; row < 2; row++) {
    const y = row * rowHeight;
    for (let i = 0; i < blocksPerRow; i++) {
      const x = i * blockSize;
      blocks.push({ x, y });
    }
  }
  blocks.map((e:Coordinate) => {
    console.log(e.x+e.y)
  })
  return blocks;
};
