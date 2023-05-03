import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import app from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

function SignUp(props) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [country, setCountry] = useState('');

  const createUser = () => {
    if (password !== confirmPassword) {
      console.log('Passwords do not match!');
      return;
    }
    app
    .auth()
    .createUserWithEmailAndPassword(email, password,)
    .then((userCredential) => {
      const { user } = userCredential;
      console.log('User account created! Please log-in');

      // Store user data in Firebase database
      database().ref(`users/${user.uid}`).set({
        fullName,
        email,
        address,
        contactNumber,
        country,
      });

      props.navigation.navigate('Signinpage');
    })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
      }}>
      <Text
        style={{
          fontSize: 30,
          bottom: 20,
          fontWeight: 'bold',
          color: 'white',
          textDecorationLine: 'underline',
        }}>
        Create a new account
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          width: 400,
          height: 35,
          borderRadius: 50,
          margin: 5,
        }}>
        <TextInput
          placeholder="Full Name"
          value={fullName}
          onChangeText={text => setFullName(text)}
          underlineColorAndroid={'transparent'}></TextInput>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: 400,
          height: 35,
          borderRadius: 50,
          margin: 5,
        }}>
        <TextInput
          placeholder="Email address"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          underlineColorAndroid={'transparent'}></TextInput>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: 400,
          height: 35,
          borderRadius: 50,
          margin: 5,
        }}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
          underlineColorAndroid={'transparent'}></TextInput>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: 400,
          height: 35,
          borderRadius: 50,
          margin: 5,
        }}>
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          underlineColorAndroid={'transparent'}></TextInput>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          width: 400,
          height: 35,
          borderRadius: 50,
          margin: 5,
        }}>
        <TextInput
          placeholder="Address"
          value={address}
          onChangeText={text => setAddress(text)}
          underlineColorAndroid={'transparent'}></TextInput>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: 400,
          height: 35,
          borderRadius: 50,
          margin: 5,
        }}>
        <TextInput
          placeholder="Contact Number"
          value={contactNumber}
          onChangeText={text => setContactNumber(text)}
          keyboardType="phone-pad"
          underlineColorAndroid={'transparent'}></TextInput>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: 400,
          height: 35,
          borderRadius: 50,
          margin: 5,
        }}>
        <TextInput
          placeholder="Country"
          value={country}
          onChangeText={text => setCountry(text)}
          underlineColorAndroid={'transparent'}></TextInput>
      </View>
      <View
        style={{
          backgroundColor: '#F48FB1',
          width: 400,
          height: 35,
          borderRadius: 50,
          margin: 5,
        }}>
        <Text
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            top: 3,
            color: 'white',
            fontSize: 20,
            fontWeight: '600',
          }}
          onPress={() => {
            createUser();
            // alert('Account Created Sucessfully');
          }}>
          Sign Up
        </Text>
      </View>
      <View>
        <Text style={{color: 'white', fontWeight: '600'}}>
          Already have account?{' '}
          <Text
            style={{color: 'red'}}
            onPress={() => {
              props.navigation.navigate('Signinpage');
            }}>
            Log in
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SignUp;
