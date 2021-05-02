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
import styles from './styles';
export default function Onboarding2({navigation}) {
  renderHeader = () => {
    return (
      <View style={styles.headerParent}>
        <Image
          style={{marginTop: 20}}
          source={require('../../../assets/images/Icons_Main.png')}
        />
        <Text style={styles.headerTxt}>HAVE ACCESS TO THE VACCINE</Text>
        <Text style={styles.hearderTxt2}>
          Get latest news on the covid-19 vaccine And the different locations.
        </Text>
        <Image
          style={styles.image}
          source={require('../../../assets/images/doctor1.png')}
        />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Onboarding3')}
          style={styles.touchOpBtn}>
          <LinearGradient
            colors={['#7BE495', '#329D9C']}
            style={styles.linearGr}>
            <Text style={styles.txtBtn}> Get started</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.logintxtParent}>
          <Text
            style={{
              color: '#68B2A08C',
              fontFamily: 'Montserrat-Medium',
              fontSize: 13,
            }}>
            Already have an account?
          </Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginTxt}>Sign In</Text>
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
