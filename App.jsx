import {
  NavigationIndependentTree
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AboutScreen from "./src/screens/AboutScreen";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />

      </Stack.Navigator>
    </NavigationIndependentTree>
  );
};

export default App;
