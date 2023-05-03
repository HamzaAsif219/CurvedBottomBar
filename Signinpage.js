import React, { useEffect, useState } from 'react';
import app from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

function Hello(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userSignin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('user logged In');
        props.navigation.navigate('ParentHome');
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/user-not-found') {
          Alert.alert(
            'Please enter correct email and password or create an account',
          );
        } else {
          alert('Please enter correct email and password or create account');
        }
      });
  };

  const resetPassword = () => {
    if (email != null) {
      auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          Alert.alert('Password reset email has been sent successfully');
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    } else {
      Alert.alert('Please enter a valid email');
    }
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        props.navigation.navigate('ParentHome');
      }
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.background}>
      <Image source={require('./assets/userlogo.jpg')} />
      <View style={styles.usernametext}>
        <TextInput
          placeholder="Username"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.password}>
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          underlineColorAndroid="transparent"
        />
      </View>

      <Text
        style={{ textDecorationLine: 'underline', top: 10 }}
        onPress={() => {
          resetPassword();
        }}>
        Forgotten password?
      </Text>

      <View style={[styles.login, styles.direction]}>
        <Text
          style={{ fontWeight: 'bold' }}
          onPress={() => {
            userSignin();
            // alert('Sucessfully Log-In')
          }}>
          LOG IN
        </Text>
      </View>
      <View style={styles.registration}>
        <Text
          style={{ fontWeight: 'bold' }}
          onPress={() => props.navigation.navigate('Sign Up')}>
          REGISTRATION
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: 'grey',
    justifyContent: 'center',
    textAlign: 'center',
  },

  usernametext: {
    width: 300,
    height: 50,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  password: {
    width: 300,
    height: 50,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    top: 10,
  },
  login: {
    width: 130,
    height: 50,
    backgroundColor: '#F48FB1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 150,
    borderRadius: 50,
    top: 20,
  },
  registration: {
    width: 150,
    height: 50,
    backgroundColor: '#db7093',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    bottom: 30,
    left: 70,
  },

  background: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    top: 0,
  },
  direction: {
    flexDirection: 'column',
  },
});
export default Hello;
