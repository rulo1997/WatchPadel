import { useEffect } from "react";
import { Text, View } from "react-native";

interface Props {
    gamePoint1: number;
    gamePoint2: number;
}

export const Games = ({ gamePoint1 , gamePoint2 }: Props) => {
    return (
        
        
        <View style={{ flexDirection: 'row' , justifyContent: 'space-evenly', width: '30%' }}>

            <Text style={{ fontSize: 30 , fontWeight: 'bold' , color: '#111' }}>{ gamePoint1 }</Text>
            <Text style={{ fontSize: 30 , fontWeight: 'bold' , color: '#111' }}>{ gamePoint2 }</Text>

        </View>
        
    )
}
