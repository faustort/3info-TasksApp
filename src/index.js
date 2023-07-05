import { NavigationContainer } from "@react-navigation/native";
import LoadingScreen from "./screens/LoadingScreen";

const { createNativeStackNavigator } = require("@react-navigation/native-stack");
const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="LoadingScreen"
                    component={LoadingScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}