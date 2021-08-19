import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import PrivateStack from './PrivateStack';
import {commonNavigationOptions} from './settings';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const {authenticationFlow} = useSelector(state => state.auth);
  const isAuthCompleted = authenticationFlow === 'Completed';
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthCompleted ? (
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={commonNavigationOptions}
          />
        ) : (
          <Stack.Screen
            name="PrivateStack"
            component={PrivateStack}
            options={commonNavigationOptions}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
