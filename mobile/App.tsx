import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import MessagesScreen from "./screens/MessagesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Messages"
          component={MessagesScreen}
          options={({ route }: any) => ({
            title: `# ${route.params.channelData.name}`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
