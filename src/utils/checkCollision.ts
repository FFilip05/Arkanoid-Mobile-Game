import { Coordinate } from "../types/types";

export const checkCollision = (
  Ball: Coordinate,
  Object: Coordinate,
  area: number,
): boolean => {
    const distanceBetweenBallAndObjectX: number = Math.abs(Ball.x - Object.x);
  const distanceBetweenBallAndObjectY: number = Math.abs(Ball.y - Object.y);
    return (
        distanceBetweenBallAndObjectX < area && distanceBetweenBallAndObjectY < area
    )
      
    

};