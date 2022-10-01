import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import HomeScreen from '../screens/Home';
import RateUs from '../screens/RateUs';
import { StackNavigationType } from './type';

const Stack = createNativeStackNavigator<StackNavigationType>();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right',
                    gestureEnabled: true,
                }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Group
                    screenOptions={{
                        presentation: 'transparentModal',
                        animation: 'fade',
                        headerShown: false,
                    }}>
                    <Stack.Screen name="RateUs" component={RateUs} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export { Navigation }