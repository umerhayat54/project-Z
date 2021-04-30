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
export default function Onboarding3({navigation}) {
  renderHeader = () => {
    return (
      <View style={styles.headerParent}>
        <Image
          style={{marginTop: 20}}
          source={require('../../../assets/images/Icons_Main.png')}
        />
        <Text style={styles.headerTxt}>YOUR RECORDS ARE DIGITALIZE</Text>
        <Text style={styles.hearderTxt2}>
          Have access to your result anytime, anywhere
        </Text>
        <Image
          style={styles.image}
          source={require('../../../assets/images/onborading3.png')}
        />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Login')}
          style={styles.touchOpBtn}>
          <LinearGradient
            colors={['#7BE495', '#329D9C']}
            style={styles.linearGr}>
            <Text style={styles.txtBtn}> Get started</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.logintxtParent}>
          <Text style={{color: '#68B2A08C'}}>Already have an account?</Text>
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
