import {View} from "react-native";

export function Screen({children}) {
    // About section styles
    return <View className="bg-black-metacritic">
        {children}
    </View>
}