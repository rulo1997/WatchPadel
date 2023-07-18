import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {

    const opacity = useRef( new Animated.Value(0) ).current;
    const position = useRef( new Animated.Value(0) ).current;

    const fadeIn = ( duration: number = 300 ) => {

        Animated.timing(
            opacity
            ,{
                toValue: 1
                ,duration
                ,useNativeDriver: true
            }
        ).start();

    }

    const startMoving = ( value: number ) => {        

        Animated.timing(
            position
            ,{
                toValue: value
                ,duration: 900
                ,useNativeDriver: true
                ,easing: Easing.bounce
            }
        ).start();

    }

    return {
        position
        ,startMoving
        ,fadeIn
    }
}
