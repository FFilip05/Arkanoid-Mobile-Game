import Game from "./src/components/Game";
import "react-native-gesture-handler"
import  {GestureHandlerRootView} from "react-native-gesture-handler"

const App = () => (
  <GestureHandlerRootView style={{flex:1}}>
    <Game/>
  </GestureHandlerRootView>);

export default App;

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });