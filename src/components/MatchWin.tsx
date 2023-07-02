import { Text, View } from "react-native"

export const MatchWin = () => {

    

    return (
        <View
            style={{
                backgroundColor: 'green'
                ,borderRadius: 5
                ,flex: 1
                ,elevation: 9
                ,position: 'absolute'
                ,top: 170
            }}
        >

            <Text
                style={{
                    fontSize: 15
                    ,fontWeight: 'bold'
                    ,color: '#ffff'                                                    
                    ,textAlign: 'center'
                }}
            >
                ¡Partido ganado!
            </Text>

        </View>
    )
}
