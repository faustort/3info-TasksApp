import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";



export default function EditTaskScreen({ navigation, route }) {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const { task } = route.params; // nunca funciona!!!
    useEffect(() => {
        console.log(task)
    }, [task])
    return (
        <View
         
        >
            <Text variant="headlineLarge">Editar Tarefa</Text>

        </View>
    )
}