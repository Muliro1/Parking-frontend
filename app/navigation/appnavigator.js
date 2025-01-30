import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from '../(tabs)/login';
import IndexScreen from '../(tabs)/index';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Index" component={IndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;