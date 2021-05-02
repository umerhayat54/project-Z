import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Svg, {Path} from 'react-native-svg';
import {isIphoneX} from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';
import Home from '../container/Home';
import Main from './Main';
import {COLORS, icons} from '../constants';

const Tab = createBottomTabNavigator();

const TabBarCustom = ({accessibilityState, children, onPress}) => {
  var isSelected = accessibilityState.selected;
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        height: 60,
        backgroundColor: COLORS.white,
      }}
      activeOpacity={1}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
  var isSelected = accessibilityState.selected;

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{flexDirection: 'row', position: 'absolute', top: 0}}>
        <View style={{flex: 1, backgroundColor: COLORS.white}}></View>
        <Svg width={75} height={61} viewBox="0 0 75 61">
          <Path
            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
            fill={COLORS.white}
          />
        </Svg>
        <View style={{flex: 1, backgroundColor: COLORS.white}}></View>
      </View>
      <LinearGradient
        colors={['#7BE495', '#329D9C', '#329D9C']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={{
          top: -40.5,
          justifyContent: 'center',
          alignItems: 'center',
          width: 60,
          height: 60,
          borderRadius: 35,
        }}>
        <TouchableOpacity style={{}} onPress={onPress}>
          {children}
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const CustomTabBar = props => {
  if (isIphoneX()) {
    return (
      <View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 30,
            backgroundColor: COLORS.white,
          }}></View>
        <BottomTabBar {...props.props} />
      </View>
    );
  } else {
    return <BottomTabBar {...props.props} />;
  }
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          left: 0,
          bottom: 0,
          right: 0,
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}
      tabBar={props => <CustomTabBar props={props} />}>
      <Tab.Screen
        name="Home"
        component={Main}
        style={{
          backgroundColor: 'white',
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.home}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.selected : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustom {...props} />,
        }}
      />

      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.selected : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustom {...props} />,
        }}
      />
      <Tab.Screen
        name="Add"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.Plus}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.white,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Like"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.heart}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.selected : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustom {...props} />,
        }}
      />

      <Tab.Screen
        name="User"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.user1}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.selected : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustom {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
