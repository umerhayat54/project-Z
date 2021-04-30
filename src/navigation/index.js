import React from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  Image,
  View,
  Text,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Onboarding1 from '../container/Onboarding/Onboarding1';
import Onboarding2 from '../container/Onboarding/Onboarding2';
import Onboarding3 from '../container/Onboarding/Onboarding3';
import Login from '../container/Login';
import Signup from '../container/Signup';
import Tabs from './Tabs';
import GenerateCode from '../container/GenerateCode';
import TestReport from '../container/TestReport';
import ScanningCode from '../container/ScanningCode';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName={Onboarding1} headerMode="none">
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Onboarding2" component={Onboarding2} />
      <Stack.Screen name="Onboarding3" component={Onboarding3} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="GenerateCode" component={GenerateCode} />
      <Stack.Screen name="TestReport" component={TestReport} />
      <Stack.Screen name="ScanningCode" component={ScanningCode} />
    </Stack.Navigator>
  );
}
