import { useAssets } from "expo-asset";
import { Image, View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { styles } from "../utils/style";

export default function LoadingScreen() {

    const [assets, error] = useAssets(require('../../assets/icon.png'));

    return (
        <View
            style={styles.container}
        >
            <ActivityIndicator
                size={50}

            />
            <Text>  Carregando...</Text>
            {assets &&
                <Image
                    source={assets[0]}
                    style={{ width: 200, height: 200 }}
                    resizeMode="contain"
                />}
        </View>
    )
}