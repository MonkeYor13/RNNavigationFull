
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import MyTextInput from '../screens/MyTextInput';
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
      <Tab.Screen
        name="Api"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({ color }) => (<MaterialCommunityIcons name='account-box-outline' size={24} color={color} />)
        }}
      />
      <Tab.Screen
        name="Registro"
        component={MyTextInput}
        options={{
          tabBarIcon: ({ color }) => (<MaterialCommunityIcons name='account-box-outline' size={24} color={color} />)
        }}
      />
    </Tab.Navigator>
  );
}