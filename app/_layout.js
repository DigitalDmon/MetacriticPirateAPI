import {View, StyleSheet} from "react-native";
import {Stack} from 'expo-router'
import {Logo} from "../components/Logo";

export default function Layout() {
    return (
        <View style={styles.container}>
            <Stack
                screenOptions={{
                    headerStyle: {backgroundColor: "#FFBD3F",},
                    headerTintColor: "#000000",
                    headerTitle: "",
                    headerLeft: () => <Logo/>,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000"
    }
})