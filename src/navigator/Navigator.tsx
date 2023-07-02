import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PointsScreen } from '../screens/PointsScreen';

export type RootStackParamList = {
    HomeScreen: undefined;
    PointsScreen: undefined;
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
        <Stack.Screen name="PointsScreen" component={ PointsScreen } />

    </Stack.Navigator>

  )
}
