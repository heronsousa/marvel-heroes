import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home';
import Details from './pages/Details';

const App = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <App.Navigator screenOptions={{ headerShown: false }}>
                <App.Screen name={'Home'} component={Home}/>
                <App.Screen name={'Details'} component={Details}/>
            </App.Navigator>
        </NavigationContainer>
    )
}
