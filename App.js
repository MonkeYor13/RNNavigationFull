import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigacion/MyStack";
import MyDrawer from "./navigacion/MyDrawer";
import UsarContexto from "./context/UsarContexto";
import { Provider } from "react-redux";
import { myStore } from "./store/myStore";

export default function App() {
  return (
    <Provider store={myStore}>
      <NavigationContainer>
        <UsarContexto>
          <MyDrawer>
            <MyStack />
          </MyDrawer>
        </UsarContexto>
      </NavigationContainer>
    </Provider>
  );
}
