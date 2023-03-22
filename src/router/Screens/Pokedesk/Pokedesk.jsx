import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pokedesk from "../../../screens/Pokedesk/Pokedesk";
import PokemonDetail from "../../../screens/PokemonDetail/PokemonDetail";

const Stack = createStackNavigator();

export default function PokedeskRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedesk"
        component={Pokedesk}
        options={{ title: "Pokemones" }}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={PokemonDetail}
        options={{ title: "Detalles" }}
      />
    </Stack.Navigator>
  );
}
