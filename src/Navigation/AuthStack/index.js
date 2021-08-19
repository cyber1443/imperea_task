import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../Login';
import {commonNavigationOptions} from '../settings';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={commonNavigationOptions}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
