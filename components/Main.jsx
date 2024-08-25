import {useEffect, useState} from 'react'
import {ActivityIndicator, FlatList, View} from 'react-native';
import {getLatestGames} from "../libs/metacritic-api";
import {AnimatedGameCard} from "./GameCard";


export function Main() {

    const [games, setGames] = useState([])

    useEffect(() => {
        getLatestGames().then((games) => {
            setGames(games)
        })
    }, []);

    return (
        <View className="bg-black-metacritic">
            {games.length === 0 ? (
                <View>
                    <ActivityIndicator/>
                </View>
            ) : (
                <FlatList
                    data={games}
                    keyExtractor={game => game.slug}
                    renderItem={({item, index}) => <AnimatedGameCard game={item} index={index}/>}>
                </FlatList>
            )}
        </View>
    );
}