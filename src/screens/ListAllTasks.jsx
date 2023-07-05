import { FlatList, ScrollView, View } from "react-native";
import { styles } from "../utils/style";
import { List, Text, TouchableRipple } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";


export default function ListAllTasks() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getTasks();
    }, [])

    async function getTasks() {
        try {
            const tasksRef = collection(db, 'usuarios');
            const querySnapshot = await getDocs(tasksRef);
            querySnapshot.forEach(
                (doc) => {
                    const task = {
                        id: doc.id,
                        ...doc.data()
                    }
                    setTasks((oldTasks) => [...oldTasks, task])
                }
            );
        } catch (error) {
            console.log(error);
        }
    }

    function deleteTask(id) {
        
        // faço um filtro de array para remover o item que tem o id igual ao id passado
        const newTasks = tasks.filter(
            (task) => task.id !== id
        )
        setTasks(newTasks);
        // removo o item do banco de dados
        const taskRef = doc(db, 'usuarios', id);
        // deleteDoc retorna uma promise
        deleteDoc(taskRef);
    }

    const ListItemTask = ({ item }) => {
        return (
            <List.Item
                title={item.nome}
                description={item.email}
                onPress={() => { }}
                right={
                    props => (
                        <>
                            <TouchableRipple
                                onPress={() => {
                                    // edit item
                                    console.log("Editar")
                                }}
                                style={styles.rightButton}
                            >
                                <List.Icon
                                    icon="file-edit"
                                    size={60}
                                />
                            </TouchableRipple>
                            <TouchableRipple
                                onPress={() => {
                                    // remove item
                                    console.log("Remover")
                                    deleteTask(item.id);
                                }}
                                style={styles.rightButton}

                            >
                                <List.Icon
                                    icon="trash-can"
                                    size={60}
                                />
                            </TouchableRipple>
                        </>
                    )
                }
            />
        )
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
                        data={tasks}
                        renderItem={
                            ({ item }) => {
                                console.log(item);
                                return (
                                    <ListItemTask
                                        key={item.id}
                                        item={item}
                                        onPress={() => { }}
                                    />
                                )
                            }
                        }
                    />
                </ScrollView>
            </View>
        </View>
    )
}