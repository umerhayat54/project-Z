import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerparent: {justifyContent: 'center', alignItems: 'center', marginTop: 40},
  inputStyles: {
    backgroundColor: 'white',
    height: 85,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'row',
    marginTop: 20,
    shadowColor: '#fff',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 1.16,
    elevation: 3,
  },
  backArrow: {marginTop: 20, width: 18, marginLeft: 20},
  mainIconParent: {
    flex: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconImage: {height: 40, width: 90, marginRight: 30},
  loginTxt: {
    color: '#205072',
    fontFamily: 'Montserrat-Bold',
    marginTop: 20,
    fontSize: 16,
  },
  headerTxt2: {
    color: '#68B2A0',
    marginTop: 20,
    width: 200,
    textAlign: 'center',
    fontSize: 16,
  },
  LoginBtnTxt: {
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
  },
  touchOpBtn: {
    height: 60,
    width: 256,

    borderRadius: 25,
    alignItems: 'center',

    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 40,

    bottom: 20,
  },
  lineargr: {
    height: 60,
    width: '100%',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
