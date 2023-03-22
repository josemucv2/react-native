import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../../screens/Home/Home";
const Stack = createStackNavigator();

export default function HomeRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Inicio" }}
      />
    </Stack.Navigator>
  );
}
