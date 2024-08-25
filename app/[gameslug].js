import {ActivityIndicator, Image, ScrollView, Text, View} from "react-native";
import {Stack, useLocalSearchParams} from "expo-router";
import {Screen} from "../components/Screen";
import {useEffect, useState} from "react";
import {getGameDetails, getLatestGames} from "../libs/metacritic-api";
import {Score} from "../components/Score";

export default function Detail() {
    const {gameslug} = useLocalSearchParams();
    const [gameInfo, setGameInfo] = useState(null);
    const [games, setGames] = useState([])

    useEffect(() => {
        if (gameslug) {
            getGameDetails(gameslug).then(setGameInfo);
        }
    }, [gameslug]);

    useEffect(() => {
        getLatestGames().then((games) => {
            setGames(games)
        })
    }, []);

    return (
        <Screen>
            <Stack.Screen options={{
                headerTintColor: "#000", headerLeft: () => {},
                headerTitle: gameInfo ? gameInfo.title : "Loading..."
            }}/>
            <View>
                {gameInfo === null ? (
                    <ActivityIndicator color="#FFBD3F" size="large"/>
                ) : (
                    <ScrollView className="bg-black-metacritic">
                        <View className="justify-center items-center m-10">
                            <Image style={{width: 300, height: 300, resizeMode: 'contain', marginBottom: 10}} source={{uri: gameInfo.img}}/>
                            <Score score={gameInfo.score} maxScore={100} />
                            <Text className="text-white-metacritic text-base mt-5">Release date: {games.releaseDate}</Text>
                            <Text className="text-white-metacritic text-base mt-5">{gameInfo.description}</Text>
                            <Text className="text-white-metacritic text-xl mt-5">Reviews</Text>
                            {gameInfo.reviews && gameInfo.reviews.length > 0 ? (
                                gameInfo.reviews.map((review, index) => (
                                    <View key={index} className="bg-black-metacritic mt-5">
                                        <Text className="bg-white-metacritic text-yellow-metacritic text-lg">
                                            {review.author} - {review.publicationName}
                                        </Text>
                                        <Text className="text-white-metacritic text-sm">
                                            {review.date}
                                        </Text>
                                        <Text className="text-white-metacritic text-base mt-2">
                                            "{review.quote}"
                                        </Text>
                                    </View>
                                ))
                            ) : (
                                <Text className="text-white-metacritic text-base mt-5">
                                    No reviews available.
                                </Text>
                            )}
                        </View>
                    </ScrollView>
                )}
            </View>
        </Screen>
    )
}
