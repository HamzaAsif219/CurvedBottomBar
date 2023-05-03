import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeBottom from './BottomBarScreens/HomeBottom';
import SearchBottom from './BottomBarScreens/SearchBottom';
import UploadBottom from './BottomBarScreens/UploadBottom';
import ProfileBottom from './BottomBarScreens/ProfileBottom';
import SettingBottom from './BottomBarScreens/SettingBottom';
import { Image } from 'react-native';

const BottomBar=()=> {
  const Bottom=createBottomTabNavigator();

  return (
   <NavigationContainer>
   


    <Bottom.Navigator>
      <Bottom.Screen name='Home' component={HomeBottom}   options={{
      tabBarIcon: tabIcon => {
              return (
                <Image
                  source={require('../abc/assets/homeicon.png')}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: tabIcon.focused ? 'blue' : 'black',
                  }}
                />
              );
            },
      }}/>

      <Bottom.Screen name='Search' component={SearchBottom}
          options={{
      tabBarIcon: tabIcon => {
              return (
                <Image
                  source={require('../abc/assets/search.png')}
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
      <Bottom.Screen name='Upload' component={UploadBottom} 
        options={{
      tabBarIcon: tabIcon => {
              return (
                <Image
                  source={require('../abc/assets/uploadsign.png')}
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
      <Bottom.Screen name='Profile' component={ProfileBottom}
        options={{
      tabBarIcon: tabIcon => {
              return (
                <Image
                  source={require('../abc/assets/profile.png')}
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
      <Bottom.Screen name='Setting' component={SettingBottom}
        options={{
      tabBarIcon: tabIcon => {
              return (
                <Image
                  source={require('../abc/assets/setting.png')}
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
   
   </NavigationContainer>
  );
}

export default BottomBar;