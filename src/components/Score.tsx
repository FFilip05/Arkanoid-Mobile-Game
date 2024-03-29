import { Text, StyleSheet } from "react-native";
import { LightModeColors } from "../styles/colors";

interface ScoreProps {
  score: number;
}

export default function Score({ score }: ScoreProps): JSX.Element {
  return <Text style={styles.text}>123123 {score}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: LightModeColors.primary,
  },
});