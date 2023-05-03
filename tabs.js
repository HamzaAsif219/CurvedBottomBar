import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeBottom from './BottomBarScreens/HomeBottom';
import SearchBottom from './BottomBarScreens/SearchBottom';
import UploadBottom from './BottomBarScreens/UploadBottom';
import ProfileBottom from './BottomBarScreens/ProfileBottom';
import SettingBottom from './BottomBarScreens/SettingBottom';

const Tab =createBottomTabNavigator();
const Tabs=()=> {
    return (
       <Tab.Navigator screenOptions={{
        tabBarStyle: {
          height: 100, // customize the height of the tab bar
          backgroundColor: 'grey', // customize the background color of the tab bar
           borderTopWidth: 1, // customize the border top width of the tab bar
        borderTopColor: '#F2F2F2', // customize the border top color of the tab bar
        
        },
      }}>

        <Tab.Screen name='Home' component={HomeBottom}/>
        <Tab.Screen name='Search' component={SearchBottom}/>
        <Tab.Screen name='Upload' component={UploadBottom}/>
        <Tab.Screen name='Profile' component={ProfileBottom}/>
        <Tab.Screen name='Setting' component={SettingBottom}/>
       
       </Tab.Navigator>
    );
}

export default Tabs;
