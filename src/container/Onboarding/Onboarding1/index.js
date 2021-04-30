import React from 'react';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default function Onboarding1({navigation}) {
  renderHeader = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{marginTop: 20}}
          source={require('../../../assets/images/Icons_Main.png')}
        />
        <Text
          style={{
            color: '#205072',
            fontSize: 20,
            alignItems: 'center',
            marginTop: 20,
          }}>
          COVID-19 EMERGENCY
        </Text>
        <Text
          style={{
            color: '#68B2A0',
            fontSize: 12,
            alignItems: 'center',
            marginTop: 20,
            width: '80%',
            textAlign: 'center',
          }}>
          Have access to the quick response team Of the covid-19 team
        </Text>
        <Image
          style={{width: 300, height: 450, marginTop: 20, marginBottom: 100}}
          source={require('../../../assets/images/Doctor.png')}
        />
        <LinearGradient
          colors={['#7BE495', '#329D9C']}
          style={{
            height: 60,
            width: '90%',
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',

            position: 'absolute',
            left: 0,

            bottom: 60,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Onboarding2')}>
            <Text style={{color: 'white', fontSize: 13}}> Get started</Text>
          </TouchableOpacity>
        </LinearGradient>
        {/* <ImageBackground
          style={{
            width: '110%',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 20,
            height: 90,
          }}
          source={require('../../../assets/images/ColourBG.png')}>
          <TouchableOpacity
            style={{
              position: 'absolute',

              right: 0,
              left: 0,
              bottom: 50,
            }}
            onPress={() => navigation.navigate('Onboarding2')}>
            <Text
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
              }}>
              Get started
            </Text>
          </TouchableOpacity>
        </ImageBackground> */}

        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <Text style={{color: '#68B2A08C'}}>Already have an account?</Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 12,
                color: '#205072',
                marginLeft: 10,
                alignItems: 'center',
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderHeader()}
      </ScrollView>
    </View>
  );
}
