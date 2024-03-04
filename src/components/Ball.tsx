import { Fragment } from "react";
import { Coordinate } from "../types/types";
import { StyleSheet, View  } from 'react-native';    

import { LightModeColors } from "../styles/colors";

interface BallPropos {
    ball : Coordinate
}
export default function Ball ({ball}:BallPropos): JSX.Element {
    const segmentStyle = {
        left: ball.x * 5,
        top: ball.y * 5,

    }
    return(
        <Fragment>
                <View key={1} style={[styles.ball,segmentStyle]}/>
        </Fragment>
    )

}
const styles = StyleSheet.create({
    ball:{
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: LightModeColors.primary,
        position: 'absolute'
    }
})