import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import {COLORS, icons} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from 'react-native/Libraries/NewAppScreen';
export default function Home({navigation}) {
  renderheader = () => {
    return <View style={{padding: 20, backgroundColor: '#E0ECDE'}}></View>;
  };
  renderheaderDetail = () => {
    return (
      <View style={{borderBottomLeftRadius: 40, backgroundColor: '#E0ECDE'}}>
        <View
          style={{
            backgroundColor: '#E0ECDE',
            margin: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image
                style={{marginTop: 20, marginLeft: 10}}
                source={require('../../assets/icon/menu.png')}
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
                fontSize: 24,
                textAlign: 'left',
                width: 200,
              }}>
              Good Evening Williams
            </Text>
            <Text
              style={{
                color: '#205072',
                marginTop: 10,
                fontSize: 13,
                textAlign: 'left',
              }}>
              You can now have access to your covid-19 result anytime, anywhere.
              Also you can….
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginLeft: 40}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#205072',
                borderRadius: 20,
                padding: 10,
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 8,
                  textTransform: 'uppercase',
                }}>
                more details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#329D9C',
                borderRadius: 20,
                padding: 10,
                paddingHorizontal: 20,

                marginLeft: 20,
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 8,
                  textTransform: 'uppercase',
                }}>
                view your profile
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={{marginLeft: 20, marginTop: 30, fontSize: 13}}>
            Help in the fight against Covid-19…
          </Text>
        </View>
      </View>
    );
  };

  renderMain = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row', margin: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#329D9C',
              borderRadius: 20,
              padding: 30,
              paddingHorizontal: 30,
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 12,
                textTransform: 'uppercase',
              }}>
              Generate CODE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#329D9C',
              borderRadius: 20,
              padding: 30,
              paddingHorizontal: 30,

              marginLeft: 20,
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 12,

                textTransform: 'uppercase',
              }}>
              SCAN CODE
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 10}}>
          <View style={{flex: 3}}>
            <View
              style={{
                backgroundColor: '#CFFCDD',
                borderRadius: 40,
                height: 80,
                width: 80,
              }}></View>
            <Text style={{color: '#0D8E53', fontSize: 12}}>Wash Hands</Text>
          </View>
          <View style={{flex: 3}}>
            <View
              style={{
                backgroundColor: '#fafafa',
                borderRadius: 40,
                height: 80,
                width: 80,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image style={{width: 50, height: 50}} source={icons.row2} />
            </View>
            <Text style={{color: '#0D8E53', fontSize: 12}}>Use Masks</Text>
          </View>
          <View style={{flex: 3}}>
            <View
              style={{
                backgroundColor: '#fafafa',
                borderRadius: 40,
                height: 80,
                width: 80,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image style={{width: 60, height: 60}} source={icons.row3} />
            </View>
            <Text style={{color: '#0D8E53', fontSize: 12}}>
              Clean Disinfect
            </Text>
          </View>
        </View>

        <LinearGradient
          colors={['#60BE93', '#1B8D59', '#1B8D59']}
          style={{
            width: '90%',
            height: 150,
            marginTop: 20,
            marginBottom: 60,
            borderRadius: 30,
          }}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                height: 150,

                left: 10,
                width: 190,
              }}
              source={icons.help}
            />
            <View style={{position: 'absolute', right: 10, top: 30}}>
              <Text
                style={{
                  color: Colors.white,
                  width: 150,
                  fontSize: 17,
                  textAlign: 'left',
                }}>
                Dial 999 for Medical Help!
              </Text>
              <Text
                style={{
                  color: '#1BAF88',
                  width: 150,
                  fontSize: 12,
                  textAlign: 'left',
                  marginTop: 10,
                }}>
                If any symptoms appear
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {renderheaderDetail()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderMain()}
      </ScrollView>
    </View>
  );
}
