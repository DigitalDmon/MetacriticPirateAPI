import {Text, View} from 'react-native';

export function Score({score, maxScore}) {

    const getColor = () => {
        const porcentaje = (score / maxScore) * 100;
        if (porcentaje < 40) return "bg-red-metacritic";
        if (porcentaje < 98) return "bg-yellow-metacritic";
        return "bg-green-metacritic";
    }

    const className = getColor()

    return (
        <View className={`${className} w-8 h-8 rounded-full justify-center items-center`}>
            <Text className="text-lg">
                {score}
            </Text>
        </View>
    )
}