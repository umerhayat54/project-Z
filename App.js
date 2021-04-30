import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';
export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </View>
  );
}
