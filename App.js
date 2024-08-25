import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigacion/MyStack";
import MyDrawer from "./navigacion/MyDrawer";

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer>
        <MyStack />
      </MyDrawer>
    </NavigationContainer>
  );
}
