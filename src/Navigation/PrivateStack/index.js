import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Feed from '../../Feed';
import {commonNavigationOptions} from '../settings';

const Stack = createStackNavigator();

const PrivateStack = () => {
  return (
    <Stack.Navigator
      screenOptions={commonNavigationOptions}
      initialRouteName="Feed">
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
};

export default PrivateStack;
