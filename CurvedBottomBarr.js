import React, {useState, useRef} from 'react';
import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';

//import {NavigationContainer} from '@react-navigation/native';
import UploadBottom from './BottomBarScreens/UploadBottom';

import HomeBottom from './BottomBarScreens/HomeBottom';

import SearchBottom from './BottomBarScreens/SearchBottom';
import ProfileBottom from './BottomBarScreens/ProfileBottom';
import Home from './Bottom/Home';
import NamesSearch from './NamesSearch';
import Profile from './Bottom/Profile';
import Upload from './Bottom/Upload';
import Setting from './Bottom/Setting';
import {TabView} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

StatusBar.setBarStyle('dark-content');

const Curved = props => {
  const ref = useRef();
  const [type, setType] = useState('down');

  const onClickButton = () => {
    if (type === 'up') {
      setType('down');
    } else {
      setType('up');
    }
  };

  const _renderIcon = (routeName, selectedTab) => {
    let image = '';

    switch (routeName) {
      case 'Home':
        image = require('../abc/assets/homeicon.png');
        break;
      case 'Search':
        image = require('../abc/assets/search.png');
        break;
      case 'Upload':
        image = require('../abc/assets/uploadsign.png');
        break;
      case 'Profile':
        image = require('../abc/assets/profile.png');
        break;
      case 'Setting':
        image = require('../abc/assets/setting.png');
        break;
    }

    return (
      <Icon
        name={image}
        size={13}
        color={routeName === selectedTab ? '#FF3030' : 'gray'}
      />
    );
  };

  return (
    <View style={styles.container}>
      <CurvedBottomBar.Navigator
        ref={ref}
        type={type}
        height={60}
        circleWidth={100}
        bgColor="red"
        borderTopLeftRight={true}
        strokeWidth={2}
        swipeEnabled={true}
        initialRouteName="title1"
        renderCircle={({selectedTab, navigate}) => (
          <TouchableOpacity
            style={[type === 'up' ? styles.btnCircle : styles.btnCircleUp]}
            onPress={onClickButton}>
            <Image
              source={require('../abc/assets/uploadsign.png')}
              style={{
                width: 40,
                height: 40,
                //tintColor: tabIcon.focused ? 'blue' : 'black',
              }}
            />
          </TouchableOpacity>
        )}
        tabBar={({routeName, selectedTab, navigate}) => {
          return (
            <TouchableOpacity
              onPress={() => navigate(routeName)}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
          );
        }}>
        <CurvedBottomBar.Screen
          name="Home"
          position="left"
          component={({navigate}) => (
            <View style={{backgroundColor: '#BFEFFF', flex: 1}} />
          )}
        />
        <CurvedBottomBar.Screen
          name="Search"
          component={({navigate}) => (
            <View style={{backgroundColor: '#FFEBCD', flex: 1}} />
          )}
          position="left"
        />

        <CurvedBottomBar.Screen
          name="Profile"
          position="right"
          component={({navigate}) => (
            <View style={{backgroundColor: '#BFEFFF', flex: 1}} />
          )}
        />
        <CurvedBottomBar.Screen
          name="Setting"
          component={({navigate}) => (
            <View style={{backgroundColor: '#FFEBCD', flex: 1}} />
          )}
          position="right"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};

export default Curved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    top: 10,
    // bottom: 28
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    top: 20,
    //bottom: 18,
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
    tintColor: '#48CEF6',
  },
  img: {
    width: 30,
    height: 30,
  },
});
