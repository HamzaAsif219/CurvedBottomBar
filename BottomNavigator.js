import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView, Image, View, Dimensions} from 'react-native';
import Setting from './Bottom/Setting';
import Profile from './Bottom/Profile';
// import Search from './Search';
import NamesSearch from './NamesSearch';
import Home from './Bottom/Home';
import Upload from './Bottom/Upload';

const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: 'grey',
    //     // borderTopStartRadius: 50,
    //   }}>
    <Bottom.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60, // customize the height of the tab bar
          backgroundColor: '#F48FB1', // customize the background color of the tab bar
          borderTopWidth: 5, // customize the border top width of the tab bar
          borderTopColor: 'purple', // customize the border top color of the tab bar
        },
      }}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: tabIcon => {
            return (
              <Image
                source={require('../assets/homeicon.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: tabIcon.focused ? 'blue' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Search"
        component={NamesSearch}
        options={{
          headerShown: false,
          tabBarIcon: tabIcon => {
            return (
              <Image
                source={require('../assets/search.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: tabIcon.focused ? 'blue' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Upload"
        component={Upload}
        options={{
          headerShown: false,

          tabBarIcon: tabIcon => {
            return (
              <Image
                source={require('../assets/uploadsign.png')}
                style={{
                  width: 40,
                  height: 40,
                  tintColor: tabIcon.focused ? 'blue' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: tabIcon => {
            return (
              <Image
                source={require('../assets/profile.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: tabIcon.focused ? 'blue' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: tabIcon => {
            return (
              <Image
                source={require('../assets/setting.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: tabIcon.focused ? 'blue' : 'black',
                }}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
    // </View>
  );
};

export default BottomNavigator;
