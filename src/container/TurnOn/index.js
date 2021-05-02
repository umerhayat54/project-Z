import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {icons} from '../../constants';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
export default function TurnOn({navigation}) {
  renderheader = () => {
    return (
      <View style={styles.headerparent}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.goBack()}>
            <Image style={styles.backArrow} source={icons.backArrow} />
          </TouchableOpacity>
          <View style={styles.mainIconParent}>
            <Image
              style={styles.IconImage}
              source={require('../../assets/images/Icons_Main.png')}
            />
          </View>
        </View>
      </View>
    );
  };
  renderImageView = () => {
    return (
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <ImageBackground
          style={{
            width: 258,

            alignItems: 'center',
            height: 517,
          }}
          source={icons.iPhone11Outline}>
          <View style={{flexDirection: 'row'}}>
            <ImageBackground
              style={{
                marginTop: 80,
                width: 234,
                alignItems: 'center',
                justifyContent: 'center',
                height: 73,
                marginLeft: 50,
              }}
              source={icons.Rectangle}>
              <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 13}}>
                Project Z
              </Text>
            </ImageBackground>
            <ImageBackground
              style={{
                marginTop: 90,
                width: 73,
                height: 55,
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              source={icons.Rectangle2}>
              <Image
                style={{width: 30.83, alignSelf: 'center', height: 15.9}}
                source={require('../../assets/images/Icons_Main.png')}
              />
            </ImageBackground>
          </View>
        </ImageBackground>
      </View>
    );
  };
  renderMainView = () => {
    return (
      <View style={{flex: 1, width: 200, backgroundColor: 'white'}}>
        <View></View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Tabs')}
          style={styles.touchOpBtn}>
          <LinearGradient
            colors={['#7BE495', '#329D9C']}
            style={styles.lineargr}>
            <Text style={styles.LoginBtnTxt}>Turn On</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="white" />
      {renderheader()}
      {renderImageView()}
      {renderMainView()}
    </View>
  );
}
