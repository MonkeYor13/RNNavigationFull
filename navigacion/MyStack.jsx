import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import MyTab from './MyTab';
const Stack = createNativeStackNavigator();


export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={MyTab}
        options={{
          headerStyle: { backgroundColor: "#6a51ae" },
          headerShown: false
        }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>

  )
}