import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/Splash';
import Auth from '../screens/Auth';
import Dashboard from '../screens/Dashboard';

const Stack = createStackNavigator();


const AppNavigation = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={SplashScreen} options={{headerShown: false}} />
            <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}} />
            <Stack.Screen name="Dashboard" component={Dashboard} options={({ route }) => ({ headerTitle: getHeaderTitle(route),}), {headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default AppNavigation;