import React, {useState, useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {EventRegister} from 'react-native-event-listeners';
import {Text, View, Switch} from 'react-native';
import themeContext from '../theme/themeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Setting = () => {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('darkModeEnabled').then((value) => {
      if (value === 'true') {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    });
  }, []);

  const handleToggleSwitch = (value) => {
    setDarkMode(value);
    AsyncStorage.setItem('darkModeEnabled', value.toString());
    EventRegister.emit('ChangeTheme', value);
  }

  return (
    <View
      style={[
        {flex: 1, justifyContent: 'center', alignItems: 'center'},
        {backgroundColor: theme.backgroundColor},
      ]}>
      <Text
        style={{color: theme.color}}>
        This is Setting. Dark/Light Mode
      </Text>
      <Switch
        value={darkMode}
        onValueChange={handleToggleSwitch}
      />
    </View>
  );
};

export default Setting;
