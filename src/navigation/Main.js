import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GenerateCode from '../container/GenerateCode';
import TestReport from '../container/TestReport';
import ScanningCode from '../container/ScanningCode';
import Home from '../container/Home';
const Stack = createStackNavigator();
export default function Main() {
  return (
    <Stack.Navigator initialRouteName={Home} headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="GenerateCode" component={GenerateCode} />
      <Stack.Screen name="TestReport" component={TestReport} />
      <Stack.Screen name="ScanningCode" component={ScanningCode} />
    </Stack.Navigator>
  );
}
