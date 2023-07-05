import { FlatList, ScrollView, View } from "react-native";
import { styles } from "../utils/style";
import { Text } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";


export default function ListAllTasks() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getTasks();
    }, [])

    async function getTasks() {
        try {
            const tasksRef = collection(db, 'usuarios');
            const querySnapshot = await getDocs(tasksRef)
            querySnapshot.forEach(
                (doc) => {
                    console.log(doc.id, " => ", doc.data());
                }
            );
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View
            style={styles.container}
        >
            <View style={{ flex: 0.1 }}>
                <Text
                    variant="headlineLarge"
                >
                    Lista de Tarefas
                </Text>
            </View>
            <View style={{
                ...styles.selfFullWidth,
                flex: 0.9
            }}>
                <ScrollView
                    style={{
                        ...styles.selfFullWidth,

                    }}
                >
                    <FlatList
                        data={[
                            { key: 'Devin' },
                            { key: 'Dan' },
                            { key: 'Dominic' },
                        ]}
                        renderItem={({ item }) => <Text>{item.key}</Text>}
                    />
                </ScrollView>
            </View>
        </View>
    )
}