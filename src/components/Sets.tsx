import { Text, View } from "react-native";

interface Props {
    setPoint1: number;
    setPoint2: number;
}

export const Sets = ({ setPoint1 , setPoint2 }: Props) => {
    return (
     
        <View style={{ flexDirection: 'row' , justifyContent: 'space-evenly', width: '30%' }}>

            <Text style={{ fontSize: 30 , fontWeight: 'bold' , color: '#111' }}>{ setPoint1 }</Text>
            <Text style={{ fontSize: 30 , fontWeight: 'bold' , color: '#111' }}>{ setPoint2 }</Text>

        </View>

    )
}
