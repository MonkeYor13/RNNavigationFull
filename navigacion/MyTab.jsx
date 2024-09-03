
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import Proveedor from '../screens/Proveedor';
import FrutasScreen from '../screens/FrutasScreen';

export default function MyTab() {
  const Tab = createBottomTabNavigator();
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
        name="Contexto"
        component={Proveedor}
        options={{
          tabBarIcon: ({ color }) => (<MaterialCommunityIcons name='account-box-outline' size={24} color={color} />)
        }}
      />
      <Tab.Screen
        name="Redux"
        component={FrutasScreen}
        options={{
          tabBarIcon: ({ color }) => (<MaterialCommunityIcons name='account-box-outline' size={24} color={color} />)
        }}
      />
    </Tab.Navigator>
  );
}