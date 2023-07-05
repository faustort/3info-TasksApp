import { View } from "react-native";
import { styles } from "../utils/style";
import { Text } from "react-native-paper";


export default function ListAllTasks() {
    return (
        <View
            style={styles.container}
        >
            <Text
                variant="h1"
            >  ListAllTasks</Text>
        </View>
    )
}