import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PointsScreen } from '../screens/PointsScreen';
import { SelectOptionScreen } from '../screens/SelectOptionScreen';
import { CreateRoomScreen } from '../screens/CreateRoomScreen';
import { JoinRoomScreen } from '../screens/JoinRoomScreen';
import { PointsScreen1 } from '../screens/PointsScreen1';

export type RootStackParamList = {
    HomeScreen: undefined;
    PointsScreen: undefined;
    SelectOptionScreen: undefined;
    CreateRoomScreen: undefined;
    JoinRoomScreen: undefined;
    PointsScreen1: undefined;
  };

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="HomeScreen"
    >

        <Stack.Screen name="HomeScreen" component={  HomeScreen } />
        {/* <Stack.Screen name="PointsScreen" component={ PointsScreen } /> */}
        <Stack.Screen 
          name="PointsScreen1" 
          options={{
            orientation: 'landscape'
          }}
          component={ PointsScreen1 } 
        />        
        <Stack.Screen name="SelectOptionScreen" component={ SelectOptionScreen } />
        <Stack.Screen name="CreateRoomScreen" component={ CreateRoomScreen } />
        <Stack.Screen name="JoinRoomScreen" component={ JoinRoomScreen } />        

    </Stack.Navigator>

  )
}
