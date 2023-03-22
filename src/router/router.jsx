import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Route from "./routes";
const Tab = createBottomTabNavigator();
export default function Router() {
  return (
    <Tab.Navigator initialRouteName="Home">
      {Route.map((element, index) => {
        return (
          <Tab.Screen
            name={element.name}
            component={element.component}
            key={index}
            options={element.options}
          />
        );
      })}
    </Tab.Navigator>
  );
}
