import React, {useState, useEffect} from 'react';
import {
  Alert,
  Animated,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Bottom/Home';
import NamesSearch from './NamesSearch';

import SearchBottom from './BottomBarScreens/SearchBottom';
import {Image} from 'react-native';
import Profile from './Bottom/Profile';
import Setting from './Bottom/Setting';
import Upload from './Bottom/Upload';

const Screen1 = () => {
  return <Home />;
};

const Screen2 = () => {
  return <NamesSearch />;
};
const Screen3 = () => {
  return <Profile />;
};
const Screen4 = () => {
  return <Setting />;
};

export default function App() {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = null;

    switch (routeName) {
      case 'Home':
        icon = require('../abc/assets/homeicon.png');
        break;
      case 'Search':
        icon = require('../abc/assets/search.png');
        break;
      case 'Profile':
        icon = require('../abc/assets/profile.png');
        break;
      case 'Setting':
        icon = require('../abc/assets/setting.png');
        break;
    }

    return (
      <Image
        source={icon}
        style={{
          width: 25,
          height: 25,

          tintColor: routeName === selectedTab ? 'blue' : 'grey',
        }}
      />
    );
  };

  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    // <NavigationContainer>
    <CurvedBottomBar.Navigator
    screenOptions={{
      keyboardHidesTabBar: true,
    }}
      type="UP"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={55}
      circleWidth={50}
      bgColor="red"
      initialRouteName="Home"
      borderTopLeftRight
      renderCircle={({selectedTab, navigate}) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate('Upload')}>
            <Image
              source={require('../abc/assets/uploadsign.png')}
              style={{
                width: 40,
                height: 40,

                tintColor: selectedTab ? 'grey' : 'blue',
              }}
            />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
      
      >
      <CurvedBottomBar.Screen
        name="Home"
        position="LEFT"
        component={() => <Screen1 />}
      />
      <CurvedBottomBar.Screen
        name="Search"
        component={() => <Screen2 />}
        position="LEFT"
      />
      <CurvedBottomBar.Screen
        name="Profile"
        component={() => <Screen3 />}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name="Setting"
        component={() => <Screen4 />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
    // </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 18,
    
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
  screen3: {
    flex: 1,
    backgroundColor: 'red',
  },
  screen4: {
    flex: 1,
    backgroundColor: 'grey',
  },
});
