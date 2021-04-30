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
export default function Onboarding3({navigation}) {
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
            width: 200,
            textAlign: 'center',
          }}>
          YOUR RECORDS ARE DIGITALIZE
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
          Have access to your result anytime, anywhere
        </Text>
        <Image
          style={{width: 300, height: 350, marginTop: 20, marginBottom: 100}}
          source={require('../../../assets/images/onborading3.png')}
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
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: 'white', fontSize: 13}}> Get started</Text>
          </TouchableOpacity>
        </LinearGradient>

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
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderHeader()}
      </ScrollView>
    </View>
  );
}
