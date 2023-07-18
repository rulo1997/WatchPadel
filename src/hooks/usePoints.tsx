import { useState } from "react";

export const usePoints = () => {

    const [point1 , setPoint1] = useState(0);
    const [point2 , setPoint2] = useState(0);
    const [gamePoint1, setGamePoint1] = useState(0);
    const [gamePoint2, setGamePoint2] = useState(0);        

    const resetPoints = () => {

        setPoint1(0);
        setPoint2(0);

    }

    const onResetAll = () => {

        setPoint1( 0 );
        setPoint2( 0 );
        setGamePoint1( 0 );
        setGamePoint2( 0 );

    }

    return {
        //Propiedades
        point1
        ,point2
        ,gamePoint1
        ,gamePoint2

        //Metodos
        ,setPoint1
        ,setPoint2
        ,setGamePoint1
        ,setGamePoint2
        ,resetPoints
        ,onResetAll
    }
}
