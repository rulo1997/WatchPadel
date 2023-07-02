import { StyleSheet, View, Text } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { Slide } from '../screens/PointsScreen';
import { Dispatch, SetStateAction } from 'react';

interface Props {
    equipo: String;
    data: Slide[]
    carouselRefEllos?: any;
    carouselRefNosotros: any;
    carouselRefPointEllos?: any;
    setGameEllos: Dispatch<SetStateAction<number>>;    
}

export const SliderGameEllos = ( { equipo , data , carouselRefEllos , carouselRefNosotros , carouselRefPointEllos , setGameEllos } : Props ) => {    

    const renderItem = ( item : Slide ) => {

        return (

            <View 
                style={{ 
                    flex: 1
                    ,flexDirection: 'column'
                    ,justifyContent: 'center' 
                    ,alignItems: 'center' 
                }}
            >                

                <Text style={{ fontSize: 30 , fontWeight: 'bold' }}>
                    { item.punto }
                </Text>

            </View>

        );

    }

    const onSnap = ( index: number , equipo: String ) => {                        

        setGameEllos( index );

        if( index === 0 && carouselRefNosotros.current.currentIndex !== 0 ) {                        

            carouselRefNosotros.current?.snapToItem(0 , true , false);

            carouselRefPointEllos.current?.snapToNext();            

        }        
        else if( index === 0 && carouselRefNosotros.current.currentIndex === 0 ) {           

            carouselRefPointEllos.current?.snapToNext();            

        }

        if( index === 1 ) {

            setGameEllos( 0 );

        }

    }

    return (
        
        <>

            <Text style={{ fontWeight: '400' }}>{ equipo }:</Text>

            <Carousel
                ref={ carouselRefEllos }                
                sliderHeight={ 50 }
                slideStyle={ styles.item }         
                itemHeight={ 50 }                              
                data={ data }
                loop                
                onSnapToItem={ index => onSnap( index , equipo ) }                
                renderItem={ ({ item }) => renderItem( item ) }                
                vertical={ true }
                removeClippedSubviews
            />

        </>

    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1
        ,flexDirection: 'row'
        ,justifyContent: 'center'
        ,alignItems: 'center' 
        ,paddingHorizontal: 10
    }
    ,item: {
        backgroundColor: 'transparent'
        ,justifyContent: 'center'
        ,alignItems: 'center'
        ,flex: 1 
    }
});
