import { StyleSheet, Text, TextInput, View } from "react-native"

export const CreateRoomScreen = () => {
  return (
    
    <View style={ styles.view }>
        
        <View 
            style={{                
                justifyContent: 'center'
                ,alignItems: 'center'
                ,marginBottom: 30
            }}
        >

            <Text
                style={{
                    borderWidth: 2
                    ,borderColor: 'blue'
                    ,borderRadius: 15
                    ,padding: 20
                    ,color: 'white'
                    ,backgroundColor: 'blue'
                    ,fontSize: 20                    
                }}
            >
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

            <Text
                style={{
                    borderWidth: 2
                    ,borderColor: 'blue'
                    ,borderRadius: 15
                    ,padding: 20
                    ,color: 'white'
                    ,backgroundColor: 'blue' 
                    ,fontSize: 20                   
                }}
            >
                ¡Vigila quien se conecta a tu sala! Determina una contraseña para conectarse a tu sala y empezar a jugar
            </Text>

            <TextInput
                style={ styles.input } 
                placeholder="Contraseña (opcional)"
            />

        </View>

    </View>

  )
}

const styles = StyleSheet.create({
    view: {
        flex: 1
        ,alignItems: 'center'
        ,justifyContent: 'center'
        ,padding: 15
        // ,backgroundColor: 'red'
    }
    ,input: {
        height: 50
        ,width: '60%'
        ,textAlign: 'center'
        ,fontSize: 25       
        ,margin: 12
        ,borderBottomWidth: 2
        ,borderBottomColor: 'red'
        ,padding: 10
      },
});
