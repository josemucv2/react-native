import { Image } from "react-native";
import { createRoute } from "../utils/CreateRoute";
import FavoriteRoutes from "./Screens/Favorites/FavoritesStack";
import HomeRoutes from "../router/Screens/Home/HomeRoutes";
import PokedeskRoutes from "./Screens/Pokedesk/Pokedesk";

import Icon from "react-native-vector-icons/FontAwesome5";
import Pokeball from "../assets/pokeball.png";

const getIconPokeball = () => (
  <Image source={Pokeball} style={{ width: 75, height: 75, top: -15 }} />
);

const Route = [
  createRoute("Home", HomeRoutes, {
    tabBarLabel: "Inicio",
    tabBarIcon: ({ color, size }) => (
      <Icon name="home" size={size} color={color} />
    ),
  }),
  createRoute("Pokedesk", PokedeskRoutes, {
    tabBarLabel: "",
    tabBarIcon: () => getIconPokeball(),
  }),
  createRoute("Favorite", FavoriteRoutes, {
    tabBarLabel: "Favoritos",
    tabBarIcon: ({ color, size }) => (
      <Icon name="heart" size={size} color={color} />
    ),
  }),
];

export default Route;
