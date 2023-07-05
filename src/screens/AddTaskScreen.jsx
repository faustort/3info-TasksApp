import { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";


export default function AddTaskScreen() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    return (
        <View>
            <TextInput
                label="Título"
                value={titulo}
                onChangeText={setTitulo}
            />
            <TextInput
                label="Descrição"
                value={descricao}
                onChangeText={setDescricao}
            />
        </View>
    )
}