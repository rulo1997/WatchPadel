import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Buttons = () => {
    return (
        
        <View style={{ justifyContent: 'space-between' }}>

            <TouchableOpacity activeOpacity={ .7 }>

                <Icon 
                    name="add-circle-outline"
                    size={ 60 }
                    color="#ffff"
                />

            </TouchableOpacity>

            <TouchableOpacity activeOpacity={ .7 }>

                <Icon 
                    name="remove-circle-outline"
                    size={ 60 }
                    color="#ffff"
                />

            </TouchableOpacity>

        </View>

    )
}
