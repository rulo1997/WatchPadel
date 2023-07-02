import { Dispatch, SetStateAction } from 'react';

import { StyleSheet, View, Text } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { Slide } from '../screens/PointsScreen';

interface Props {
    equipo: String;
    data: Slide[]
    carouselRefNosotros: any;
    carouselRefEllos: any;
    setPointEllos: Dispatch<SetStateAction<number>>;
}

export const SliderPointEllos = ( { equipo , data , carouselRefNosotros ,carouselRefEllos , setPointEllos } : Props ) => {    

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

    const onSnap = ( index : number ) => {

        setPointEllos( index );

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
                renderItem={ ({ item }) => renderItem( item ) }
                onSnapToItem={ onSnap }                
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
