import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {Text, View} from 'react-native';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Signinpage');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 100, height: 100}}
        source={require('./assets/logo.png')}
      />
      <Text>splash screen</Text>
    </View>
  );
};
export default Splash;
