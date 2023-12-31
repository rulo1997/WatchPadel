import { StyleSheet, View, Text } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { Slide } from '../screens/PointsScreen';
import { Dispatch, SetStateAction, useState } from 'react';

interface Props {
    equipo: String;
    data: Slide[]
    carouselRefNosotros?: any;
    carouselRefEllos: any;
    carouselRefPointNosotros?: any;
    setGameNosotros: Dispatch<SetStateAction<number>>;
    setGameEllos: Dispatch<SetStateAction<number>>;
}

export const SliderGameNosotros = ( { equipo , data , carouselRefNosotros , carouselRefEllos , carouselRefPointNosotros , setGameNosotros , setGameEllos } : Props ) => {    

    const [beforeIndex, setBeforeIndex] = useState<number>(0);

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

        setGameNosotros( index );        

        if( beforeIndex === 3 ) {            
    
            if( index === 0 && carouselRefEllos.current.currentIndex !== 0 ) {
    
                carouselRefEllos.current?.snapToItem(0 , true , false);
    
                carouselRefPointNosotros.current?.snapToNext();            

                setGameEllos( 0 );
    
            }        
            else if( index === 0 && carouselRefEllos.current.currentIndex === 0 ) {
    
                carouselRefPointNosotros.current?.snapToNext();            

                setGameEllos( 0 );
    
            }    

        }

        if( index === 1 ) {
    
            setGameNosotros( 0 );            

        }

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
                onSnapToItem={ index => onSnap( index , equipo ) }
                onBeforeSnapToItem={ setBeforeIndex }
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
