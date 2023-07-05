import { Asset } from "expo-asset";
import { Image, View } from "react-native";



export default function LoadingScreen() {

    const image = Asset('../assets/icon.png')
    return (
        <View>
            <Image
                source={image}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
            />
        </View>
    )
}