import { KeyboardAvoidingView, StyleSheet, Text, SafeAreaView , TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { RootStackParamList } from "../navigator/Navigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, 'CreateRoomScreen'>;

export const CreateRoomScreen = ( { navigation }: Props ) => {

    const onPlayGame = () => {

        navigation.navigate('PointsScreen');

    }

    return (        
        
        
        <SafeAreaView style={ styles.view }>

            <ScrollView>

                <KeyboardAvoidingView behavior={ 'height' }>

                    <View 
                        style={{                
                            justifyContent: 'center'
                            ,alignItems: 'center'
                            ,marginBottom: 30                            
                        }}
                    >

                        <Text style={ styles.textLabel }>
                            ¡El nombre de la sala representa un ID único con el cúal los otros jugadores se van a poder conectar!
                        </Text>

                        <TextInput
                            style={ styles.input } 
                            placeholder="Nombre de la sala"
                        />

                    </View>

                    <View 
                        style={{                
                            justifyContent: 'center'
                            ,alignItems: 'center'
                            ,marginTop: 30
                        }}
                    >

                        <Text style={ styles.textLabel }>
                            ¡Vigila quien se conecta a tu sala! Determina una contraseña para conectarse a tu sala y empezar a jugar
                        </Text>

                        <TextInput
                            style={ styles.input } 
                            placeholder="Contraseña (opcional)"
                        />

                    </View>

                    <View style={{ alignItems:'center' , marginTop: 40 }}>

                        <TouchableOpacity
                            style={ styles.button }
                            onPress={ onPlayGame }
                        >

                            <Text style={{ fontSize: 25 , textAlign: 'center' }}>¡Empezar a jugar!</Text>

                        </TouchableOpacity>                                

                    </View>

                </KeyboardAvoidingView>

            </ScrollView>

        </SafeAreaView>    

    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1        
        ,alignItems: 'center'        
        ,justifyContent: 'center'
        ,padding: 15                
        ,backgroundColor: '#87CEEB'
    }
    ,button: {
        borderRadius: 25
        ,borderColor: '#ffff'
        ,borderWidth: 5
        ,backgroundColor: 'transparent'
        ,padding: 15
        ,width: '70%' 
    }
    ,input: {
        height: 50
        ,width: '60%'
        ,textAlign: 'center'
        ,fontSize: 20       
        ,margin: 12
        ,borderBottomWidth: 2
        ,borderBottomColor: '#007BFF'
        ,padding: 10        
    }
    ,textLabel: {
        borderWidth: 2
        ,borderColor: '#ffff'
        ,borderRadius: 20
        ,padding: 20
        ,color: 'black'
        ,backgroundColor: '#ffff' 
        ,fontSize: 20
    }
});
