import { NavigationContainer } from "@react-navigation/native";
import NavigationTab from "./src/router/router";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTab />
    </NavigationContainer>
  );
}
