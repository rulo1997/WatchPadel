import { Text, View } from "react-native"

export const PointGold = () => {
    return (
        <View
            style={{
                backgroundColor: 'yellow'
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
                Punto de Oro
            </Text>

        </View>
    )
}
