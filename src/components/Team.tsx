import { Dispatch, SetStateAction } from "react";

import { Text, View } from "react-native";

import { Buttons } from "./";

interface Props {
    setPoint: Dispatch<SetStateAction<number>>;
    setGamePoint: Dispatch<SetStateAction<number>>;
    resetPoint: () => void;
    point: number;
    team: string;
}

export const Team = ({ team , point , setPoint , setGamePoint , resetPoint }: Props) => {    
    return (
        
        <View style={{ alignItems: 'center' }}>

            <Text style={{ fontSize: 30 , fontWeight: 'bold' }}>{ team }</Text>

            <Text style={{ fontSize: 80 ,fontWeight: 'bold' ,color: '#fff' }}>{ point }</Text>

            <Buttons 
                setPoint={ setPoint }
                point={ point }
                setGame={ setGamePoint }
                reset={ resetPoint }
            />

        </View>

    )
}
