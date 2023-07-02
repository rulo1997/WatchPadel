import { useRef, useState } from "react";

import { StyleSheet, Text, View } from "react-native"

import { SliderGameNosotros } from "../components/SliderGameNosotros";
import { SliderGameEllos } from "../components/SliderGameEllos";
import { SliderPointEllos } from '../components/SliderPointEllos';
import { SliderPointNosotros } from "../components/SliderPointNosotros";
import { PointGold } from "../components/PointGold";
import { MatchWin } from "../components/MatchWin";

export interface Slide {
    punto: number;    
}

const PuntosGame : Slide[] = [
    {
        punto: 0
    },
    {
        punto: 15
    },
    {
        punto: 30
    },
    {
        punto: 40
    },
];

const PuntosPartido : Slide[] = [
    {
        punto: 0
    },
    {
        punto: 1
    },
    {
        punto: 2
    },
    {
        punto: 3
    },
    {
        punto: 4
    },
    {
        punto: 5
    },
    {
        punto: 6
    },
    {
        punto: 7
    },
];

export const PointsScreen = () => {        

    const [gameNosotros, setGameNosotros] = useState<number>(0);
    const [gameEllos, setGameEllos] = useState<number>(0);

    const [pointNosotros, setpPointNosotros] = useState<number>(0);
    const [pointEllos, setPointEllos] = useState<number>(0);

    const carouselRefNosotros = useRef<any>(null);
    const carouselRefEllos = useRef<any>(null);
    const carouselRefPointNosotros = useRef<any>(null);
    const carouselRefPointEllos = useRef<any>(null);
    
    return (
        
        <View
            style={ styles.viewGlobal }
        >

            <Text style={ styles.pointTitle }>Puntos del Juego</Text>

            <View
                style={ styles.view }
            >                    

                <SliderGameNosotros 
                    equipo='Nosotros'
                    data={ PuntosGame }
                    carouselRefNosotros={ carouselRefNosotros }
                    carouselRefEllos={ carouselRefEllos }
                    carouselRefPointNosotros={ carouselRefPointNosotros }
                    setGameNosotros={ setGameNosotros }                    
                />

                <SliderGameEllos 
                    equipo='Ellos'
                    data={ PuntosGame }
                    carouselRefEllos={ carouselRefEllos }
                    carouselRefNosotros={ carouselRefNosotros }
                    carouselRefPointEllos={ carouselRefPointEllos }
                    setGameEllos={ setGameEllos }                    
                />

            </View>

            <Text style={ styles.pointTitle }>Puntos del Partido</Text>

            <View
                style={ styles.view }
            >   

                <SliderPointNosotros 
                    equipo='Nosotros'
                    data={ PuntosPartido }
                    carouselRefNosotros={ carouselRefPointNosotros }
                    carouselRefEllos={ carouselRefPointEllos }
                    setpPointNosotros={ setpPointNosotros }
                />

                <SliderPointEllos
                    equipo='Ellos'
                    data={ PuntosPartido }
                    carouselRefEllos={ carouselRefPointEllos }
                    carouselRefNosotros={ carouselRefPointNosotros }
                    setPointEllos={ setPointEllos }
                />

            </View>

            {

                ( gameNosotros === 3 && gameEllos === 3 )
                &&
                (
                    <PointGold />
                )

            }

            {

                ( 
                    ( pointNosotros === 6 && pointEllos <= 4 || pointNosotros <= 4 && pointEllos === 6 )
                    ||
                    ( pointNosotros === 7 && ( pointEllos === 5 || pointEllos === 6 ) || pointEllos === 7 && ( pointNosotros === 5 || pointNosotros === 6 ) ) 
                )
                &&
                (
                    <MatchWin />
                )

            }

        </View>

    )
}

const styles = StyleSheet.create({
    view: {        
        flexDirection: 'row'
        ,justifyContent: 'center'
        ,alignItems: 'center' 
        ,paddingLeft: 12
    }
    ,viewGlobal: {
        flex: 1
        ,justifyContent: 'center'
        ,alignItems: 'center'
        ,backgroundColor: 'rgba(27, 91, 228, .8)'
        ,paddingBottom: 20
    }
    ,pointTitle: {
        fontSize: 15
        ,fontWeight: 'bold'
    }
});
