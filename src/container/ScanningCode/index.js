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
                width: 200,
              }}>
              Scanning Code Successful, Williams
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
        }}>
        <Image source={icons.scan} />

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: COLORS.verify,
            position: 'absolute',
            padding: 20,
            paddingHorizontal: 50,
            borderRadius: 15,
            bottom: 10,
          }}>
          <Text style={{color: COLORS.white, fontSize: 15}}>SCAN</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#E0ECDE" />
      {renderheaderDetail()}
      {renderMain()}
    </View>
  );
}
