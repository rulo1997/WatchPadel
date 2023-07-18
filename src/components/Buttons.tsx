import { SetStateAction, Dispatch } from 'react';

import { View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    setPoint: Dispatch<SetStateAction<number>>;
    setGame: Dispatch<SetStateAction<number>>;
    reset: () => void;
    point: number;
}

export const Buttons = ({ setPoint , point , setGame , reset }: Props) => {

    const onAddPoint = () => {

        if( point === 30 )
        {
            setPoint( point => point  + 10 );
            return;
        }
        else if( point === 40 )
        {
            reset();
            setGame( game => game + 1 )
            return;
        }

        setPoint( point => point  + 15 );

    }

    const onRemovePoint = () => {

        if( point === 0 ) return;

        if( point === 40 )
        {
            setPoint( point => point  - 10 );
            return;
        } 

        setPoint( point => point  - 15 );

    }

    return (
        
        <View style={{ flexDirection: 'row' , width: '50%' , justifyContent: 'space-evenly' }}>

            <TouchableOpacity 
                activeOpacity={ .5 }
                onPress={ onAddPoint }
            >

                <Icon 
                    name="add-circle-outline"
                    size={ 60 }
                    color="#ffff"                    
                />

            </TouchableOpacity>

            <TouchableOpacity 
                activeOpacity={ .5 }
                onPress={ onRemovePoint }
            >

                <Icon 
                    name="remove-circle-outline"
                    size={ 60 }
                    color="#ffff"
                />

            </TouchableOpacity>

        </View>

    )
}
