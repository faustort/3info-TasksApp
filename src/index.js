import { NavigationContainer } from "@react-navigation/native";
import LoadingScreen from "./screens/LoadingScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ListAllTasks from "./screens/ListAllTasks";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
                <Stack.Screen
                    name="MainTabNavigator"
                    component={MainTabNavigator}

                    options={{
                        title: "Lista de Tarefas",
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
                    title: "Lista de Tarefas",
                    headerShown: false,
                    tabBarIcon: () => <MaterialCommunityIcons
                        name="list-status"
                        size={24}
                    />
                }}
            />
        </MTBNavigator.Navigator>
    )
}
