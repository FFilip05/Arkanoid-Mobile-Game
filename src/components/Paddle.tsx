import { Fragment } from "react";
import { Coordinate } from "../types/types";
import { StyleSheet, View  } from 'react-native';    

import { LightModeColors } from "../styles/colors";


interface PaddlePropos {
    paddle : Coordinate
}
export default function Paddle ({paddle}:PaddlePropos): JSX.Element {
    const segmentStyle = {
        left: paddle.x ,
        top: paddle.y,

    }
    return(
        <Fragment>
                        {/* {paddle.map((segment:Coordinate,index:number) => {
                const segmentStyle = {
                    left: segment.x * 10,
                    top: segment.y * 10,

                }
                return <View key={index} style={[styles.paddle,segmentStyle]}/>
            })} */}
            <View key={1} style={[styles.paddle,segmentStyle]}/>
        </Fragment>
    )

}
const styles = StyleSheet.create({
    paddle:{
        width: 45,
        height: 15,
        borderRadius: 5,
        backgroundColor: LightModeColors.primary,
        position: 'absolute'
    }
})