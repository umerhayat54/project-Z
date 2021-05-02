import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {COLORS, icons} from '../../constants';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import style from './style';
export default function ScanningCode({navigation}) {
  renderheaderDetail = () => {
    return (
      <View style={{borderBottomLeftRadius: 40, backgroundColor: '#E0ECDE'}}>
        <View
          style={{
            backgroundColor: '#E0ECDE',
            margin: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.goBack()}>
              <Image
                style={{marginTop: 20, marginLeft: 10}}
                source={icons.backArrow}
              />
            </TouchableOpacity>
            <Image
              style={{
                position: 'absolute',

                bottom: 0,
                right: -50,
                top: -8,
              }}
              source={icons.Avatar}
            />
          </View>
        </View>
        <View style={{margin: 20, marginTop: 0}}>
          <View style={{marginTop: 20, margin: 30}}>
            <Text
              style={{
                color: '#205072',
                fontSize: 16,
                textAlign: 'left',

                fontFamily: 'Montserrat-Bold',
              }}>
              Scanning Code Successful,
            </Text>
            <Text
              style={{
                color: '#205072',
                fontSize: 24,
                textAlign: 'left',

                fontFamily: 'Montserrat-Bold',
              }}>
              Williams
            </Text>
          </View>
        </View>
      </View>
    );
  };

  renderMain = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          marginBottom: 80,
        }}>
        {/* <Image style={{marginTop: 30}} source={icons.scan} /> */}
        <QRCodeScanner
          cameraStyle={style.cameraStyle}

          // topViewStyle={{backgroundColor:'red'}}
          // bottomViewStyle={{backgroundColor:'red'}}
          // onRead={()=>this.onSucc()}
          // flashMode={RNCamera.Constants.FlashMode.torch}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: COLORS.verify,

            padding: 20,
            marginTop: 90,
            paddingHorizontal: 50,
            borderRadius: 15,
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontFamily: 'Montserrat-Bold',
              fontSize: 15,
            }}>
            SCAN
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#E0ECDE" />
      {renderheaderDetail()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderMain()}
      </ScrollView>
    </View>
  );
}
