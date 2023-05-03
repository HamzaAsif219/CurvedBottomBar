import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Text, View} from 'react-native';
import Upload from './Bottom/Upload';
import NamesSearch from './NamesSearch';
import ParentHome from './ParentHome';
import Signinpage from './Signinpage';
import SignUp from './SignUp';
import Splash from './Splash';
import {EventRegister} from 'react-native-event-listeners';
import React, {useState, useEffect} from 'react';
import theme from './theme/theme';
import themeContext from './theme/themeContext';
import {DefaultTheme} from 'react-native-paper';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', data => {
      setDarkMode(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);
  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signinpage"
            component={Signinpage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Sign Up"
            component={SignUp}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="ParentHome"
            component={ParentHome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NamesSearch"
            component={NamesSearch}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="Upload"
            component={Upload}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
};

export default AppNavigator;
