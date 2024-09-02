import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigacion/MyStack";
import MyDrawer from "./navigacion/MyDrawer";
import UsarContexto from "./context/UsarContexto";

export default function App() {
  return (
    <NavigationContainer>
      <UsarContexto>
      <MyDrawer>
        <MyStack />
      </MyDrawer>
      </UsarContexto>
    </NavigationContainer>
  );
}
