import { useEffect, useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Team , Games , Sets , AlertPoint } from '../components';
import { useAnimation , usePoints } from '../hooks';

const team1 = 'Equipo 1';
const team2 = 'Equipo 2';

interface Props {
    ancho: number;
    text: string;
    color?: string;
}

export const PointsScreen1 = () => {
    
    const [alertProps, setAlertProps] = useState<Props>({ ancho: 150 , text: 'Punto de Oro' });

    const { 
        point1
        ,point2
        ,gamePoint1
        ,gamePoint2
        ,setPoint1
        ,setPoint2
        ,setGamePoint1
        ,setGamePoint2
        ,resetPoints
        ,onResetAll 
    } = usePoints();
    
    const { startMoving , position } = useAnimation();

    useEffect(() => {
      
        if( point1 === 40 && point2 === 40 ) startMoving( -70 );        
        else startMoving( 10 );

    }, [ point1 , point2 ]);

    useEffect(() => {

        if( ( gamePoint1 === 6 && gamePoint2 <= 4 ) || ( gamePoint1 <= 4 && gamePoint2 === 6 ) ) {

            setAlertProps({ ancho: 200 , text: 'Set para Equipo 1' , color: 'red' });
            startMoving( -70 );

            setTimeout(() => {
                
                resetPoints();

            }, 1500);

        }
        else {
            
            setAlertProps({ ancho: 150 , text: 'Punto de Oro' });
            startMoving( 10 );

        } 

    }, [ gamePoint1 , gamePoint2 ])

    return (
        
        <View style={ styles.view }>        

            <Team 
                team={ team1 }
                point={ point1 }
                setPoint={ setPoint1 }
                setGamePoint={ setGamePoint1 }
                resetPoint={ resetPoints }
            />

            <View style={{ alignItems: 'center' }}>

                <View style={{ backgroundColor: 'blue' , borderRadius: 20 , padding: 10 }}>

                    <TouchableOpacity onPress={ onResetAll }>
                        <Text style={{ fontSize: 20 , color:'#ffff' , fontWeight: '600' }}>Reiniciar</Text>
                    </TouchableOpacity>

                </View>

                <Text style={{ fontSize: 30 , fontWeight: 'bold' , color: '#111' }}>Juegos</Text>
                
                <Games 
                    gamePoint1={ gamePoint1 }
                    gamePoint2={ gamePoint2 }
                />

                <Text style={{ fontSize: 30 , fontWeight: 'bold' , color: '#111' }}>Sets</Text>

                <Sets 
                    setPoint1={ 0 }
                    setPoint2={ 0 }
                />

            </View>

            <Team 
                team={ team2 }
                point={ point2 }
                setPoint={ setPoint2 }
                setGamePoint={ setGamePoint2 }
                resetPoint={ resetPoints }
            />

            <AlertPoint 
                position={ position }
                { ...alertProps }
            />

        </View>

    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1
        ,flexDirection: 'row'
        ,justifyContent: 'space-evenly'
        ,alignItems: 'center'
        ,backgroundColor: '#87CEEB'        
    }
});