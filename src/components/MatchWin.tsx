import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Dispatch, SetStateAction } from 'react';

interface Props {
    setGameNosotros: Dispatch<SetStateAction<number>>;
    setGameEllos: Dispatch<SetStateAction<number>>;
    setpPointNosotros: Dispatch<SetStateAction<number>>;
    setPointEllos: Dispatch<SetStateAction<number>>;
    carouselRefNosotros: any;
    carouselRefEllos: any;
    carouselRefPointNosotros: any;
    carouselRefPointEllos: any;
}

export const MatchWin = ({ 
    setGameNosotros
    ,setGameEllos
    ,setpPointNosotros
    ,setPointEllos
    ,carouselRefNosotros
    ,carouselRefEllos
    ,carouselRefPointNosotros
    ,carouselRefPointEllos }: Props ) => {
    
    const onReset = () => {

        setGameNosotros( 0 );
        setGameEllos( 0 );
        setpPointNosotros( 0 );
        setPointEllos( 0 );

        carouselRefNosotros.current?.snapToItem(0 , true , false);
        carouselRefEllos.current?.snapToItem(0 , true , false);
        carouselRefPointNosotros.current?.snapToItem(0 , true , false);
        carouselRefPointEllos.current?.snapToItem(0 , true , false);

    }

    return (

        <>

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

            <TouchableOpacity
                activeOpacity={ .7 }
                onPress={ onReset }
                style={ styles.buttonReset }
            >
                <Text style={{ fontWeight: 'bold' , textAlign: 'center' }}>Reiniciar</Text>
            </TouchableOpacity>

        </>
    )
}

const styles = StyleSheet.create({
    buttonReset: {
        position: 'relative'
        ,top: 30
        ,backgroundColor: '#2737BD'
        ,borderRadius: 5
        ,justifyContent: 'center'
        ,alignItems: 'center'        
    }
});
