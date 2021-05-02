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

export default function TestReport({navigation}) {
  renderHeader = () => {
    return (
      <View
        style={{
          backgroundColor: '#E0ECDE',
        }}>
        <View
          style={{
            backgroundColor: '#E0ECDE',
            margin: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}>
              <Image
                activeOpacity={0.7}
                style={{marginTop: 20, marginBottom: 20, marginLeft: 10}}
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
      </View>
    );
  };
  renderheaderDetail = () => {
    return (
      <View
        style={{
          borderBottomLeftRadius: 40,
          marginBottom: 80,
          backgroundColor: '#E0ECDE',
        }}>
        <View style={{margin: 20, marginTop: 0}}>
          <View style={{marginTop: 20, margin: 30}}>
            <Text
              style={{
                color: '#205072',
                fontSize: 13,
                textAlign: 'left',
                fontFamily: 'Montserrat-Bold',
              }}>
              Covid-19 rapid test
            </Text>

            <Text
              style={{
                color: '#205072',
                fontSize: 16,
                textAlign: 'left',
                fontFamily: 'Montserrat-Bold',
              }}>
              COVID-19 TEST RESULT
            </Text>
            <Text
              style={{
                color: '#205072',
                fontSize: 13,
                textAlign: 'left',
                fontFamily: 'Montserrat-Bold',
              }}>
              Federal Government Approved
            </Text>
          </View>
        </View>
        <Image
          style={{
            alignItems: 'center',
            width: 30,
            height: 30,
            marginLeft: 30,
          }}
          source={icons.varis}
        />
        <Image
          style={{
            alignItems: 'center',
            alignSelf: 'center',
          }}
          source={icons.code}
        />
        <View style={{marginLeft: 40, marginBottom: 10, margin: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 8}}>
              <Text
                style={{
                  margin: 10,
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 13,
                  color: '#39576C',
                }}>
                DATE ISSUED: 23/03/2021
              </Text>
              <Text
                style={{
                  margin: 10,
                  marginTop: 0,
                  fontSize: 13,
                  color: '#39576C',
                  fontFamily: 'Montserrat-Bold',
                }}>
                EXPIRES: 01/04/2021
              </Text>
            </View>
            <Image style={{flex: 2, height: 60}} source={icons.click} />
          </View>
        </View>

        <View style={{marginLeft: 50, marginBottom: 10, marginTop: 0}}>
          <Text
            style={{
              fontSize: 13,
              fontFamily: 'Montserrat-Bold',
              color: COLORS.black,
            }}>
            DETAILS{' '}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text
              style={{
                fontSize: 13,
                fontFamily: 'Montserrat-Bold',
                flex: 0.5,
                color: COLORS.black,
              }}>
              Name
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: 'Montserrat-Bold',
                flex: 0.5,
                color: COLORS.black,
              }}>
              Williams
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              fontFamily: 'Montserrat-Bold',
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 13,
                fontFamily: 'Montserrat-Bold',
                flex: 0.5,
                color: COLORS.black,
              }}>
              Result
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: 'Montserrat-Bold',
                flex: 0.5,
                color: COLORS.black,
              }}>
              Navigative
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text
              style={{
                fontSize: 13,
                fontFamily: 'Montserrat-Bold',
                flex: 0.5,
                color: COLORS.black,
              }}>
              Code
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: 'Montserrat-Bold',
                flex: 0.5,
                color: COLORS.black,
              }}>
              1010ASDF
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text
              style={{
                fontSize: 13,
                fontFamily: 'Montserrat-Bold',
                flex: 0.5,
                color: COLORS.black,
              }}>
              Date
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: 'Montserrat-Bold',
                flex: 0.5,
                color: COLORS.black,
              }}>
              23/03/2021
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#E0ECDE" />
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderheaderDetail()}
      </ScrollView>
    </View>
  );
}
