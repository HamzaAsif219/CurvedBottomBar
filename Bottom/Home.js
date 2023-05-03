import {useContext} from 'react';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import themeContext from '../theme/themeContext';
import {Button} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {signOut} from '@react-native-firebase/auth';
import {app} from '@react-native-firebase/app';

const Home = () => {
  const navigation = useNavigation();

  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.replace('Signinpage');
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => logout()}>
          <Text
           // source={require('../assets/Logout.jpg')}
            style={{width: 50, height: 20, marginRight: 1,marginTop:25,borderWidth:0.4,color: theme.color,fontWeight:'500'}}>Logout</Text>
         <Text />
        </TouchableOpacity>
      ),
    });
  }, []);

  const theme = useContext(themeContext);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{color: theme.color}}
        onPress={() => {
          navigation.openDrawer();
        }}>
       This is Home page!
      </Text>
    </View>
  );
};

export default Home;
