import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from '../(tabs)/login';
import IndexScreen from '../(tabs)/index';
import DailyParkingForm from '../(tabs)/DailyParkingForm';
import ReservedParkingForm from '../(tabs)/ReservedParkingForm';
import SeasonalParkingForm from '../(tabs)/SeasonalParkingForm';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="DailyParkingForm" component={DailyParkingForm} />
        <Stack.Screen name="ReservedParkingForm" component={ReservedParkingForm} />
        <Stack.Screen name="SeasonalParkingForm" component={SeasonalParkingForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;