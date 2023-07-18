import { Animated, Dimensions, StyleSheet, Text, View } from "react-native"

interface Props {
    position: Animated.Value;
    color?: string;
    text: string;
    ancho: number;
}

export const AlertPoint = ({ position , color = 'yellow' , text , ancho }: Props)  => {         

    const { width } = Dimensions.get('screen');

    return (
     
        <Animated.View 
            style={{ 
                ...styles.view
                ,left: ( width - ancho ) / 2
                ,width: ancho                
                ,transform: [{
                    translateY: position
                }]                        
            }}
        >

            <Text style={{ ...styles.text , backgroundColor: color }}>{ text }</Text>

        </Animated.View>

    )
}
const styles = StyleSheet.create({
    view: {
        position: 'absolute'                 
        ,right: 0
        ,bottom: -40
        ,justifyContent: 'flex-end'        
        ,height: 30
        ,elevation: 6
    }
    ,text: {
        textAlign: 'center'
        ,borderRadius: 10
        ,color: 'black'
        ,fontSize: 20
        ,fontWeight: 'bold'
    }
});
