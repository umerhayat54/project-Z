import React, {useState} from 'react';
import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function SignUp({navigation}) {
  const [phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  renderheader = () => {
    return (
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <AntDesign
              name="arrowleft"
              style={{marginLeft: 20}}
              color={'black'}
              size={30}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 8,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{height: 40, width: 90, marginRight: 30}}
              source={require('../../assets/images/Icons_Main.png')}
            />
          </View>
        </View>
        <Text style={{color: '#205072', marginTop: 20, fontSize: 16}}>
          Sign Up
        </Text>
      </View>
    );
  };

  renderMain = () => {
    return (
      <View style={{flex: 1}}>
        <View style={styles.inputStyles}>
          <TextInput
            style={{flex: 8}}
            placeholder="phone"
            onChange={phone => setPhone(phone)}
            keyboardType="phone-pad"
            value={phone}></TextInput>
        </View>
        <View style={styles.inputStyles}>
          <TextInput
            style={{flex: 8}}
            placeholder="Email"
            onChange={email => setEmail(email)}
            keyboardType="email-address"
            value={Email}></TextInput>
        </View>

        <View style={styles.inputStyles}>
          <TextInput
            style={{flex: 8}}
            placeholder="Password"
            onChange={password => setPassword(password)}
            secureTextEntry
            value={Password}></TextInput>
        </View>
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

            bottom: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
            <Text style={{color: 'white', fontSize: 13}}>Sign Up</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      {renderheader()}
      {renderMain()}
    </View>
  );
}
