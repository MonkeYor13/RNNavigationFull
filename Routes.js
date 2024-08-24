import { View, StatusBar } from "react-native";
import HomeScreen from "./screens/HomeScreen";



export default function Routes() {
  return (
    <View>
      <StatusBar />
      <HomeScreen />
    </View>
  );
}
