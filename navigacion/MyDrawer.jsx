import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyStack from './MyStack';
import ProfileScreen from '../screens/ProfileScreen';
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Drawer"
        component={MyStack}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>

  )
}