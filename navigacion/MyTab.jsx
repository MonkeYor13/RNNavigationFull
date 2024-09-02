
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DetailsScreen from '../screens/DetailsScreen';
<<<<<<< HEAD
import Proveedor from '../screens/Proveedor';
=======
import MyTextInput from '../screens/MyTextInput';
>>>>>>> d25c9f1f990fe2dfaf051524f08192dd72413bf3
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
<<<<<<< HEAD
        name="Contexto"
        component={Proveedor}
=======
        name="Registro"
        component={MyTextInput}
>>>>>>> d25c9f1f990fe2dfaf051524f08192dd72413bf3
        options={{
          tabBarIcon: ({ color }) => (<MaterialCommunityIcons name='account-box-outline' size={24} color={color} />)
        }}
      />
    </Tab.Navigator>
  );
}