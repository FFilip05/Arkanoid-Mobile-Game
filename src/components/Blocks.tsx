import { Fragment } from "react";
import { Coordinate } from "../types/types";
import { StyleSheet, View  } from 'react-native';    

import { LightModeColors } from "../styles/colors";

interface BlockPropos {
    blocks : Coordinate[],
}
export default function Blocks ({blocks}:BlockPropos): JSX.Element {
    return(
        <Fragment>
            {blocks.map((segment:Coordinate,index:number) => {
                const segmentStyle = {
                    left: segment.x * 10,
                    top: segment.y * 10,
                }
                return <View key={index} style={[styles.block,segmentStyle]}/>
            })}
        </Fragment>
    )

}
const styles = StyleSheet.create({
    block:{
        width: 50,
        height: 15,
        borderRadius: 50,
        backgroundColor: LightModeColors.primary,
        position: 'absolute'
    }
})