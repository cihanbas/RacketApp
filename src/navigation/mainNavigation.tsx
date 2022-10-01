import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import HomeScreen from '../screens/Home';
import RateUSControl from '../screens/RateUs/RateUsControl';
import RateUSTest from '../screens/RateUs/RateUsTest';
import Settings from '../screens/Settings';
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
                <Stack.Screen name="Settings" component={Settings}
                    options={{
                        headerShown: true
                    }}
                />
                <Stack.Group
                    screenOptions={{
                        presentation: 'transparentModal',
                        animation: 'fade',
                        headerShown: false,
                    }}>
                    <Stack.Screen name="RateUsTest" component={RateUSTest} />
                    <Stack.Screen name="RateUsControl" component={RateUSControl} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export { Navigation };
