import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View } from 'react-native';    
import { LightModeColors } from '../styles/colors';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { Direction,Coordinate} from '../types/types';
import { checkGameOver } from "../utils/checkGameOver";
import { checkCollision } from '../utils/checkCollision';
import Ball from './Ball';
import Paddle from './Paddle';
import Header from "./Header";
import Blocks from './Blocks';

const PADDLE_INITIAL_POSITION = { x: 0, y: 700 };
const BLOCKS_INITIAL_POSITION = [{ x: 0, y: 700 }];
const BALL_INITIAL_POSITION = { x: 17, y: 50 };
const GAME_BOUNDS = { xMin: 30, xMax: 400, yMin: 70, yMax: 880 };
const MOVE_INTERVAL = 100;
const SCORE_INCREMENT = 10;
const DIFFICULTY_MAP = [{hard:"20"},{medium:"8"},{easy:"5"}]

export default function Game(){

    const [direction, setDirection] = useState<Direction>(Direction.Down);
    const [blocks, setBlocks] = useState<Coordinate[]>(BLOCKS_INITIAL_POSITION);
    // const [collision,isCollision] = useState(false);
    const [paddle, setPaddle] = useState<Coordinate>(PADDLE_INITIAL_POSITION);
    const [ball, setBall] = useState<Coordinate>(BALL_INITIAL_POSITION);
    // const [score, setScore] = useState<number>(0);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(false);

    // setBlocks()

    useEffect(() => {
        if (!isGameOver) {
          const intervalId = setInterval(() => {
            !isPaused && moveBall() ;
          }, MOVE_INTERVAL);
          return () => clearInterval(intervalId);
        }
      }, [ball, isGameOver, isPaused]);

      const moveBall = () => {
        const newBall = ball;
        switch (direction) {
          case Direction.Up:
            newBall.y -= 1;
            break;
          case Direction.Down:
            newBall.y += 1;
            break;
          default:
            break;
        }
        setBall(newBall)
            // GAME OVER
    if (checkGameOver(ball, GAME_BOUNDS)) {
      setIsGameOver((prev) => !prev);
      return;
    }
      };
      const movePaddle = () => {  };

    const pan = Gesture.Pan()

    .onUpdate((e) => {
      //moving paddle
  setPaddle({x:e.translationX+150,y:paddle.y})
      })

  const reloadGame = () => {
    setBall(BALL_INITIAL_POSITION);
    setPaddle(PADDLE_INITIAL_POSITION);
    setIsGameOver(false);
    setDirection(Direction.Right);
    setIsPaused(false);
  };

  const pauseGame = () => {
    setIsPaused(!isPaused);
  };

    return (
        <GestureDetector gesture={pan}>
            <SafeAreaView style={styles.container}>
            {/* <Header
          reloadGame={reloadGame}
          pauseGame={pauseGame}
          isPaused={isPaused}
        >
          <Score score={score} />
        </Header> */}
                <View style={styles.boundaries}>
                {/* <DraggableDot /> */}
                  <Blocks blocks={blocks}/>
                    <Ball ball={ball}/>
                    <Paddle paddle={paddle}/>
                </View>
            </SafeAreaView>
        </GestureDetector>
        
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: LightModeColors.background
    },
    boundaries:{
        flex:1,
        borderColor: LightModeColors.primary,
        borderWidth: 12,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: LightModeColors.background,
    }
})