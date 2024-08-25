import {Animated, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useEffect, useRef} from 'react';
import {Score} from "./Score";
import {Link} from "expo-router";
import {styled} from "nativewind";

const StyledPressable = styled(Pressable)

export function GameCard({game}) {

    return (
        <Link href={`/${game.slug}`} asChild>
            <StyledPressable className="m-1 active:opacity-70 border bg-black-metacritic active:border-yellow-metacritic rounded-xl">
                <View key={game.slug} className="flex-row bg-black-metacritic rounded-xl p-2">
                    <Image source={{uri: game.image}} style={styles.imageWeb}/>
                    <View className="flex-shrink p-2">
                        <Text style={styles.title}>
                            {game.title}
                        </Text>
                        <Score score={game.score} maxScore={100}/>
                        <Text style={styles.description}>
                            {game.description.slice(0, 100) + "..."}
                        </Text>
                    </View>
                </View>
            </StyledPressable>
        </Link>
    )
}

export function AnimatedGameCard({game, index}) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            delay: index * 250,
            useNativeDriver: true,
        }).start()
    }, [opacity, index]);

    return (
        <Animated.View style={{opacity}}>
            <GameCard game={game}/>
        </Animated.View>
    )

}

const styles = StyleSheet.create({
    imageWeb: {
        width: 75,
        height: 125,
        borderRadius: 16
    },
    text: {
        fontSize: 18
    },
    title: {
        fontSize: 20,
        color: "#FFFFFF",
        fontWeight: "bold",
    },
    description: {
        fontSize: 16,
        fontWeight: 500,
        color: "#FFFFFF",
    }
});