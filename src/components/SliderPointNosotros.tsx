import Carousel from 'react-native-snap-carousel';
import { StyleSheet, View, Text } from 'react-native';
import { Slide } from '../screens/PointsScreen';
import { Dispatch, SetStateAction } from 'react';

interface Props {
    equipo: String;
    data: Slide[]
    carouselRefNosotros: any;
    carouselRefEllos?: any;
    setpPointNosotros: Dispatch<SetStateAction<number>>;
}

export const SliderPointNosotros = ( { equipo , data , carouselRefNosotros , carouselRefEllos , setpPointNosotros } : Props ) => {    

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

        setpPointNosotros( index );

    }

    return (
        
        <>

            <Text style={{ fontWeight: '400' }}>{ equipo }:</Text>

            <Carousel
                ref={ carouselRefNosotros }                
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
