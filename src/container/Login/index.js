import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

import {icons} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function Login({navigation}) {
  const [phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
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
        <Text style={styles.loginTxt}>Login</Text>
        <Text style={styles.headerTxt2}>
          Enter your login details to access your account
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
            style={{flex: 9}}
            placeholder="Password"
            onChange={password => setPassword(password)}
            secureTextEntry={hidePass ? true : false}
            value={Password}></TextInput>
          <Icon
            name={hidePass ? 'eye-slash' : 'eye'}
            size={15}
            color="grey"
            style={{
              flex: 1,
              alignSelf: 'center',
            }}
            onPress={() => setHidePass(!hidePass)}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Signup')}
          style={styles.touchOpBtn}>
          <LinearGradient
            colors={['#7BE495', '#329D9C']}
            style={styles.lineargr}>
            <Text style={styles.LoginBtnTxt}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="white" />
      {renderheader()}
      {renderMain()}
    </View>
  );
}
