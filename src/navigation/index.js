import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Onboarding1 from '../container/Onboarding/Onboarding1';
import Onboarding2 from '../container/Onboarding/Onboarding2';
import Onboarding3 from '../container/Onboarding/Onboarding3';
import Login from '../container/Login';
import Signup from '../container/Signup';
import Tabs from './Tabs';
import TurnOn from '../container/TurnOn';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName={Onboarding1} headerMode="none">
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Onboarding2" component={Onboarding2} />
      <Stack.Screen name="Onboarding3" component={Onboarding3} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="TurnOn" component={TurnOn} />
    </Stack.Navigator>
  );
}
