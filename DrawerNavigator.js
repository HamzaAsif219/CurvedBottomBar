import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Text} from 'react-native';
import CustomDrawer from './Drawer/CustomDrawer';
import {Main} from './Drawer/Main';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{headerShown: true}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
