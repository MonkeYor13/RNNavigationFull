
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
const Tab = createBottomTabNavigator();

export default function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "green", //color para el icono activo
        tabBarInactiveTintColor: "red",
      }}
    >
      <Tab.Screen
        name="MyHome"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (<MaterialCommunityIcons name='menu' size={24} color={color} />)
        }}
      />
    </Tab.Navigator>
  );
}