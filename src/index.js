import { NavigationContainer } from "@react-navigation/native";
import LoadingScreen from "./screens/LoadingScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ListAllTasks from "./screens/ListAllTasks";

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
                        title: "Carregando...",
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const MTBNavigator = createMaterialBottomTabNavigator();

export function MainTabNavigator() {
    return (
        <MTBNavigator.Navigator>
            <MTBNavigator.Screen
                name="ListScreen"
                component={ListAllTasks}
                options={{
                    title: "Início",
                }}
            />

        </MTBNavigator.Navigator>

    )
}
