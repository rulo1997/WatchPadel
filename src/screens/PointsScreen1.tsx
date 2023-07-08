import { View, Text, StyleSheet } from 'react-native';

import { Buttons } from '../components/Buttons';

export const PointsScreen1 = () => {

    return (

        <>
        
            <View style={ styles.view }>

                <Text style={ styles.textTitle }>Puntos del Juego</Text>

                <View style={{ flexDirection: 'row' , width: '100%' , justifyContent: 'center' }}>

                    <View style={{ width: '50%' , height: '70%' , borderWidth: 2 , justifyContent: 'center' , alignItems: 'center' }}>

                        <Text style={{ fontSize: 40 , fontWeight: '700' }}>40</Text>

                    </View>

                    <View style={{ width: '50%' , height: '70%' , borderWidth: 2 , justifyContent: 'center' , alignItems: 'center' }}>

                        <Text style={{ fontSize: 40 , fontWeight: '700' }}>15</Text>

                    </View>
                    
                </View>
            
            </View>

            <View style={ styles.view }>

                <Text style={ styles.textTitle }>Puntos del Partido</Text>        

                <View style={{ flexDirection: 'row' , width: '100%' , justifyContent: 'center' }}>

                    <View style={{ width: '50%' , height: '70%' , borderWidth: 2 , justifyContent: 'center' , alignItems: 'center' }}>

                        <Text style={{ fontSize: 40 , fontWeight: '700' }}>40</Text>

                    </View>

                    <View style={{ width: '50%' , height: '70%' , borderWidth: 2 , justifyContent: 'center' , alignItems: 'center' }}>

                        <Text style={{ fontSize: 40 , fontWeight: '700' }}>15</Text>

                    </View>

                </View>

            </View>

            <View style={ styles.viewButtons }>

                <Buttons />

                <Buttons />

            </View>

        </>

    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1
        ,justifyContent: 'center'
        ,alignItems: 'center'
        ,backgroundColor: '#87CEEB'
    }
    ,textTitle: {
        fontSize: 25
        ,fontWeight: 'bold'
        ,color: '#fff'
        ,borderBottomWidth: 2.5
        ,borderBottomColor: '#040738'
    }
    ,viewButtons: {
        flexDirection: 'row'
        ,width: '100%'
        ,height: '20%'
        ,top: '40%'
        ,justifyContent: 'space-between'
        ,paddingHorizontal: 20
        ,position: 'absolute'        
    }
});