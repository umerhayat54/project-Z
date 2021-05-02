import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerParent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt: {
    color: '#205072',
    fontSize: 20,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
  },
  hearderTxt2: {
    color: '#68B2A0',
    fontSize: 12,
    alignItems: 'center',
    marginTop: 20,
    width: '60%',

    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
  },
  image: {width: 297, height: 297, marginTop: 20, marginBottom: 100},
  touchOpBtn: {
    height: 60,
    width: '90%',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    left: 0,

    bottom: 60,
  },
  linearGr: {
    height: 60,
    width: '100%',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtn: {
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
  },
  logintxtParent: {flexDirection: 'row', marginBottom: 20},
  loginTxt: {
    fontSize: 12,
    color: '#205072',
    marginLeft: 10,
    alignItems: 'center',
    fontFamily: 'Montserrat-Medium',
  },
});
