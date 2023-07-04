import { Image, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/Navigator";

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export const HomeScreen = ( { navigation } : Props ) => {

    setTimeout(() => {
        
        navigation.navigate('SelectOptionScreen');

    }, 1500);

    return (
        
        <View
            style={ styles.view }
        >

            <Text style={ styles.title }>¡Bienvenido a WatchPadel!</Text>

            <Image 
                source={{ uri: 'https://w7.pngwing.com/pngs/463/294/png-transparent-tennis-balls-ball-sports-tennis-equipment-and-supplies-tennis-ball.png' }}
                width={ 25 }
                height={ 25 }                
                style={{
                    borderRadius: 15
                    ,marginTop: 15
                }}
            />

        </View>

    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1
        ,justifyContent: 'center'
        ,alignItems: 'center'
        ,backgroundColor: 'blue'
    }
    ,title: {
        fontSize: 25 
        ,fontWeight: 'bold'
        ,color: 'white'
    }
});
