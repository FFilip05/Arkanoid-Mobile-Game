import { Coordinate } from "../types/types";

export const checkGameOver = (
  Ball: Coordinate,
  boundaries: any
): boolean => {
  return (
    Ball.x < boundaries.xMin ||
    Ball.x > boundaries.xMax ||
    Ball.y < boundaries.yMin ||
    Ball.y > boundaries.yMax
  );
};