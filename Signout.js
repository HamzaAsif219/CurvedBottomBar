import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { AuthContext } from '../navigation/AuthProvider';

const Header = ({ navigation, title }) => {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.header}>
      <IconButton
        icon="menu"
        size={28}
        onPress={() => navigation.openDrawer()}
        style={styles.icon}
      />
      <Text style={styles.headerText}>{title}</Text>
      <IconButton
        icon="logout"
        size={28}
        onPress={() => logout()}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
});

export default Header;
