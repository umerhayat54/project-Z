import React, {useState} from 'react';
import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {icons} from '../../constants';
export default function SignUp({navigation}) {
  const [phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

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
        <Text style={styles.loginTxt}>Sign Up</Text>
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
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Tabs')}
          style={styles.touchOpBtn}>
          <LinearGradient
            colors={['#7BE495', '#329D9C']}
            style={styles.lineargr}>
            <Text style={styles.LoginBtnTxt}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>
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
