import {useEffect, useState, useContext} from 'react';
import {Text, View} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';

function Profile(props) {
  const theme = useContext(themeContext);
  const [userData, setUserData] = useState(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const currentUser = auth().currentUser;
    if (currentUser) {
      const userDataRef = database().ref(`users/${currentUser.uid}`);

      // Listen for changes to the user data in real-time
      const onValueChange = userDataRef.on(
        'value',
        snapshot => {
          const data = snapshot.val();
          console.log('Data retrieved from Firebase:', data);
          setUserData(data);
          console.log('State updated with data:', data);
        },
        error => {
          console.log('Error retrieving user data:', error);
        },
      );

      // Clean up the listener when the component unmounts
      return () => {
        userDataRef.off('value', onValueChange);
        setIsMounted(false);
      };
    }
  }, []);

  if (!userData && isMounted) {
    return <Text style={{color: theme.color}}>Loading...</Text>;
  }

  console.log('Displaying full name:', userData.fullName);
  console.log('Displaying email:', userData.email);
  console.log('Displaying address:', userData.address);
  console.log('Displaying contact number:', userData.contactNumber);
  console.log('Displaying country:', userData.country);

  return (
    <View style={{backgroundColor: theme.background}}>
      <Text style={{color: theme.color}}>Name: {userData.fullName}</Text>
      <Text style={{color: theme.color}}>Email: {userData.email}</Text>
      <Text style={{color: theme.color}}>Address: {userData.address}</Text>
      <Text style={{color: theme.color}}>Contact Number: {userData.contactNumber}</Text>
      <Text style={{color: theme.color}}>Country: {userData.country}</Text>
    </View>
  );
}

export default Profile;
