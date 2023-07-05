import { FlatList, ScrollView, View } from "react-native";
import { styles } from "../utils/style";
import { Text } from "react-native-paper";


export default function ListAllTasks() {
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