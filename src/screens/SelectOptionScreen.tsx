import { Alert, BackHandler, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RootStackParamList } from "../navigator/Navigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";

type Props = NativeStackScreenProps<RootStackParamList, 'SelectOptionScreen'>;

export const SelectOptionScreen = ({ navigation }: Props ) => {

    // useEffect(() => {
        
    //     const backAction = () => {
    //         Alert.alert('¡Espera!', '¿Estás seguro/a que quieren abandonar la aplicación?', [
    //         {
    //             text: 'No, prefiero quedarme',
    //             onPress: () => null,
    //             style: 'cancel',
    //         },
    //         {text: 'Si, quiero abandonar', onPress: () => BackHandler.exitApp()},
    //         ]);
    //         return true;
    //     };

    //     const backHandler = BackHandler.addEventListener(
    //         'hardwareBackPress',
    //         backAction,
    //     );

    //     return () => backHandler.remove();

    // }, []);

    const onPress = ( e: GestureResponderEvent , action: string ) => {

        action === 'crear'
        ? navigation.navigate('CreateRoomScreen')
        : navigation.navigate('JoinRoomScreen')

    }

    return (
        
        <View style={ styles.screen }>

            <TouchableOpacity 
                style={ styles.button }
                activeOpacity={ .7 }                
                onPress={ event => onPress( event , 'crear' ) }
            >
                
                <Text style={ styles.text }>Crear una sala</Text>

            </TouchableOpacity>

            <TouchableOpacity 
                style={ styles.button }
                activeOpacity={ .7 }
                onPress={ event => onPress( event , 'unirse' ) }
            >
                
                <Text style={ styles.text }>Unirse a una sala</Text>

            </TouchableOpacity>        

        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
        ,justifyContent: 'space-evenly'
        ,alignItems: 'center'
        ,backgroundColor: '#040738'
    }
    ,text: {
        fontSize: 25
        ,fontWeight: 'bold'
        ,color: '#ffff'        
    }
    ,button: {
        borderRadius: 25
        ,borderColor: '#ffff'
        ,borderWidth: 5
        ,backgroundColor: 'transparent'
        ,padding: 15        
    }
});
